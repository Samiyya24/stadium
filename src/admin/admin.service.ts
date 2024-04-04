import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { LoginAdminDto } from './dto/login-admin.dto';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminRepo: typeof Admin,
    private readonly jwtService: JwtService,
  ) {}

  async getTokens(admin: Admin) {
    const payload = {
      id: admin.id,
      is_active: admin.is_active,
      // is_owner: admin.is_owner,
    };
    const [accessToken, refreshToken] = await Promise.all([
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
      access_token: accessToken,
      refreshToken: refreshToken,
    };
  }
  // -------------------LOGIN-------------------------------
  async login(loginAdminDto: LoginAdminDto, res: Response) {
    const { email, password } = loginAdminDto;
    const admin = await this.adminRepo.findOne({ where: { email } });
    if (!admin) {
      throw new BadRequestException('Admin not found');
    }
    if (!admin.is_active) {
      throw new BadRequestException('Admin not active');
    }
    const isMatchPass = await bcrypt.compare(password, admin.hashed_password);
    if (!isMatchPass) {
      throw new BadRequestException('Password do not match');
    }

    const tokens = await this.getTokens(admin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
    const updatedUser = await this.adminRepo.update(
      { hashed_refresh_token },
      {
        where: { id: admin.id },
        returning: true,
      },
    );
    res.cookie('refresh_token', tokens.refreshToken, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: 'Admin logged in',
      admin: updatedUser[1][0],
      tokens,
    };
    return response;
  }

  // -------------------LOGOUT-------------------------------
  async logout(refreshToken: string, res: Response) {
    const adminDate = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!adminDate) {
      throw new ForbiddenException('User not verified');
    }
    const updatedUser = await this.adminRepo.update(
      { hashed_refresh_token: null },
      {
        where: { id: adminDate.id },
        returning: true,
      },
    );
    res.clearCookie('refresh_token');
    const response = {
      message: 'User logged out successfully',
      admin_refresh_token: updatedUser[1][0].hashed_refresh_token,
    };
    return response;
  }

  async refreshToken(adminId: number, refreshToken: string, res: Response) {
    const decodedToken = await this.jwtService.decode(refreshToken);
    if (adminId !== decodedToken['id']) {
      throw new BadRequestException('Ruxsat etilmagan');
    }
    const admin = await this.adminRepo.findOne({ where: { id: adminId } });
    if (!admin || !admin.hashed_refresh_token) {
      throw new BadRequestException('admin not found');
    }
    const tokenMatch = await bcrypt.compare(
      refreshToken,
      admin.hashed_refresh_token,
    );
    if (!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    }
    const tokens = await this.getTokens(admin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
    const updatedUser = await this.adminRepo.update(
      { hashed_refresh_token },
      {
        where: { id: admin.id },
        returning: true,
      },
    );
    res.cookie('refresh_token', tokens.refreshToken, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: 'User refreshed ',
      admin: updatedUser[1][0],
      tokens,
    };
    return response;
  }

  create(createAdminDto: CreateAdminDto) {
    return this.adminRepo.create(createAdminDto);
  }

  findAll() {
    return this.adminRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.adminRepo.findByPk(id);
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminRepo.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.adminRepo.destroy({ where: { id } });
  }
}
