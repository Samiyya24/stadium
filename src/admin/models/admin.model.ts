import { ApiProperty } from "@nestjs/swagger";
import { BOOLEAN } from "sequelize";
import { INTEGER } from "sequelize";
import { STRING } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAdminCreateAttr {
  id: number;
  login: string;
  email: string;
  tgLink: string;
  photo: string;
  hashed_password: string;
  is_active: boolean;
  is_creator: boolean;
  hashed_refresh_token: string;
}

@Table({ tableName: 'admin' })
export class Admin extends Model<Admin, IAdminCreateAttr> {
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
    description: 'Foydalanuvchining logini',
  })
  @Column({
    type: DataType.STRING,
  })
  login: string;

  @ApiProperty({
    example: 'Sobir@gmail.com',
    description: 'Foydalanuvchining email',
  })
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @ApiProperty({
    example: '@sobir',
    description: 'Foydalanuvchining telegram linki',
  })
  @Column({
    type: DataType.STRING,
  })
  tgLink: string;

  // @Column({
  //   type: BOOLEAN,
  //   defaultValue: false,
  // })
  // is_owner: boolean;

  @ApiProperty({
    example: 'Sobir.png',
    description: 'Foydalanuvchining rasmi',
  })
  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @ApiProperty({
    example: 'Swdefowdefbsdir',
    description: 'Foydalanuvchining hashed_password',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @ApiProperty({
    example: 'true',
    description: 'Foydalanuvchining activeligini tekshirish',
  })
  
  @Column({
    type: DataType.BOOLEAN,
    defaultValue:false
  })
  is_active: boolean;

  @ApiProperty({
    example: 'true',
    description: 'Foydalanuvchining ceratorligini tekshirish',
  })
  @Column({
    type: DataType.BOOLEAN,
  })
  is_creator: boolean;

  @ApiProperty({
    example: 'Swdefowdefbsdir',
    description: 'Foydalanuvchining hashed_refresh_token',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
}
