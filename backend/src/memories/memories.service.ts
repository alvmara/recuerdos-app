import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Memory } from '../database/entities/memory.entity';
import { Repository } from 'typeorm';
import { MemoriesSeederService } from 'src/database/seeders/memory.seeder';

interface ListMemoriesConfig {
    page: number;
    limit: number;
}

@Injectable()
export class MemoriesService {
    constructor(
        @InjectRepository(Memory)
        private readonly memoryRepository: Repository<Memory>,
        // private readonly memoriesSeeder: MemoriesSeederService
    ) {
        // this.memoriesSeeder.create();
    }


    findBy(params: any): Promise<Memory> {
        return this.memoryRepository.findOne({
            where: params
        });
    }

    listMemories(config: ListMemoriesConfig) {
        return this.memoryRepository.find({
            skip: (config.page - 1) * config.limit,
            take: config.limit,
            order: {
                date: 'DESC'
            }
        });
    }


    createMemory(memory: Memory) {
        return this.memoryRepository.save(memory);
    }

    async updateMemory(id: string, memory: Partial<Memory>) {
        await this.memoryRepository.update(id, memory);

        return memory;
    }

}
