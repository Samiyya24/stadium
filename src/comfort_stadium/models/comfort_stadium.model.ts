import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ICStadiumCreateAttr {
  stadium_id: number;
  comfort_id: number;
}
@Table({ tableName: 'comfort_stadium' })
export class ComfortStadium extends Model<ComfortStadium, ICStadiumCreateAttr> {
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
  comfort_id: number;
}
