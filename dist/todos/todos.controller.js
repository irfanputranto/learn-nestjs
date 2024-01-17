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
exports.TodosController = void 0;
const common_1 = require("@nestjs/common");
const todos_service_1 = require("./todos.service");
const create_todo_dto_1 = require("./dtos/create-todo.dto");
const jwt_1 = require("@nestjs/jwt");
let TodosController = class TodosController {
    constructor(todosService, jwtService) {
        this.todosService = todosService;
        this.jwtService = jwtService;
    }
    async create(request, dto) {
        try {
            const cookie = request.cookies['authentication'];
            const data = await this.jwtService.verifyAsync(cookie);
            if (!data) {
                throw new common_1.UnauthorizedException();
            }
            return this.todosService.create(dto);
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
    async findMany(request) {
        try {
            const cookie = request.cookies['authentication'];
            const data = await this.jwtService.verifyAsync(cookie);
            if (!data) {
                throw new common_1.UnauthorizedException();
            }
            return this.todosService.findMany();
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
    async update(request, id, dto) {
        try {
            const cookie = request.cookies['authentication'];
            const data = await this.jwtService.verifyAsync(cookie);
            if (!data) {
                throw new common_1.UnauthorizedException();
            }
            return this.todosService.update(id, dto);
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
    async delete(request, id) {
        try {
            const cookie = request.cookies['authentication'];
            const data = await this.jwtService.verifyAsync(cookie);
            if (!data) {
                throw new common_1.UnauthorizedException();
            }
            return this.todosService.delete(id);
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.TodosController = TodosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_todo_dto_1.CreateTodoDto]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "findMany", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, create_todo_dto_1.CreateTodoDto]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "delete", null);
exports.TodosController = TodosController = __decorate([
    (0, common_1.Controller)("todos"),
    __metadata("design:paramtypes", [todos_service_1.TodosService,
        jwt_1.JwtService])
], TodosController);
//# sourceMappingURL=todos.controller.js.map