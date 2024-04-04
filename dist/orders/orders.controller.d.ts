import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<import("./models/order.model").Order>;
    findAll(): Promise<import("./models/order.model").Order[]>;
    findOne(id: string): Promise<import("./models/order.model").Order>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<[affectedCount: number, affectedRows: import("./models/order.model").Order[]]>;
    remove(id: string): Promise<number>;
}
