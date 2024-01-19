import { OnApplicationBootstrap } from '@nestjs/common';
import { Queue } from 'bull';
import { RedisService } from 'nestjs-redis';
export declare class QueueService implements OnApplicationBootstrap {
    private readonly productQueue;
    private readonly redisService;
    constructor(productQueue: Queue, redisService: RedisService);
    onApplicationBootstrap(): Promise<void>;
    addToQueue(data: any): Promise<void>;
    getResultFromRedis(): Promise<any>;
    scheduleJob(): void;
}
