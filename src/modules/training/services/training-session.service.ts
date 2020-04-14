import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository, In, Raw } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingSession } from '../entities/training-session.entity';
import { SessionParticipant } from '../entities/training-session-participant.entity';
import { SessionFacilitator } from '../entities/training-session-facilitatory.entity';
import { Record } from 'src/modules/record/entities/record.entity';

@Injectable()
export class TrainingSessionService extends BaseService<TrainingSession> {
  constructor(
    @InjectRepository(TrainingSession)
    private trainingSessionRepository: Repository<TrainingSession>,
    @InjectRepository(SessionParticipant)
    private participantRepository: Repository<SessionParticipant>,
    @InjectRepository(SessionFacilitator)
    private facilitatorsRepository: Repository<SessionFacilitator>,
    @InjectRepository(Record)
    private recordRepository: Repository<Record>
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
    let participants = await this.participantRepository.find({
      where:{
        trainingSessionId: Raw(`(SELECT id FROM trainingsession WHERE uid='${uid}')`)//session.id
      }
    });
    return {
      participants: await this.recordRepository.find({
        relations: ['recordValues'],
        where:{
          id: In(participants.map((participant)=>participant.recordId))
        }
      })
    };
  }

  async getFacilitators(uid: string) {
    let participants = await this.facilitatorsRepository.find({
      where:{
        trainingSessionId: Raw(`(SELECT id FROM trainingsession WHERE uid='${uid}')`)//session.id
      }
    });
    return {
      facilitators: await this.recordRepository.find({
        relations: ['recordValues'],
        where:{
          id: In(participants.map((participant)=>participant.recordId))
        }
      })
    };
  }
}

