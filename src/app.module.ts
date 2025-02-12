import { Module } from '@nestjs/common';
import * as process from 'node:process';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MobileModule } from './mobileapi/mobile.module';
import { FrontModule } from './front/front.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      autoLoadEntities: true,
      // synchronize: true,
    }),
    FrontModule,
    MobileModule,
  ],
  providers: [],
})
export class AppModule {}
