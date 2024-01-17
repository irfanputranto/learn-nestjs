import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([Todo]),
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '1d' }
        }),
    ],
    controllers: [
        TodosController,],
    providers: [
        TodosService,],
})
export class TodosModule { }
