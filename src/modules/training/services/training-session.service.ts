import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingSession } from '../entities/training-session.entity';

@Injectable()
export class TrainingSessionService extends BaseService<TrainingSession> {
  constructor(
    @InjectRepository(TrainingSession)
    private trainingSessionRepository: Repository<TrainingSession>,
  ) {
    super(trainingSessionRepository, TrainingSession);
  }
  async deliverymode() {
    let deliverymode: {};
    return (deliverymode = {
      deliverymode: [
        { id: 'classroom', name: ' Classroom Training' },
        { id: 'onjob', name: 'On Job Training' },
        { id: 'mentorship', name: ' Mentorship' },
        { id: 'online', name: 'Online' },
      ],
    });
  }
  async getParticipants(uid: string) {
    return this.trainingSessionRepository.findOne(uid);
  }
}

