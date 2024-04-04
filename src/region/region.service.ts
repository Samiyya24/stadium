import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepo: typeof Region) {}
  async create(createRegionDto: CreateRegionDto) {
    return this.regionRepo.create(createRegionDto);
  }

  async findAll() {
    return this.regionRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.regionRepo.findByPk(id);
  }

  
  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const region = await this.regionRepo.update(updateRegionDto, {
      where: { id },
      returning: true,
    });
    return region[1][0];
  }

  async remove(id: number) {
    return this.regionRepo.destroy({ where: { id } });
  }
}
