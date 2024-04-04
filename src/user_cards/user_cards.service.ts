import { Injectable } from '@nestjs/common';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserCard } from './models/user_card.models';

@Injectable()
export class UserCardsService {
  constructor(@InjectModel(UserCard) private userCatrdRepo: typeof UserCard){}

  create(createUserCardDto: CreateUserCardDto) {
    return this.userCatrdRepo.create(createUserCardDto);
  }

  findAll() {
    return this.userCatrdRepo.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.userCatrdRepo.findByPk(id);
  }

  update(id: number, updateUserCardDto: UpdateUserCardDto) {
return this.userCatrdRepo.update(updateUserCardDto, {
  where: { id },
  returning: true,
});  }

  remove(id: number) {
    return this.userCatrdRepo.destroy({ where: { id } });
  }
}
