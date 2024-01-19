"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueService = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const nestjs_redis_1 = require("nestjs-redis");
let QueueService = class QueueService {
    constructor(productQueue, redisService) {
        this.productQueue = productQueue;
        this.redisService = redisService;
    }
    async onApplicationBootstrap() {
        this.scheduleJob();
    }
    async addToQueue(data) {
        await this.productQueue.add(data);
    }
    async getResultFromRedis() {
        const result = await this.redisService.getClient().get('productKey');
        return JSON.parse(result);
    }
    scheduleJob() {
        setInterval(async () => {
            const data = { message: `Scheduled task at ${new Date().toLocaleTimeString()}` };
            await this.addToQueue(data);
            const result = await this.getResultFromRedis();
            console.log('Schedulet Task Result => ', result);
        }, 5000);
    }
};
exports.QueueService = QueueService;
exports.QueueService = QueueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, bull_1.InjectQueue)('product')),
    __metadata("design:paramtypes", [Object, nestjs_redis_1.RedisService])
], QueueService);
//# sourceMappingURL=queue.service.js.map