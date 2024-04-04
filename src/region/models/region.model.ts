import { ApiProperty } from "@nestjs/swagger";
import { STRING } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IRegionCreateAttr{
    name:string
}
@Table({ tableName: 'region' })
export class Region extends Model<Region, IRegionCreateAttr> {
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
