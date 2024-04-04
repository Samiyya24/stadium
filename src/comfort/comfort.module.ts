import { Module } from '@nestjs/common';
import { ComfortService } from './comfort.service';
import { ComfortController } from './comfort.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comfort } from './models/comfort.models';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Comfort]), JwtModule.register({})],
  controllers: [ComfortController],
  providers: [ComfortService],
})
export class ComfortModule {}
