import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Memory } from 'src/database/entities/memory.entity';
import { MemoriesService } from './memories.service';

@Controller('memories')
export class MemoriesController {

    constructor(
        private readonly memoryService: MemoriesService,
    ) { }

    @Get()
    listMemories(@Query('page') page: number) {
        return this.memoryService.listMemories({ page, limit: 50 });
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createMemory(memory: Partial<Memory>) {
        return this.memoryService.createMemory(memory as Memory)
    }
}
