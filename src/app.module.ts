import { QueueModule } from './queue/queue.module';
import { ScheduleTaskService } from './Cron/schedule-task.service';
import { TodosModule } from './todos/todos.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { dbConfig } from './config/db.config';
import { PassportModule } from '@nestjs/passport';
import { ScheduleModule } from '@nestjs/schedule';
import { QueueService } from './queue/queue.service';

@Module({
  imports: [
    QueueModule,
    ScheduleModule.forRoot(),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TodosModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(dbConfig),
    TypeOrmModule.forFeature([User]), // entitie feature add
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' }
    }),

  ],
  controllers: [AppController],
  providers: [
    ScheduleTaskService,
    AppService
  ],
})
export class AppModule { }
