import { Injectable } from '@nestjs/common';
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
        // TODO: Validar que las contraseñas coincidan

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
                throw new Error('User not found');
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

        return this.userService.create(user);
    }
}
