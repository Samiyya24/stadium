import { ApiProperty } from "@nestjs/swagger";
import { STRING } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IComfortCreateAttr{
    name:string
}
@Table({ tableName: 'comfort' })
export class Comfort extends Model<Comfort, IComfortCreateAttr> {
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

  @ApiProperty({
    example: 'Sobir',
    description: 'Foydalanuvchining ismi',
  })
  @Column({
    type: STRING,
  })
  name: string;
}
