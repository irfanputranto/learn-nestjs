import { Job } from "bull";
import { RedisService } from "nestjs-redis";
export declare class ProductProcessor {
    private readonly redisService;
    constructor(redisService: RedisService);
    handleProductJob(job: Job): Promise<void>;
}
