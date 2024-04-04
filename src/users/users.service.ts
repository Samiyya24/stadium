import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import { MailService } from '../mail/mail.service';
import { LoginUserDto } from './dto/login-user.dto';
import { Response } from 'express';
import { FindUserDto } from './dto/find-user.dto';
import { Op } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepo: typeof User,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}
  async getTokens(user: User) {
    const payload = {
      id: user.id,
      is_active: user.is_active,
      is_owner: user.is_owner,
    };
    const [accsessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: accsessToken,
      refreshToken: refreshToken,
    };
  }

  async registration(createUserDto: CreateUserDto, res: Response) {
    const user = await this.userRepo.findOne({
      where: { email: createUserDto.email },
    });
    if (user) {
      throw new BadRequestException('Bunday foydalanuvchi mavjud');
    }
    if (createUserDto.password !== createUserDto.confirm_password) {
      throw new BadRequestException('Parollar mos emas');
    }
    const hashed_password = await bcrypt.hash(createUserDto.password, 7);
    const newUser = await this.userRepo.create({
      ...createUserDto,
      hashed_password,
    });
    const tokens = await this.getTokens(newUser);
    const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
    const activation_link = v4();
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token, activation_link },
      {
        where: { id: newUser.id },
        returning: true,
      },
    );
    res.cookie('refresh_token', tokens.refreshToken, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    try {
      await this.mailService.sendMail(updatedUser[1][0]);
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Xatni yuborishda xatolik');
    }
    const response = {
      message: 'User registered',
      user: updatedUser[1][0],
      tokens,
    };
    return response;
  }

  async activate(link: string) {
    if (!link) {
      throw new BadRequestException('Activation link not found');
    }
    const updatedUser = await this.userRepo.update(
      { is_active: true },
      {
        where: { activation_link: link, is_active: false },
        returning: true,
      },
    );
    if (!updatedUser[1][0]) {
      throw new BadRequestException('User already activated');
    }
    const response = {
      message: 'User activated successfully',
      user: updatedUser[1][0].is_active,
    };
    return response;
  }

  async login(loginUserDto: LoginUserDto, res: Response) {
    const { email, password } = loginUserDto;
    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    if (!user.is_active) {
      throw new BadRequestException('User  is not activate');
    }
    const isMatchPass = await bcrypt.compare(password, user.hashed_password);
    if (!isMatchPass) {
      throw new BadRequestException('Password do not match');
    }

    const tokens = await this.getTokens(user);
    const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token },
      {
        where: { id: user.id },
        returning: true,
      },
    );
    res.cookie('refresh_token', tokens.refreshToken, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: 'User logged in',
      user: updatedUser[1][0],
      tokens,
    };
    return response;
  }

  async logout(refreshToken: string, res: Response) {
    const userDate = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!userDate) {
      throw new ForbiddenException('User not verified');
    }
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: null },
      {
        where: { id: userDate.id },
        returning: true,
      },
    );
    res.clearCookie('refresh_token');
    const response = {
      message: 'User logged out successfully',
      user_refresh_token: updatedUser[1][0].hashed_refresh_token,
    };
    return response;
  }

  async refreshToken(userId: number, refreshToken: string, res: Response) {
    const decodedToken = await this.jwtService.decode(refreshToken);
    if (userId !== decodedToken['id']) {
      throw new BadRequestException('Ruxsat etilmagan');
    }
    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user || !user.hashed_refresh_token) {
      throw new BadRequestException('user not found');
    }
    const tokenMatch = await bcrypt.compare(
      refreshToken,
      user.hashed_refresh_token,
    );
    if (!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    }
    const tokens = await this.getTokens(user);
    const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token },
      {
        where: { id: user.id },
        returning: true,
      },
    );
    res.cookie('refresh_token', tokens.refreshToken, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: 'User refreshed ',
      user: updatedUser[1][0],
      tokens,
    };
    return response;
  }

  async create(createUserDto: CreateUserDto) {
    return this.userRepo.create(createUserDto);
  }


  async findUser(findUSerDto:FindUserDto){
    const where = {}
    if(findUSerDto.full_name){
      where['full_name'] = {
        [Op.like]:`%${findUSerDto.full_name}%`
      }
    }

    if (findUSerDto.email) {
      where['email'] = {
        [Op.like]: `%${findUSerDto.email}%`,
      };
    }

    if (findUSerDto.phone) {
      where['phone'] = {
        [Op.like]: `%${findUSerDto.phone}%`,
      };
    }

    if (findUSerDto.tg_link) {
      where['tg_link'] = {
        [Op.like]: `%${findUSerDto.tg_link}%`,
      };
    }

    console.log(where);
    
    const users = await this.userRepo.findAll({where})
    if(!users){
      throw new BadRequestException('user not found')
    }
    return users
  }



  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
