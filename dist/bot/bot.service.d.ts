import { Bot } from './models/bot.model';
import { Context, Telegraf } from 'telegraf';
export declare class BotService {
    private botRepo;
    private readonly bot;
    constructor(botRepo: typeof Bot, bot: Telegraf<Context>);
    start(ctx: Context): Promise<void>;
    onContact(ctx: Context): Promise<void>;
}
