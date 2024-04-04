import { ApiProperty } from "@nestjs/swagger";
import { INTEGER } from "sequelize";
import { STRING } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IMediaCreateAttr {
  stadium_id: number;
  photo: string;
  description: string;
}
@Table({ tableName: 'media' })
export class Media extends Model<Media, IMediaCreateAttr> {
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
    type: DataType.STRING,
  })
  photo: string;

  @ApiProperty({
    example: '1',
    description: 'stadium_id',
  })
  @Column({
    type: DataType.INTEGER,
  })
  stadium_id: number;

  @ApiProperty({
    example: "Sobir 1985 yilda falonchi qishlog;ida tug'ilgan",
    description: "Foydalanuvchining ma'lumoti",
  })
  @Column({
    type: DataType.STRING,
  })
  description: string;
}
