"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const user_model_1 = require("./users/models/user.model");
const comfort_module_1 = require("./comfort/comfort.module");
const comfort_models_1 = require("./comfort/models/comfort.models");
const categories_module_1 = require("./categories/categories.module");
const category_model_1 = require("./categories/models/category.model");
const district_module_1 = require("./district/district.module");
const region_module_1 = require("./region/region.module");
const region_model_1 = require("./region/models/region.model");
const admin_module_1 = require("./admin/admin.module");
const admin_model_1 = require("./admin/models/admin.model");
const district_model_1 = require("./district/models/district.model");
const media_module_1 = require("./media/media.module");
const media_model_1 = require("./media/models/media.model");
const mail_module_1 = require("./mail/mail.module");
const comfort_stadium_module_1 = require("./comfort_stadium/comfort_stadium.module");
const comfort_stadium_model_1 = require("./comfort_stadium/models/comfort_stadium.model");
const bot_module_1 = require("./bot/bot.module");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const app_constants_1 = require("./app.constants");
const stadiums_module_1 = require("./stadiums/stadiums.module");
const bot_model_1 = require("./bot/models/bot.model");
const comments_module_1 = require("./comments/comments.module");
const stadium_model_1 = require("./stadiums/models/stadium.model");
const comment_model_1 = require("./comments/models/comment.model");
const user_cards_module_1 = require("./user_cards/user_cards.module");
const user_wallet_module_1 = require("./user_wallet/user_wallet.module");
const user_card_models_1 = require("./user_cards/models/user_card.models");
const user_wallet_model_1 = require("./user_wallet/models/user_wallet.model");
const cart_module_1 = require("./cart/cart.module");
const orders_module_1 = require("./orders/orders.module");
const cart_model_1 = require("./cart/models/cart.model");
const order_model_1 = require("./orders/models/order.model");
const stadium_times_module_1 = require("./stadium_times/stadium_times.module");
const stadium_time_model_1 = require("./stadium_times/models/stadium_time.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_telegraf_1.TelegrafModule.forRootAsync({
                botName: app_constants_1.BOT_NAME,
                useFactory: () => ({
                    token: process.env.BOT_TOKEN,
                    middlewares: [],
                    include: [bot_module_1.BotModule],
                }),
            }),
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                models: [
                    user_model_1.User,
                    comfort_models_1.Comfort,
                    category_model_1.Category,
                    district_model_1.District,
                    region_model_1.Region,
                    admin_model_1.Admin,
                    media_model_1.Media,
                    comfort_stadium_model_1.ComfortStadium,
                    bot_model_1.Bot,
                    stadium_model_1.Stadium,
                    comment_model_1.Comment,
                    user_card_models_1.UserCard,
                    user_wallet_model_1.UserWallet,
                    cart_model_1.Cart,
                    order_model_1.Order,
                    stadium_time_model_1.StadiumTime
                ],
                autoLoadModels: true,
                sync: { alter: true },
                logging: false,
            }),
            users_module_1.UsersModule,
            comfort_module_1.ComfortModule,
            categories_module_1.CategoriesModule,
            district_module_1.DistrictModule,
            region_module_1.RegionModule,
            admin_module_1.AdminModule,
            media_module_1.MediaModule,
            mail_module_1.MailModule,
            comfort_stadium_module_1.ComfortStadiumModule,
            bot_module_1.BotModule,
            stadiums_module_1.StadiumsModule,
            comments_module_1.CommentsModule,
            user_cards_module_1.UserCardsModule,
            user_wallet_module_1.UserWalletModule,
            cart_module_1.CartModule,
            orders_module_1.OrdersModule,
            stadium_times_module_1.StadiumTimesModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map