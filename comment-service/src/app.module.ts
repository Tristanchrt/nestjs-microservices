import { LoggerMiddleware } from './common/middleware/logger';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CommentModule } from './modules/comment/comment.module';


@Module({
  imports: [
    CommentModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('comment');
  }
}

