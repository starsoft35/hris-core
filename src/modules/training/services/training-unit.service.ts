import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingUnit } from '../entities/training-unit.entity';

@Injectable()
export class TrainingUnitService extends BaseService<TrainingUnit> {
    constructor(
        @InjectRepository(TrainingUnit)
        trainingUnitRepository: Repository<TrainingUnit>,
    ) {
        super(trainingUnitRepository, TrainingUnit);
    }
}