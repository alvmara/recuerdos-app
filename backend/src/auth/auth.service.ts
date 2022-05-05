import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
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

    async validate(emailOrUsername: string, password: string): Promise<User | null> {
        const user = await this.userService.findBy([
            { email: emailOrUsername },
            { userName: emailOrUsername }
        ]);

        if (!user) return null;

        return bcrypt.compare(password, user.password) ? user : null;
    }

    public async login(emailOrUsername: string, password: string): Promise<any> {
        const userData = await this.validate(emailOrUsername, password);

        if (!userData) {
            throw new ForbiddenException();
        }

        const accessToken = this.jwtService.sign(JSON.stringify(userData));

        return {
            accessToken,
            user: userData
        };
    }

    public async register(registerData: { userName, email, password }): Promise<any> {
        const user = {
            userName: registerData.userName,
            email: registerData.email,
            password: registerData.password
        } as User;

        let createdUser;
        try {
            createdUser = await this.userService.create(user);
        } catch (error) {
            throw new BadRequestException(error.message);
        }

        const accessToken = this.jwtService.sign(JSON.stringify(createdUser));

        return {
            accessToken,
            user: createdUser
        }
    }
}
