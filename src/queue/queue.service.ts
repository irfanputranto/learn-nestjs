/*
https://docs.nestjs.com/providers#services
*/

import { InjectQueue } from '@nestjs/bull';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Queue } from 'bull';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class QueueService implements OnApplicationBootstrap {
    constructor(
        @InjectQueue('product') private readonly productQueue: Queue,
        private readonly redisService: RedisService
    ) { }

    async onApplicationBootstrap(): Promise<void> {
        this.scheduleJob();
    }

    async addToQueue(data: any): Promise<void> {
        await this.productQueue.add(data);
    }

    async getResultFromRedis(): Promise<any> {
        const result = await this.redisService.getClient().get('productKey');
        return JSON.parse(result);
    }

    scheduleJob(): void {
        setInterval(async () => {
            const data = { message: `Scheduled task at ${new Date().toLocaleTimeString()}` };
            await this.addToQueue(data);

            const result = await this.getResultFromRedis();
            console.log('Schedulet Task Result => ', result);
        }, 5000)
    }


}
