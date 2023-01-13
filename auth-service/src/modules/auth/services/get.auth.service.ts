import { HttpService } from '@nestjs/axios';
import { Injectable, Inject } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { ClientKafka } from '@nestjs/microservices';
import { UsersService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../common/constants';

@Injectable()
export class GetAuthSearvice {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload, jwtConstants ),
        };
    }
}
