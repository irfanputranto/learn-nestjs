"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueModule = void 0;
const queue_controller_1 = require("./queue.controller");
const queue_service_1 = require("./queue.service");
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const product_processor_1 = require("./product.processor");
const nestjs_redis_1 = require("nestjs-redis");
let QueueModule = class QueueModule {
};
exports.QueueModule = QueueModule;
exports.QueueModule = QueueModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    redis: {
                        host: configService.get("REDIS_HOST") || 'localhost',
                        port: configService.get("REDIS_PORT") || 6379,
                    }
                }),
                inject: [config_1.ConfigService],
            }),
            bull_1.BullModule.registerQueue({
                name: 'product',
            }),
            nestjs_redis_1.RedisModule.register({
                host: "localhost",
                port: 6379,
            }),
        ],
        controllers: [
            queue_controller_1.QueueController,
        ],
        providers: [
            queue_service_1.QueueService,
            product_processor_1.ProductProcessor
        ],
    })
], QueueModule);
//# sourceMappingURL=queue.module.js.map