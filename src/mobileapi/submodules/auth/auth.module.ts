import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfo } from '../../../common/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserInfo])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
