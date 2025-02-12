import { Module } from '@nestjs/common';
import { GuestController } from './guest.controller';
import { UserInfo } from '../../../common/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestService } from './guest.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserInfo])],
  controllers: [GuestController],
  providers: [GuestService],
})
export class GuestModule {}
