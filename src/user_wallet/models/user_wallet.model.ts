import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IUserWalletCreateAttr {
  user_id: number;
  wallet: number;
}
@Table({tableName:'user_wallet'})
export class UserWallet extends Model<UserWallet, IUserWalletCreateAttr> {
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
  wallet: number;
}
