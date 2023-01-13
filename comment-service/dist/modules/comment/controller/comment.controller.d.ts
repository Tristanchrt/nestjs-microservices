import { HttpResponseService } from 'src/api/response/http-response.service';
import { GetcommentApplication } from '../application/get.comment.application';
export declare class CommentController {
    private readonly httpResponseService;
    private readonly getcommentApplication;
    constructor(httpResponseService: HttpResponseService, getcommentApplication: GetcommentApplication);
    handleCommentGelAll(data: any): void;
    findAll(request: any): Promise<string>;
    findOne(res: any, req: any, id: string): Promise<any>;
}
