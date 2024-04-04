"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const bot_model_1 = require("./models/bot.model");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const app_constants_1 = require("../app.constants");
const telegraf_1 = require("telegraf");
let BotService = class BotService {
    constructor(botRepo, bot) {
        this.botRepo = botRepo;
        this.bot = bot;
    }
    async start(ctx) {
        const userId = ctx.from.id;
        const user = await this.botRepo.findOne({ where: { user_id: userId } });
        console.log('user:', user);
        if (!user) {
            await this.botRepo.create({
                user_id: userId,
                username: ctx.from.username,
                first_name: ctx.from.first_name,
                last_name: ctx.from.last_name,
            });
            await ctx.reply(`Iltimos <b>"Telefon raqamini yuborish"</b> tugmasini bosing!`, {
                parse_mode: 'HTML',
                ...telegraf_1.Markup.keyboard([
                    [telegraf_1.Markup.button.contactRequest('Telefon raqamini yuborish')],
                ])
                    .oneTime()
                    .resize(),
            });
        }
        else if (!user.status) {
            await ctx.reply(`Iltimos <b>"Telefon raqamini yuborish"</b> tugmasini bosing!`, {
                parse_mode: 'HTML',
                ...telegraf_1.Markup.keyboard([
                    [telegraf_1.Markup.button.contactRequest('Telefon raqamini yuborish')],
                ])
                    .oneTime()
                    .resize(),
            });
        }
        else {
            await ctx.reply(`Bu bot orqali <b>"STADIUM"</b> dasturi bilan muloqot o'rnatiladi!`, {
                parse_mode: 'HTML',
                ...telegraf_1.Markup.removeKeyboard(),
            });
        }
    }
    async onContact(ctx) {
        if ('contact' in ctx.message) {
            const userId = ctx.from.id;
            const user = await this.botRepo.findOne({ where: { user_id: userId } });
            if (!user) {
                await ctx.reply(`Iltimos <b>" /start "</b> tugmasini bosing!`, {
                    parse_mode: 'HTML',
                    ...telegraf_1.Markup.keyboard([['/start']])
                        .oneTime()
                        .resize(),
                });
            }
            else if (ctx.message.contact.user_id !== userId) {
                await ctx.reply(`Iltimos o'zingizni telefon raqamingizni yuboring`, {
                    parse_mode: 'HTML',
                    ...telegraf_1.Markup.keyboard([
                        [telegraf_1.Markup.button.contactRequest('Telefon raqamini yuborish')],
                    ])
                        .oneTime()
                        .resize(),
                });
            }
            else {
                await this.botRepo.update({
                    phone_number: ctx.message.contact.phone_number,
                    status: true,
                }, {
                    where: { user_id: userId },
                });
                await ctx.reply(`Tabriklayman, ro'yxatdan o'tdingiz!`, {
                    parse_mode: 'HTML',
                    ...telegraf_1.Markup.removeKeyboard(),
                });
            }
        }
    }
};
exports.BotService = BotService;
exports.BotService = BotService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(bot_model_1.Bot)),
    __param(1, (0, nestjs_telegraf_1.InjectBot)(app_constants_1.BOT_NAME)),
    __metadata("design:paramtypes", [Object, telegraf_1.Telegraf])
], BotService);
//# sourceMappingURL=bot.service.js.map