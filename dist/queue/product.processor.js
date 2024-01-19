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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const nestjs_redis_1 = require("nestjs-redis");
let ProductProcessor = class ProductProcessor {
    constructor(redisService) {
        this.redisService = redisService;
    }
    async handleProductJob(job) {
        console.log("Processing Product Job => ", job.data);
        await this.redisService.getClient().set('productKey', JSON.stringify(job.data));
    }
};
exports.ProductProcessor = ProductProcessor;
__decorate([
    (0, bull_1.Process)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductProcessor.prototype, "handleProductJob", null);
exports.ProductProcessor = ProductProcessor = __decorate([
    (0, bull_1.Processor)('product'),
    __metadata("design:paramtypes", [nestjs_redis_1.RedisService])
], ProductProcessor);
//# sourceMappingURL=product.processor.js.map