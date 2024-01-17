/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dtos/create-todo.dto';

@Injectable()
export class TodosService {
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>) { }

    async create(dto: CreateTodoDto) {
        const todo = this.todoRepository.create(dto);

        return await this.todoRepository.save(todo);
    }

    async findMany() {
        const todos = await this.todoRepository.find();
        return {
            message: 'success',
            data: todos
        };
    }

    async update(id: number, dto: CreateTodoDto) {
        const todo = await this.todoRepository.findOne({ where: { id } });

        if (!todo) {
            throw new NotFoundException({ message: 'Data Tidak ada' });
        }

        Object.assign(todo, dto);

        return this.todoRepository.save(todo);
    }

    async delete(id: number) {
        const todo = await this.todoRepository.findOne({ where: { id } });

        if (!todo) {
            throw new NotFoundException({ message: 'Data Tidak ada' });
        }

        return await this.todoRepository.remove(todo);
    }
} 
