import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/database/entities/user.entity';
import { UserLikesService } from './userLikes.service';

type RequestWithUser = Express.Request & { user: User }; // Type intersection en TypeScript

@Controller('userLikes')
export class UserLikesController {
    constructor(private readonly userLikesService: UserLikesService) { }

    @UseGuards(JwtAuthGuard)
    @Post('likeMemory')
    likeMemory(@Req() req: RequestWithUser, @Body() { memoryId }: { memoryId: string }) {
        const { user } = req;

        const { id: userId } = user;

        return this.userLikesService.likeMemory({ userId, memoryId });
    }

    @UseGuards(JwtAuthGuard)
    @Post('unlikeMemory')
    unlikeMemory(@Req() req: RequestWithUser, @Body() { memoryId }: { memoryId: string }) {
        const { user } = req;
        const { id: userId } = user;

        return this.userLikesService.unlikeMemory({ userId, memoryId });
    }

    @UseGuards(JwtAuthGuard)
    @Get('getUserLikes')
    getUserLikes(@Req() req: RequestWithUser) {
        const { user } = req;
        const { id: userId } = user;

        return this.userLikesService.getUserLikes(userId);
    }
}
