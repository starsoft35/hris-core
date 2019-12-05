import { Module } from '@nestjs/common';
import { TaskController } from './controllers/Task.controller';
import { TaskService } from './services/Task.service';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/Task.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([Task]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
