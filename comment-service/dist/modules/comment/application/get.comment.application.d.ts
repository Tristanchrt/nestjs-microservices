import { HttpExceptionService } from 'src/api/exception/http-exception.service';
import { GetcommentSearvice } from '../services/get.comment.service';
export declare class GetcommentApplication {
    private readonly httpExceptionService;
    private readonly getcommentSearvice;
    constructor(httpExceptionService: HttpExceptionService, getcommentSearvice: GetcommentSearvice);
    getById(id: string): Promise<any>;
    getAll(): Promise<any>;
    processPayment(): any;
}
