import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { RedisService } from "nestjs-redis";


@Processor('product')
export class ProductProcessor {
    constructor(private readonly redisService: RedisService) { }

    @Process()
    async handleProductJob(job: Job): Promise<void> {
        console.log("Processing Product Job => ", job.data);

        // result save to redis
        await this.redisService.getClient().set('productKey', JSON.stringify(job.data));
    }
}