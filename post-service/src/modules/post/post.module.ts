import { Module } from '@nestjs/common';
import { ExceptionModule } from 'src/api/exception/exception.module';
import { ReponseModule } from 'src/api/response/reponse.module';
import { HttpModule } from '@nestjs/axios';
import { GetPostSearvice } from './services/get.post.service';
import { PostController } from './controller/post.controller';
import { GetPostApplication } from './application/get.post.application';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [ExceptionModule, ReponseModule, HttpModule,
        ClientsModule.register([
            {
                name: 'POST_SERVICE',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId: 'post',
                        brokers: ['kafka:9092'],
                    },
                    consumer: {
                        groupId: 'post.service.consumer'
                    }
                }
            },
        ]),
            
    ],
    controllers: [PostController],
    providers: [GetPostApplication, GetPostSearvice],
})

export class PostModule { }
