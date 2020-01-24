import { Module } from '@nestjs/common';
import { ScheduleController } from './controllers/Schedule.controlles';
import { ScheduleService } from './services/schedule.service';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './entities/schedule.entity';
import { ProcessController } from './controllers/process.controller';
import { ProcessService } from './services/process.service';
import { Process } from './entities/process.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([Schedule, Process]),
  ],
  controllers: [ScheduleController, ProcessController],
  providers: [ScheduleService, ProcessService],
  exports: [ProcessService]
})
export class ScheduleModule {}
