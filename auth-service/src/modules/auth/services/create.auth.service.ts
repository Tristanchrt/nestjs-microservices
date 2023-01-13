import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class CreateAuthService {
    constructor() {}

    async create(auth: any): Promise<any> {
        return Promise.resolve('pomme 3');
    }
}
