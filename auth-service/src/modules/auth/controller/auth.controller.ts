import { Controller, Inject, Res, Body, HttpStatus, UsePipes, Get, Param, ParseUUIDPipe, UseGuards, Req, ArgumentsHost, UseInterceptors, CacheInterceptor, CACHE_MANAGER, Post, Request } from '@nestjs/common';
import { HttpResponseService } from 'src/api/response/http-response.service';
import { GetAuthSearvice } from '../services/get.auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../services/jwt-auth.guard';
import { LocalAuthGuard } from '../services/local-auth.guard';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly httpResponseService: HttpResponseService, private readonly getAuthSearvice: GetAuthSearvice,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        return this.getAuthSearvice.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/current')
    getProfile(@Request() req) {
        return req.user;
    }
    
}
