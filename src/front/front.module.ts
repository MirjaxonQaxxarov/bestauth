import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { GuestModule } from './submodules/guest/guest.module';
import { FrontCorsMiddleware } from '../common/middlewares/frontcors.middleware';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 2,
      },
    ]),
    GuestModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class FrontModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FrontCorsMiddleware).forRoutes('/');
  }
}
