import { Body, Controller, Get, Param, Post, Query, Req, Res, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Memory } from 'src/database/entities/memory.entity';
import { MemoriesService } from './memories.service';

import { diskStorage } from 'multer';
import { extname } from 'path';
import { request } from 'http';
import { User } from 'src/database/entities/user.entity';

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
    createMemory(@Req() request, @Body() memory: Partial<Memory>) {
        const user: User = request.user;

        console.log(request.user);

        memory.ownerId = user.id;
        memory.ownerName = user.userName;
        memory.date = new Date().toISOString();

        return this.memoryService.createMemory(memory as Memory)
    }

    @Post('images/upload')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(
        FilesInterceptor('images', 20, {
            storage: diskStorage({
                destination: './files',
                filename: (req, file, callback) => {
                    const name = file.originalname.split('.')[0];
                    const fileExtName = extname(file.originalname);
                    const randomName = Array(4)
                        .fill(null)
                        .map(() => Math.round(Math.random() * 16).toString(16))
                        .join('');
                    callback(null, `${name}-${randomName}${fileExtName}`);
                }
            }),
            fileFilter: (req, file, callback) => {
                if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                    return callback(new Error('Only image files are allowed!'), false);
                }
                callback(null, true);
            }
        })
    )
    async uploadedFile(@UploadedFiles() files) {
        return files.map(file => `http://localhost:3000/memories/uploaded/${file.filename}`);
    }


    @Get('uploaded/:imgpath')
    getMemoryImage(@Param('imgpath') image, @Res() res) {
        return res.sendFile(image, { root: './files' });
    }

    @Post(':id/comment')
    @UseGuards(JwtAuthGuard)
    async commentMemory(@Param('id') id, @Body() { comment }, @Req() request) {
        const user: User = request.user;

        const memory = await this.memoryService.findBy({ id });

        const commentObject = {} as Memory['comments'][number];

        commentObject.comment = comment;
        commentObject.ownerId = user.id;
        commentObject.ownerName = user.userName;
        commentObject.date = new Date().toISOString();

        memory.comments.push(commentObject);

        return this.memoryService.updateMemory(memory.id, { comments: memory.comments });
    }
}

