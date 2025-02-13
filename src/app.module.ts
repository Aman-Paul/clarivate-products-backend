import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), CacheModule.register({
    isGlobal: true
  }), ScheduleModule.forRoot(), PrismaModule],
})
export class AppModule {}
