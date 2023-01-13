import { Controller, Inject, Res, Body, HttpStatus, UsePipes, Get, Param, ParseUUIDPipe, UseGuards, Req, ArgumentsHost, UseInterceptors, CacheInterceptor, CACHE_MANAGER } from '@nestjs/common';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { HttpResponseService } from 'src/api/response/http-response.service';
import { ClientKafka, EventPattern} from '@nestjs/microservices';
import { GetcommentApplication } from '../application/get.comment.application';

@Controller('comment')
export class CommentController {
    constructor(
        private readonly httpResponseService: HttpResponseService, private readonly getcommentApplication: GetcommentApplication,
    ) {}

    @EventPattern('post.comment.get.all.test')
    // handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    handleCommentGelAll(data: any) {
        console.log('XXXXXXXXXXXXXXX', data)
        this.getcommentApplication.processPayment()
    }
    
    
    @Get()
    async findAll(@Req() request: any): Promise<string> {
        return await this.getcommentApplication.getAll();
    }

    @Get(':id')
    // @UseGuards(new AuthGuard())
    async findOne(@Res() res, @Req() req, @Param('id') id: string) {
        return await this.getcommentApplication.getById(id);
    }
}
