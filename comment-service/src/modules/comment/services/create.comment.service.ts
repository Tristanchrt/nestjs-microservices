import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class CreatecommentService {
    constructor() {}

    async create(comment: any): Promise<any> {
        return Promise.resolve('pomme 3');
    }
}
