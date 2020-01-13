import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingMethod } from '../entities/training-method.entity';

@Injectable()
export class TrainingMethodService extends BaseService<TrainingMethod> {
    constructor(
        @InjectRepository(TrainingMethod)
        trainingMethodRepository: Repository<TrainingMethod>,
    ) {
        super(trainingMethodRepository, TrainingMethod);
    }
}