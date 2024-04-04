import { ApiProperty } from '@nestjs/swagger';
import { BOOLEAN } from 'sequelize';
import { STRING } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IUserCreationAttr {
  full_name: string;
  phone: string;
  email: string;
  hashed_password: string;
  tg_link: string;
  photo: string;
  is_owner: boolean;
  is_active: boolean;
  hashed_refresh_token: string;
}
@Table({ tableName: 'users' })
export class User extends Model<User, IUserCreationAttr> {
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
  full_name: string;
  @ApiProperty({
    example: '+9981234567',
    description: 'Foydalanuvchining telefon raqami',
  })
  @Column({
    type: STRING,
  })
  phone: string;
  @ApiProperty({
    example: 'Sobir@email.com',
    description: 'Foydalanuvchining emaili',
  })
  @Column({
    type: STRING,
    // unique:true
  })
  email: string;
  @ApiProperty({
    example: 'hashed_password',
    description: 'Foydalanuvchining hashed_password',
  })
  @Column({
    type: STRING,
  })
  hashed_password: string;
  @Column({
    type: STRING,
  })
  tg_link: string;
  @Column({
    type: STRING,
  })
  photo: string;
  @Column({
    type: BOOLEAN,
    defaultValue: false,
  })
  is_owner: boolean;
  @Column({
    type: BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;
  @Column({
    type: STRING,
  })
  hashed_refresh_token: string;
  @Column({
    type: DataType.STRING,
  })
  activation_link: string;
}
