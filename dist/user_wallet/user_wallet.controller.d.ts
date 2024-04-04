import { UserWalletService } from './user_wallet.service';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
export declare class UserWalletController {
    private readonly userWalletService;
    constructor(userWalletService: UserWalletService);
    create(createUserWalletDto: CreateUserWalletDto): Promise<import("./models/user_wallet.model").UserWallet>;
    findAll(): Promise<import("./models/user_wallet.model").UserWallet[]>;
    findOne(id: string): Promise<import("./models/user_wallet.model").UserWallet>;
    update(id: string, updateUserWalletDto: UpdateUserWalletDto): Promise<[affectedCount: number, affectedRows: import("./models/user_wallet.model").UserWallet[]]>;
    remove(id: string): Promise<number>;
}
