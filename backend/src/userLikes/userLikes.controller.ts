import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { UserLikesService } from './userLikes.service';

@Controller('userLikes')
export class UserLikesController {
    constructor(private readonly userLikesService: UserLikesService) { }

    @UseGuards(JwtAuthGuard)
    @Post('likeMemory')
    likeMemory(@Req() req, @Body() { memoryId }: { memoryId: string }) {
        const { user } = req;

        console.log({ user });

        const { id: userId } = user;

        return this.userLikesService.likeMemory({ userId, memoryId });
    }

    @UseGuards(JwtAuthGuard)
    @Post('unlikeMemory')
    unlikeMemory(@Req() req, @Body() { memoryId }: { memoryId: string }) {
        const { user } = req;
        const { id: userId } = user;

        return this.userLikesService.unlikeMemory({ userId, memoryId });
    }

    @UseGuards(JwtAuthGuard)
    @Get('getUserLikes')
    getUserLikes(@Req() req) {
        const { user } = req;
        const { id: userId } = user;

        return this.userLikesService.getUserLikes(userId);
    }
}
