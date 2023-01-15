import { Module } from '@nestjs/common';
import { ExceptionModule } from 'src/api/exception/exception.module';
import { ReponseModule } from 'src/api/response/reponse.module';
import { HttpModule } from '@nestjs/axios';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CommentController } from './controller/comment.controller';
import { GetcommentSearvice } from './services/get.comment.service';
import { GetcommentApplication } from './application/get.comment.application';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [ExceptionModule, ReponseModule, HttpModule,
        ClientsModule.register([
            {
                name: 'COMMENT_SERVICE',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId: 'comment',
                        brokers: ['kafka:9092'],
                    },
                    consumer: {
                        groupId: 'comment.service.consumer'
                    }
                }
            },
        ]),
        MongooseModule.forRoot('mongodb://test:test123@ph_postdb:27017/testdb?authSource=admin&retryWrites=true&w=majority')
    ],
    controllers: [CommentController],
    providers: [GetcommentApplication, GetcommentSearvice],
})

export class CommentModule { }
