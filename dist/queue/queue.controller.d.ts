import { QueueService } from './queue.service';
export declare class QueueController {
    private readonly queueService;
    constructor(queueService: QueueService);
    addToQueue(): Promise<string>;
    getResult(): Promise<any>;
}
