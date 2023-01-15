import { LoggerMiddleware } from './common/middleware/logger';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { PostModule } from './modules/post/post.module';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports: [
    PostModule,
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
      .forRoutes('post');
  }
}

