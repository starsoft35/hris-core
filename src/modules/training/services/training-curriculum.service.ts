import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { TrainingCurriculum } from '../entities/training-curriculum.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TrainingCurriculumService extends BaseService<TrainingCurriculum> {
    constructor(
        @InjectRepository(TrainingCurriculum)
        trainingCurriculumRepository: Repository<TrainingCurriculum>,
    ) {
        super(trainingCurriculumRepository, TrainingCurriculum);
    }
}