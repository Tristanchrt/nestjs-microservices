import { HttpService } from '@nestjs/axios';
import { Injectable, Inject } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class GetcommentSearvice {
    constructor(@Inject('COMMENT_SERVICE') private readonly client: ClientKafka) { }

    async getById(id: string): Promise<any> {
        try{
            return Promise.resolve('COMMENT 1')
        }catch(e){
            console.log('AAAAAAAAAAA', )
        }
    }

    async getAll(): Promise<any> {
        try {
            this.client.emit('comment.post.create.test', JSON.stringify("id"));
           return Promise.resolve('COMMENT 2')
        } catch (e) {
            console.log('Error', e)
            console.log('AAAAAAAAAAA', )
        }
    }

    processPayment(makePaymentDto: any) {
        console.log('get_titi');
        this.client
            .send('get_titi', "fdddddddddddd")
            .subscribe((user: any) => {
                console.log(
                    `get_titi for user ${user} - amount: ${makePaymentDto}`
                );
            });
    }

    onModuleInit() {
        this.client.subscribeToResponseOf('get_titi');
    }

}
