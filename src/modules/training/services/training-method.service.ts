import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingTopic } from '../entities/training-topic.entity';

@Injectable()
export class TrainingTopicService extends BaseService<TrainingTopic> {
    constructor(
        @InjectRepository(TrainingTopic)
        trainingMethodRepository: Repository<TrainingTopic>,
    ) {
        super(trainingMethodRepository, TrainingTopic);
    }
}