import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IStadiumTimeAttr {
  stadium_id: number;
  start_time: number;
  end_time: number;
  price: number;
}
@Table({ tableName: 'stadium_time' })
export class StadiumTime extends Model<StadiumTime, IStadiumTimeAttr> {
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
  stadium_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  start_time: number;
  @Column({
    type: DataType.INTEGER,
  })
  end_time: number;
  @Column({
    type: DataType.INTEGER,
  })
  price: number;
}
