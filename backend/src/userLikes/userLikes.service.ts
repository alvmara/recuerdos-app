import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserLikes } from 'src/database/entities/userLikes.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserLikesService {
    constructor(
        @InjectRepository(UserLikes)
        private userLikesRepository: Repository<UserLikes>,
    ) { }

    likeMemory(params: { userId: string; memoryId: string; }) {
        const userLikes = Object.assign(new UserLikes(), params);

        return this.userLikesRepository.save(userLikes);
    }

    unlikeMemory(params: { userId: string; memoryId: string; }) {
        return this.userLikesRepository.delete(params);
    }

    async getUserLikes(userId: string) {
        const userLikes = await this.userLikesRepository.find({ where: { userId } });

        return userLikes.map(({ memoryId }) => memoryId);
    }
}
