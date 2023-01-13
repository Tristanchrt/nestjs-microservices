import { Module } from '@nestjs/common';
import { ExceptionModule } from 'src/api/exception/exception.module';
import { ReponseModule } from 'src/api/response/reponse.module';
import { HttpModule } from '@nestjs/axios';
import { GetAuthSearvice } from './services/get.auth.service';
import { AuthController } from './controller/auth.controller';
import { UsersService } from './services/user.service';
import { LocalStrategy } from './services/local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './common/constants';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './services/jwt.strategy';


@Module({
    imports: [ExceptionModule, ReponseModule, HttpModule, PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '7d' },
        }),],
    controllers: [AuthController],
    providers: [GetAuthSearvice, UsersService, LocalStrategy, JwtService, JwtStrategy],
})

export class AuthModule { }
