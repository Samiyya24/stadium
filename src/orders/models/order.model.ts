import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IOrderCreateAttr {
  user_id: number;
  user_wallet_id: number;
  st_times_id: number;
  date: Date;
  createdAt: Date;
  status_id: number;
}
@Table({tableName:'order'})
export class Order extends Model<Order, IOrderCreateAttr> {
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
  user_wallet_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  st_times_id: number;
  @Column({
    type: DataType.DATE,
  })
  date: Date;
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;
}
