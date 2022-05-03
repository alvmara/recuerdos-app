import { Controller, Get, Query } from '@nestjs/common';
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
}
