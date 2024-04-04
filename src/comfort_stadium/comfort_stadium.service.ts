import { Injectable } from '@nestjs/common';
import { CreateComfortStadiumDto } from './dto/create-comfort_stadium.dto';
import { UpdateComfortStadiumDto } from './dto/update-comfort_stadium.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ComfortStadium } from './models/comfort_stadium.model';

@Injectable()
export class ComfortStadiumService {
  constructor(
    @InjectModel(ComfortStadium) private comfortStadiumRepo: typeof ComfortStadium  ) {}

  create(createComfortStadiumDto: CreateComfortStadiumDto) {
    return this.comfortStadiumRepo.create(createComfortStadiumDto);
  }

  findAll() {
    return this.comfortStadiumRepo.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.comfortStadiumRepo.findByPk(id);
  }

  update(id: number, updateComfortStadiumDto: UpdateComfortStadiumDto) {
     return this.comfortStadiumRepo.update(updateComfortStadiumDto, {
       where: { id },
       returning: true,
     });;
  }

  remove(id: number) {
    return this.comfortStadiumRepo.destroy({where:{id}});
  }
}
