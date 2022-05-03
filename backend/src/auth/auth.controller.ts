import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/database/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() data: { emailOrUsername: string, password: string }): Promise<any> {
        return this.authService.login(data.emailOrUsername, data.password);
    }

    @Post('register')
    async register(@Body() user: User): Promise<any> {
        return this.authService.register(user);
    }
}
