import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://Admin:Hehtef43br02f@cluster0.exnip.mongodb.net/pennyTask?retryWrites=true&w=majority"),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
