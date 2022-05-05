import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { UserLikes } from 'src/database/entities/userLikes.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    findBy(params: any): Promise<User> {
        return this.userRepository.findOne({
            where: params
        });
    }

    create(user: User): Promise<User> {
        return this.userRepository.save(Object.assign(new User(), user));
    }
}
