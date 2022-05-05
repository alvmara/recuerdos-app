import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MemoriesModule } from './memories/memories.module';
import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';
import { UserLikesModule } from './userLikes/userLikes.module';
import { ConfigModule } from '@nestjs/config';

console.log('ENV', process.env);

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      connectString: process.env.DATABASE_URL,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),

    MulterModule.register({
      dest: './files',
    }),

    AuthModule,
    MemoriesModule,
    UsersModule,
    UserLikesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
