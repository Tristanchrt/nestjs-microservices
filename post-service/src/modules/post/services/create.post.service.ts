import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class CreatePostService {
    constructor() {}

    async create(post: any): Promise<any> {
        return Promise.resolve('pomme 3');
    }
}
