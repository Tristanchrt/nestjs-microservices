import { GetPostApplication } from './../application/get.post.application';
import { Controller, Inject, Post, Res, Body, HttpStatus, UsePipes, Get, Param, ParseUUIDPipe, UseGuards, Req, ArgumentsHost, UseInterceptors, CacheInterceptor, CACHE_MANAGER } from '@nestjs/common';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { HttpResponseService } from 'src/api/response/http-response.service';
import { ClientKafka, EventPattern, MessagePattern} from '@nestjs/microservices';

@Controller('post')
export class PostController {
    constructor(
        private readonly httpResponseService: HttpResponseService, private readonly getPostApplication: GetPostApplication,
    ) {}

    @EventPattern('comment.post.create.test')
    // handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    handleUserCreate(data: any) {
        console.log('AAAAAAAAAAAAAA', data)
    }

    @MessagePattern('get_titi')
    handleUserdCreate(data: any) {
        console.log('TIITITITITIT', data)
        return "TTTTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIIIIIIIIIIIIIIIIIIIII"
    }

    @Get()
    async findAll(@Req() request: any): Promise<string> {
        return await this.getPostApplication.getAll();
    }

    @Get(':id')
    @UseGuards(new AuthGuard())
    async findOne(@Res() res, @Req() req, @Param('id') id: string) {
        return await this.getPostApplication.getById(id);
    }
}
