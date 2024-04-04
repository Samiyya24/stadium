import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IStadiumCreateAttr {
  category_id: number;
  owner_id: number;
  contact_with: string;
  name: string;
  volume: string;
  address: string;
  region_id: number;
  district_id: number;
  location: string;
  buildAt: string;
  start_time: string;
  end_time: string;
}


@Table({ tableName: 'stadiums' })
export class Stadium extends Model<Stadium, IStadiumCreateAttr> {
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
  category_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  owner_id: number;

  @Column({
    type: DataType.STRING,
  })
  contact_with: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  volume: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;

  @Column({
    type: DataType.STRING,
  })
  location: string;

  @Column({
    type: DataType.STRING,
  })
  buildAt: string;

  @Column({
    type: DataType.STRING,
  })
  start_time: string;

  @Column({
    type: DataType.STRING,
  })
  end_time: string;
}


