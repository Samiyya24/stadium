import { ApiProperty } from "@nestjs/swagger";
import { INTEGER } from "sequelize";
import { STRING } from "sequelize";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"

interface ICategoriesCreateAttr{
    name:string
    parent_id:number
}
@Table({ tableName: 'category' })
export class Category extends Model<Category, ICategoriesCreateAttr> {
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
    description: 'Parent Category id',
  })
  @ForeignKey(()=>Category)
  @Column({
    type: INTEGER,
  })
  parent_id: number;
  @BelongsTo(()=>Category)                                                                  
  category:Category

}
