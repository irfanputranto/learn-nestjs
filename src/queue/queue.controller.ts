/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post } from '@nestjs/common';
import { QueueService } from './queue.service';

@Controller()
export class QueueController {
    constructor(private readonly queueService: QueueService) { }

    @Post('/addToQueue')
    async addToQueue(): Promise<string> {
        const data = { message: "Hello, Queue!" };
        await this.queueService.addToQueue(data);
        return "Data Added to queue.";
    }

    @Get('/get-result')
    async getResult(): Promise<any> {
        const result = await this.queueService.getResultFromRedis();
        return result || 'No Result available.';
    }
}
