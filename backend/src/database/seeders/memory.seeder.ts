import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Memory } from "../entities/memory.entity";

import { uuid } from "uuidv4";

const getComment = () => ({
    id: uuid(),
    userName: 'Ali conors',
    userPhoto: 'https://images.medicaldaily.com/sites/medicaldaily.com/files/2014/02/04/face.jpg',
    comment: 'I will be in your neighborhood doing errands this Saturday.',
    date: new Date().toISOString(),
});

const getMemory = () => ({
    id: uuid(),
    title: 'Memory Title',
    description: 'Memory Description',
    ownerName: 'Ali Connors',
    ownerId: uuid(),
    images: Array.from({ length: 3 }, (v, k) => `https://picsum.photos/id/${k}/200/200`),
    date: new Date().toISOString(),
    comments: Array.from({ length: 3 }, (k, v) => getComment())
});

const getMemories = () => Array.from({ length: 50 }, (v, k) => getMemory());


/**
 * Service dealing with language based operations.
 *
 * @class
 */
@Injectable()
export class MemoriesSeederService {
    constructor(
        @InjectRepository(Memory)
        private readonly memoriesRepository: Repository<Memory>,
    ) { }

    create(): Array<Promise<Memory>> {
        return getMemories().map(async (memory) => this.memoriesRepository.save(memory));
    }
}