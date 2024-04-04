import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import { UserWallet } from './models/user_wallet.model';
export declare class UserWalletService {
    private userWalletRepo;
    constructor(userWalletRepo: typeof UserWallet);
    create(createUserWalletDto: CreateUserWalletDto): Promise<UserWallet>;
    findAll(): Promise<UserWallet[]>;
    findOne(id: number): Promise<UserWallet>;
    update(id: number, updateUserWalletDto: UpdateUserWalletDto): Promise<[affectedCount: number, affectedRows: UserWallet[]]>;
    remove(id: number): Promise<number>;
}
