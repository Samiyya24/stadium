import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepo: typeof Cart){}
  create(createCartDto: CreateCartDto) {
    return this.cartRepo.create(createCartDto);
  }

  findAll() {
    return this.cartRepo.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.cartRepo.findByPk(id);
  }

  update(id: number, updateCartDto: UpdateCartDto) {
 return this.cartRepo.update(updateCartDto, {
   where: { id },
   returning: true,
 });  }

  remove(id: number) {
    return this.cartRepo.destroy({where:{id}});
  }
}
