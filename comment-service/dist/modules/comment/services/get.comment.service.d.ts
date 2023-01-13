import { ClientKafka } from '@nestjs/microservices';
export declare class GetcommentSearvice {
    private readonly client;
    constructor(client: ClientKafka);
    getById(id: string): Promise<any>;
    getAll(): Promise<any>;
    processPayment(makePaymentDto: any): void;
    onModuleInit(): void;
}
