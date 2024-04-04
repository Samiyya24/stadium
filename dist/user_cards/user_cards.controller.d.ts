import { UserCardsService } from './user_cards.service';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
export declare class UserCardsController {
    private readonly userCardsService;
    constructor(userCardsService: UserCardsService);
    create(createUserCardDto: CreateUserCardDto): Promise<import("./models/user_card.models").UserCard>;
    findAll(): Promise<import("./models/user_card.models").UserCard[]>;
    findOne(id: string): Promise<import("./models/user_card.models").UserCard>;
    update(id: string, updateUserCardDto: UpdateUserCardDto): Promise<[affectedCount: number, affectedRows: import("./models/user_card.models").UserCard[]]>;
    remove(id: string): Promise<number>;
}
