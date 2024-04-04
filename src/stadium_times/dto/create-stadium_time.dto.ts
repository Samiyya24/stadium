import { IsNumber } from "class-validator"

export class CreateStadiumTimeDto {
    @IsNumber()
    stadium_id:number
    @IsNumber()
    start_time:number
    @IsNumber()
    end_time:number
    @IsNumber()
    price:number
}
