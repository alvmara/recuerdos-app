import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/database/entities/user.entity';

const bcrypt = require("bcrypt");


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) {
    }

    async validate(emailOrUsername: string, password: string): Promise<boolean> {
        const user = await this.userService.findBy([
            { email: emailOrUsername },
            { userName: emailOrUsername }
        ]);

        if (!user) return false;

        return bcrypt.compare(password, user.password);
    }

    public async login(emailOrUsername: string, password: string): Promise<any> {
        return this.validate(emailOrUsername, password).then((userData) => {
            if (!userData) {
                throw new ForbiddenException();
            }

            const accessToken = this.jwtService.sign(JSON.stringify(userData));

            return {
                accessToken,
                user: userData
            };
        });
    }

    public async register(registerData: { userName, email, password }): Promise<any> {
        const user = {
            userName: registerData.userName,
            email: registerData.email,
            password: registerData.password
        } as User;

        const createdUser = this.userService.create(user);

        const accessToken = this.jwtService.sign(JSON.stringify(createdUser));

        return {
            accessToken,
            user: createdUser
        }
    }
}
