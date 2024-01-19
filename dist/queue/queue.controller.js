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
exports.QueueController = void 0;
const common_1 = require("@nestjs/common");
const queue_service_1 = require("./queue.service");
let QueueController = class QueueController {
    constructor(queueService) {
        this.queueService = queueService;
    }
    async addToQueue() {
        const data = { message: "Hello, Queue!" };
        await this.queueService.addToQueue(data);
        return "Data Added to queue.";
    }
    async getResult() {
        const result = await this.queueService.getResultFromRedis();
        return result || 'No Result available.';
    }
};
exports.QueueController = QueueController;
__decorate([
    (0, common_1.Post)('/addToQueue'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QueueController.prototype, "addToQueue", null);
__decorate([
    (0, common_1.Get)('/get-result'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QueueController.prototype, "getResult", null);
exports.QueueController = QueueController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [queue_service_1.QueueService])
], QueueController);
//# sourceMappingURL=queue.controller.js.map