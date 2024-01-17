import { TodosService } from './todos.service';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class TodosController {
    private readonly todosService;
    private jwtService;
    constructor(todosService: TodosService, jwtService: JwtService);
    create(request: Request, dto: CreateTodoDto): Promise<import("./todo.entity").Todo>;
    findMany(request: Request): Promise<{
        message: string;
        data: import("./todo.entity").Todo[];
    }>;
    update(request: Request, id: number, dto: CreateTodoDto): Promise<import("./todo.entity").Todo>;
    delete(request: Request, id: number): Promise<import("./todo.entity").Todo>;
}
