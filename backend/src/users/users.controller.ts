import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    profile() {
        return this.userService.profile();
    }

    @UseGuards(JwtAuthGuard)
    @Post('updateProfile')
    updateProfile() {
        return this.userService.updateProfile();
    }
}
