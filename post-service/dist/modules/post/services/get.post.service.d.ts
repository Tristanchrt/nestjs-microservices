import { ClientKafka } from '@nestjs/microservices';
export declare class GetPostSearvice {
    private readonly client;
    constructor(client: ClientKafka);
    getById(id: string): Promise<any>;
    getAll(): Promise<any>;
}
