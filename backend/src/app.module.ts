import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MemoriesModule } from './memories/memories.module';
import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';
import { UserLikesModule } from './userLikes/userLikes.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

// console.log('ENV', process.env.DATABASE_URL);

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService) => {

        console.log(configService, configService.get('DATABASE_URL'));

        return {
          type: 'postgres',
          ssl: true,
          url: configService.get('DATABASE_URL'),
          entities: ["dist/**/*.entity{.ts,.js}"],
          synchronize: true
        }
      },
      inject: [ConfigService],
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
