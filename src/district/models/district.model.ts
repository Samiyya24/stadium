import { ApiProperty } from "@nestjs/swagger";
import { INTEGER } from "sequelize";
import { STRING } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IDistrictCreateAttr {
  name: string;
  region_id: number;
}
@Table({ tableName: 'district' })
export class District extends Model<District, IDistrictCreateAttr> {
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

  @ApiProperty({
    example: '1',
    description: 'Region id',
  })
  @Column({
    type: INTEGER,
  })
  region_id: number;
}
