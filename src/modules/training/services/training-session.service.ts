import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingSession } from '../entities/training-session.entity';
import { SessionParticipant } from '../entities/training-session-participant.entity';
import { SessionFacilitator } from '../entities/training-session-facilitatory.entity';

@Injectable()
export class TrainingSessionService extends BaseService<TrainingSession> {
  constructor(
    @InjectRepository(TrainingSession)
    private trainingSessionRepository: Repository<TrainingSession>,
    @InjectRepository(SessionParticipant)
    private trainingSessionParticipantRepository: Repository<SessionParticipant>,
    @InjectRepository(SessionFacilitator)
    private trainingSessionFacilitatorRepository: Repository<SessionFacilitator>
  ) {
    super(trainingSessionRepository, TrainingSession);
  }
  async deliverymode() {
    let deliverymode: {};
    return (deliverymode = {
      deliverymode: [
        { id: 'Classroom Training', name: 'Classroom Training' },
        { id: 'On Job Training', name: 'On Job Training' },
        { id: 'Mentorship', name: 'Mentorship' },
        { id: 'Online', name: 'Online' },
      ],
    });
  }
  async getParticipants(uid: string) {
    let session:TrainingSession = await this.trainingSessionRepository.findOne({uid:uid});
    return this.trainingSessionParticipantRepository.find({
      where:{
        trainingsessionId: session.id
      }
    });
  }

  async getFacilitators(uid: string) {
    let session:TrainingSession = await this.trainingSessionRepository.findOne({uid:uid});
    return this.trainingSessionFacilitatorRepository.find({
      where:{
        trainingsessionId: session.id
      }
    });
  }
}

