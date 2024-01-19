import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
/*
https://docs.nestjs.com/modules
*/

import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductProcessor } from './product.processor';
import { RedisModule } from 'nestjs-redis';

@Module({
    imports: [
        BullModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                redis: {
                    host: configService.get("REDIS_HOST") || 'localhost',
                    port: configService.get("REDIS_PORT") || 6379,
                }
            }),
            inject: [ConfigService],
        }),
        BullModule.registerQueue({
            name: 'product',
        }),
        RedisModule.register({
            host: "localhost",
            port: 6379,
        }),
    ],
    controllers: [
        QueueController,],
    providers: [
        QueueService,
        ProductProcessor
    ],
})
export class QueueModule { }
