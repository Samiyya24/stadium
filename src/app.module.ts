import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
import { ComfortModule } from './comfort/comfort.module';
import { Comfort } from './comfort/models/comfort.models';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/models/category.model';
import { DistrictModule } from './district/district.module';
import { RegionModule } from './region/region.module';
import { Region } from './region/models/region.model';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/models/admin.model';
import { District } from './district/models/district.model';
import { MediaModule } from './media/media.module';
import { Media } from './media/models/media.model';
import { MailModule } from './mail/mail.module';
import { ComfortStadiumModule } from './comfort_stadium/comfort_stadium.module';
import { ComfortStadium } from './comfort_stadium/models/comfort_stadium.model';
import { BotModule } from './bot/bot.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { BOT_NAME } from './app.constants';
import { StadiumsModule } from './stadiums/stadiums.module';
import { Bot } from './bot/models/bot.model';
import { CommentsModule } from './comments/comments.module';
import { Stadium } from './stadiums/models/stadium.model';
import { Comment } from './comments/models/comment.model';
import { UserCardsModule } from './user_cards/user_cards.module';
import { UserWalletModule } from './user_wallet/user_wallet.module';
import { UserCard } from './user_cards/models/user_card.models';
import { UserWallet } from './user_wallet/models/user_wallet.model';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { Cart } from './cart/models/cart.model';
import { Order } from './orders/models/order.model';
import { StadiumTimesModule } from './stadium_times/stadium_times.module';
import { StadiumTime } from './stadium_times/models/stadium_time.model';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN,
        middlewares: [],
        include: [BotModule],
      }),
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [
        User,
        Comfort,
        Category,
        District,
        Region,
        Admin,
        Media,
        ComfortStadium,
        Bot,
        Stadium,
        Comment,
        UserCard,
        UserWallet,
        Cart,
        Order,
        StadiumTime
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    UsersModule,
    ComfortModule,
    CategoriesModule,
    DistrictModule,
    RegionModule,
    AdminModule,
    MediaModule,
    MailModule,
    ComfortStadiumModule,
    BotModule,
    StadiumsModule,
    CommentsModule,
    UserCardsModule,
    UserWalletModule,
    CartModule,
    OrdersModule,
    StadiumTimesModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
