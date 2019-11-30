import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingSection } from '../entities/training-section.entity';

@Injectable()
export class TrainingSectionService extends BaseService<TrainingSection> {
    constructor(
        @InjectRepository(TrainingSection)
        trainingSectionRepository: Repository<TrainingSection>,
    ) {
        super(trainingSectionRepository, TrainingSection);
    }
}