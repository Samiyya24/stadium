import { Injectable } from '@nestjs/common';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserWallet } from './models/user_wallet.model';

@Injectable()
export class UserWalletService {
  constructor(@InjectModel(UserWallet) private userWalletRepo:typeof UserWallet){}

  create(createUserWalletDto: CreateUserWalletDto) {
    return this.userWalletRepo.create(createUserWalletDto);
  }

  findAll() {
    return this.userWalletRepo.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.userWalletRepo.findByPk(id);
  }

  update(id: number, updateUserWalletDto: UpdateUserWalletDto) {
    return this.userWalletRepo.update(updateUserWalletDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.userWalletRepo.destroy({where:{id}});
  }
}
