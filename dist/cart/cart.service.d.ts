import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './models/cart.model';
export declare class CartService {
    private cartRepo;
    constructor(cartRepo: typeof Cart);
    create(createCartDto: CreateCartDto): Promise<Cart>;
    findAll(): Promise<Cart[]>;
    findOne(id: number): Promise<Cart>;
    update(id: number, updateCartDto: UpdateCartDto): Promise<[affectedCount: number, affectedRows: Cart[]]>;
    remove(id: number): Promise<number>;
}
