import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

type UserFindParams = { [K in keyof User]?: User[K] };

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    findBy(params: any): Promise<User> {
        return this.userRepository.findOne({
            where: params
        });
    }

    create(user: User): Promise<User> {
        return this.userRepository.save(Object.assign(new User(), user));
    }

    profile() {
        return 'Hello world!';
    }

    updateProfile() {
        return 'Hello world!';
    }
}
