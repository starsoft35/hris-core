import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingInstance } from '../entities/training-instance.entity';

@Injectable()
export class TrainingInstanceService extends BaseService<TrainingInstance> {
    constructor(
        @InjectRepository(TrainingInstance)
        trainingSessionRepository: Repository<TrainingInstance>,
    ) {
        super(trainingSessionRepository, TrainingInstance);
    }
}