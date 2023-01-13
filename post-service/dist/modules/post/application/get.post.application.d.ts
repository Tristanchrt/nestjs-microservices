import { HttpExceptionService } from 'src/api/exception/http-exception.service';
import { GetPostSearvice } from '../services/get.post.service';
export declare class GetPostApplication {
    private readonly httpExceptionService;
    private readonly getPostSearvice;
    constructor(httpExceptionService: HttpExceptionService, getPostSearvice: GetPostSearvice);
    getById(id: string): Promise<any>;
    getAll(): Promise<any>;
}
