/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ScheduleTaskService {
    @Cron(CronExpression.EVERY_10_SECONDS)
    handleCron() {
        console.log("Menajalan task schedule setiap 10 detik");
    }
}
