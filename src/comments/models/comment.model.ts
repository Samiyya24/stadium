import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICommentsAttr {
  user_id: number;
  stadium_id: number;
  impression: string;
}

@Table({tableName:'comment'})
export class Comment extends Model<Comment, ICommentsAttr> {
  @ApiProperty({
    example: 1,
    description: 'Foydalanuvchining ID unical raqamai',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;


  @Column({
    type: DataType.INTEGER,
  })
  stadium_id: number;

  @Column({
    type: DataType.STRING,
  })
  impression: string;
}
