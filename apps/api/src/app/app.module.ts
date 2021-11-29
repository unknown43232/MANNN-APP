require("dotenv").config();
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
