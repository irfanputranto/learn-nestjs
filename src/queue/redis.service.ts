/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class RedisServiceWrapper {
    private client;

    constructor(private readonly redisService: RedisService) {
        this.client = redisService.getClient();
    }

    async setData(key: string, value: string): Promise<void> {
        await this.client.set(key, value);
    }

    async getData(key: string): Promise<void> {
        return await this.client.get(key);
    }
}
