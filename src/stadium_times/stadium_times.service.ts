import { Injectable } from '@nestjs/common';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StadiumTime } from './models/stadium_time.model';

@Injectable()
export class StadiumTimesService {
  constructor(
    @InjectModel(StadiumTime) private stadiumTimeRepo: typeof StadiumTime,
  ) {}
  create(createStadiumTimeDto: CreateStadiumTimeDto) {
    return this.stadiumTimeRepo.create(createStadiumTimeDto);
  }

  findAll() {
    return this.stadiumTimeRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.stadiumTimeRepo.findByPk(id);
  }

  update(id: number, updateStadiumTimeDto: UpdateStadiumTimeDto) {
    return this.stadiumTimeRepo.update(updateStadiumTimeDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.stadiumTimeRepo.destroy({ where: { id } });
  }
}
