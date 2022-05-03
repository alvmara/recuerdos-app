import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Memory } from 'src/database/entities/memory.entity';
import { MemoriesSeederService } from 'src/database/seeders/memory.seeder';
import { MemoriesController } from './memories.controller';
import { MemoriesService } from './memories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Memory])],
  controllers: [MemoriesController],
  providers: [MemoriesService, MemoriesSeederService]
})
export class MemoriesModule { }
