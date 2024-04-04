import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(createCartDto: CreateCartDto): Promise<import("./models/cart.model").Cart>;
    findAll(): Promise<import("./models/cart.model").Cart[]>;
    findOne(id: string): Promise<import("./models/cart.model").Cart>;
    update(id: string, updateCartDto: UpdateCartDto): Promise<[affectedCount: number, affectedRows: import("./models/cart.model").Cart[]]>;
    remove(id: string): Promise<number>;
}
