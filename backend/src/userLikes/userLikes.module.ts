import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLikes } from 'src/database/entities/userLikes.entity';
import { UserLikesController } from './userLikes.controller';
import { UserLikesService } from './userLikes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserLikes])
  ],
  providers: [UserLikesService],
  controllers: [UserLikesController],
})
export class UserLikesModule { }
