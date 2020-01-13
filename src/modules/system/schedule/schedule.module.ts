import { Module } from '@nestjs/common';
import { ScheduleController } from './controllers/Schedule.controller';
import { ScheduleService } from './services/Schedule.service';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './entities/Schedule.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([Schedule]),
  ],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
