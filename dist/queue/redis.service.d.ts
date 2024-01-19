import { RedisService } from 'nestjs-redis';
export declare class RedisServiceWrapper {
    private readonly redisService;
    private client;
    constructor(redisService: RedisService);
    setData(key: string, value: string): Promise<void>;
    getData(key: string): Promise<void>;
}
