/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, UnauthorizedException } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller("todos")
export class TodosController {
    constructor(
        private readonly todosService: TodosService,
        private jwtService: JwtService) { }

    @Post()
    async create(@Req() request: Request, @Body() dto: CreateTodoDto) {
        try {
            const cookie = request.cookies['authentication'];
            const data = await this.jwtService.verifyAsync(cookie);

            if (!data) {
                throw new UnauthorizedException();
            }

            return this.todosService.create(dto);
        } catch (error) {
            throw new UnauthorizedException();
        }
    }

    @Get()
    async findMany(@Req() request: Request) {
        try {
            const cookie = request.cookies['authentication'];
            const data = await this.jwtService.verifyAsync(cookie);

            if (!data) {
                throw new UnauthorizedException();
            }

            return this.todosService.findMany();
        } catch (error) {
            throw new UnauthorizedException();
        }
    }

    @Put(':id')
    async update(@Req() request: Request, @Param('id') id: number, @Body() dto: CreateTodoDto) {
        try {
            const cookie = request.cookies['authentication'];
            const data = await this.jwtService.verifyAsync(cookie);

            if (!data) {
                throw new UnauthorizedException();
            }

            return this.todosService.update(id, dto);
        } catch (error) {
            throw new UnauthorizedException();
        }
    }

    @Delete(':id')
    async delete(@Req() request: Request, @Param('id') id: number) {
        try {
            const cookie = request.cookies['authentication'];
            const data = await this.jwtService.verifyAsync(cookie);

            if (!data) {
                throw new UnauthorizedException();
            }

            return this.todosService.delete(id);
        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}
