import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private orderRepo: typeof Order){}

  create(createOrderDto: CreateOrderDto) {
    return this.orderRepo.create(createOrderDto);
  }

  findAll() {
    return this.orderRepo.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.orderRepo.findByPk(id)
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepo.update(updateOrderDto, {
      where:{id},
      returning:true
    });
  }

  remove(id: number) {
    return this.orderRepo.destroy({where:{id}});
  }
}
