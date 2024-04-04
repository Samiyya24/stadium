import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import { UserCard } from './models/user_card.models';
export declare class UserCardsService {
    private userCatrdRepo;
    constructor(userCatrdRepo: typeof UserCard);
    create(createUserCardDto: CreateUserCardDto): Promise<UserCard>;
    findAll(): Promise<UserCard[]>;
    findOne(id: number): Promise<UserCard>;
    update(id: number, updateUserCardDto: UpdateUserCardDto): Promise<[affectedCount: number, affectedRows: UserCard[]]>;
    remove(id: number): Promise<number>;
}
