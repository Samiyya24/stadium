import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IUserCardsCreateAttr {
  user_id: number;
  name: string;
  phone: string;
  number: number;
  year: number;
  month: number;
  is_active: boolean;
  is_main: boolean;
}
@Table({tableName:"user_cards"})
export class UserCard extends Model<UserCard, IUserCardsCreateAttr> {
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
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.INTEGER,
  })
  number: number;

  @Column({
    type: DataType.INTEGER,
  })
  year: number;

  @Column({
    type: DataType.INTEGER,
  })
  month: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_main: boolean;
}
