import { HttpStatus } from '@nestjs/common';
export declare class HttpResponseService {
    sendResponse(res: any, req: any, status: HttpStatus, data: any): Promise<any>;
}
