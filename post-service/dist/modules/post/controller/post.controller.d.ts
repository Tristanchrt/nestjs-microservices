import { GetPostApplication } from './../application/get.post.application';
import { HttpResponseService } from 'src/api/response/http-response.service';
export declare class PostController {
    private readonly httpResponseService;
    private readonly getPostApplication;
    constructor(httpResponseService: HttpResponseService, getPostApplication: GetPostApplication);
    handleUserCreate(data: any): void;
    handleUserdCreate(data: any): string;
    findAll(request: any): Promise<string>;
    findOne(res: any, req: any, id: string): Promise<any>;
}
