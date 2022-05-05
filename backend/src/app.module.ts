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
      type: process.env.TYPE as any || 'postgres',
      host: process.env.DATABASE_HOST as any || 'database',
      port: process.env.DATABASE_PORT as any || 5432,
      username: process.env.DATABASE_USERNAME as any || 'postgres',
      password: process.env.DATABASE_PASSWORD as any || 'postgres',
      database: process.env.DATABASE_NAME as any || 'test',
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
