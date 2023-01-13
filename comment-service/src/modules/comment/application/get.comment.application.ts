import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { HttpExceptionService } from 'src/api/exception/http-exception.service';
import { GetcommentSearvice } from '../services/get.comment.service';

@Injectable()
export class GetcommentApplication {
    constructor(
    private readonly httpExceptionService: HttpExceptionService, private readonly getcommentSearvice: GetcommentSearvice) {}

    async getById(id: string): Promise<any> {
        try {
            const search = await this.getcommentSearvice.getById(id);
            if (!search) 
                this.httpExceptionService.notFoundException("Id not found on seach object");
            return search;
        }catch (e) {
            return this.httpExceptionService.badRequestException(e);
        }
        
    }
    
    async getAll(): Promise<any> {
        try {
            const search = await this.getcommentSearvice.getAll();
            if (!search) 
                this.httpExceptionService.notFoundException("Id not found on seach object");
            return search;
        }catch (e) {
            return this.httpExceptionService.badRequestException(e);
        }
    }

    processPayment(): any {
        try {
            this.getcommentSearvice.processPayment("PAYMENT");
        }catch (e) {
            return this.httpExceptionService.badRequestException(e);
        }
    }
}
