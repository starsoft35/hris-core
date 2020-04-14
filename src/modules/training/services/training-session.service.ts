import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository, In, Raw } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingSession } from '../entities/training-session.entity';
import { SessionParticipant } from '../entities/training-session-participant.entity';
import { SessionFacilitator } from '../entities/training-session-facilitatory.entity';
import { Record } from '../../../modules/record/entities/record.entity';
import { generateUid } from '../../../core/helpers/makeuid';

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
    private recordRepository: Repository<Record>,
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
      where: {
        trainingsessionId: Raw(
          `(SELECT id FROM trainingsession WHERE uid='${uid}')`,
        ), //session.id
      },
    });
    return {
      participants: await this.recordRepository.find({
        relations: ['recordValues'],
        where: {
          id: In(participants.map(participant => participant.recordId)),
        },
      }),
    };
  }

  async getFacilitators(uid: string) {
    let participants = await this.facilitatorsRepository.find({
      where: {
        trainingsessionId: Raw(
          `(SELECT id FROM trainingsession WHERE uid='${uid}')`,
        ), //session.id
      },
    });
    return {
      facilitators: await this.recordRepository.find({
        relations: ['recordValues'],
        where: {
          id: In(participants.map(participant => participant.recordId)),
        },
      }),
    };
  }

  async addParticipant(uid: string, createParticipantDto: any) {
    const { record } = createParticipantDto;
    const records = await this.recordRepository.manager.query(
      `SELECT id from record WHERE uid ='${record}'`,
    );
    const recordid = records[0].id;
    const trainingsession = (
      await this.trainingSessionRepository.findOne({ uid })
    ).id;
    const participant = new SessionParticipant();
    participant.uid = generateUid();
    participant.trainingsessionId = trainingsession;
    participant.recordId = recordid;
    return await this.participantRepository.save(participant);
  }

  async addFacilitator(uid: string, createFacilitatorDto: any) {
    const { record } = createFacilitatorDto;
    const records = await this.recordRepository.manager.query(
      `SELECT id from record WHERE uid ='${record}'`,
    );
    const recordid = records[0].id;
    const trainingsession = (
      await this.trainingSessionRepository.findOne({ uid })
    ).id;
    const facilitator = new SessionFacilitator();
    facilitator.uid = generateUid();
    facilitator.trainingsessionId = trainingsession;
    facilitator.recordId = recordid;
    return await this.facilitatorsRepository.save(facilitator);
  }

  async deleteFacilitator(uid: string, facilitator: any) {
    const facilitators = await this.facilitatorsRepository.manager.query(
      `SELECT id FROM sessionfacilitator WHERE uid='${facilitator}'`,
    );
    if (facilitators[0] == undefined) {
      throw new NotFoundException(
        `Facilitator with ID ${facilitator} is not available `,
      );
    }
    const id = facilitators[0].id;
    let deletedFacilitator = await this.facilitatorsRepository.delete(id);
    if (facilitator.affected === 0) {
      throw new NotFoundException(`Can not delete facilitator with ID ${id} `);
    }
    return deletedFacilitator;
  }

  async deleteParticipant(uid: string, facilitator: any) {
    const participants = await this.participantRepository.manager.query(
      `SELECT id FROM sessionparticipant WHERE uid='${facilitator}'`,
    );
    if (participants[0] == undefined) {
      throw new NotFoundException(
        `Participant with ID ${participants} is not available `,
      );
    }
    const id = participants[0].id;
    let deletedParticipants = await this.participantRepository.delete(id);
    if (facilitator.affected === 0) {
      throw new NotFoundException(`Can not delete participant with ID ${id} `);
    }
    return deletedParticipants;
  }
}
