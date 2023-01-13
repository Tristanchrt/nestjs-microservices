import { HttpService } from '@nestjs/axios';
import { Injectable, Inject } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class GetPostSearvice {
    constructor(@Inject('POST_SERVICE') private readonly client: ClientKafka) { }

    async getById(id: string): Promise<any> {
        try{
            this.client.emit('get_posts', JSON.stringify("EOLA OELA"));
            return Promise.resolve('POST 1')
        }catch(e){
            console.log('AAAAAAAAAAA', )
        }
    }

    async getAll(): Promise<any> {
        try {
            this.client.emit('post.comment.get.all.test', JSON.stringify("id"));
           return Promise.resolve('POST 2')
        } catch (e) {
            console.log('Error', e)
            console.log('AAAAAAAAAAA', )
        }
    }

}
