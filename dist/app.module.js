"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const queue_module_1 = require("./queue/queue.module");
const schedule_task_service_1 = require("./Cron/schedule-task.service");
const todos_module_1 = require("./todos/todos.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_entity_1 = require("./user.entity");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const db_config_1 = require("./config/db.config");
const passport_1 = require("@nestjs/passport");
const schedule_1 = require("@nestjs/schedule");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            queue_module_1.QueueModule,
            schedule_1.ScheduleModule.forRoot(),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            todos_module_1.TodosModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRootAsync(db_config_1.dbConfig),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            jwt_1.JwtModule.register({
                secret: 'secret',
                signOptions: { expiresIn: '1d' }
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            schedule_task_service_1.ScheduleTaskService,
            app_service_1.AppService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map