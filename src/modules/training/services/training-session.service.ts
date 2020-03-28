import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingSession } from '../entities/training-session.entity';

@Injectable()
export class TrainingSessionService extends BaseService<TrainingSession> {
    constructor(
        @InjectRepository(TrainingSession)
        trainingSessionRepository: Repository<TrainingSession>,
    ) {
        super(trainingSessionRepository, TrainingSession);
    }
}