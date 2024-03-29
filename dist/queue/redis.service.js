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
exports.RedisServiceWrapper = void 0;
const common_1 = require("@nestjs/common");
const nestjs_redis_1 = require("nestjs-redis");
let RedisServiceWrapper = class RedisServiceWrapper {
    constructor(redisService) {
        this.redisService = redisService;
        this.client = redisService.getClient();
    }
    async setData(key, value) {
        await this.client.set(key, value);
    }
    async getData(key) {
        return await this.client.get(key);
    }
};
exports.RedisServiceWrapper = RedisServiceWrapper;
exports.RedisServiceWrapper = RedisServiceWrapper = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_redis_1.RedisService])
], RedisServiceWrapper);
//# sourceMappingURL=redis.service.js.map