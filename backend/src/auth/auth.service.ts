import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/database/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) {
    }

    validate(emailOrUsername: string, password: string): Promise<User> {
        return this.userService.findBy([
            { email: emailOrUsername },
            { userName: emailOrUsername }
        ]);
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

    public async register(user: User): Promise<any> {
        return this.userService.create(user)
    }
}
