import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { HttpExceptionService } from 'src/api/exception/http-exception.service';
import { GetPostSearvice } from '../services/get.post.service';

@Injectable()
export class GetPostApplication {
    constructor(
    private readonly httpExceptionService: HttpExceptionService, private readonly getPostSearvice: GetPostSearvice) {}

    async getById(id: string): Promise<any> {
        try {
            const search = await this.getPostSearvice.getById(id);
            if (!search) 
                this.httpExceptionService.notFoundException("Id not found on seach object");
            return search;
        }catch (e) {
            return this.httpExceptionService.badRequestException(e);
        }
    }
    
    async getAll(): Promise<any> {
        try {
            const search = await this.getPostSearvice.getAll();
            if (!search) 
                this.httpExceptionService.notFoundException("Id not found on seach object");
            return search;
        }catch (e) {
            return this.httpExceptionService.badRequestException(e);
        }
    }
}
