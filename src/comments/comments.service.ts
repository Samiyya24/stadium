import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './models/comment.model';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment) private comentRepo:typeof Comment){}

  create(createCommentDto: CreateCommentDto) {
    return this.comentRepo.create(createCommentDto)
  }

  findAll() {
    return this.comentRepo.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.comentRepo.findByPk(id);
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
 return this.comentRepo.update(updateCommentDto, {
   where: { id },
   returning: true,
 });  }

  remove(id: number) {
    return this.comentRepo.destroy({ where: { id } });
  }
}
