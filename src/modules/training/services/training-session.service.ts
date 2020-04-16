import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository, In, Raw } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingSession } from '../entities/training-session.entity';
import { SessionParticipant } from '../entities/training-session-participant.entity';
import { SessionFacilitator } from '../entities/training-session-facilitatory.entity';
import { Record } from '../../../modules/record/entities/record.entity';
import { generateUid } from '../../../core/helpers/makeuid';
import { RecordValue } from 'src/modules/record/entities/record-value.entity';

@Injectable()
export class TrainingSessionService extends BaseService<TrainingSession> {
  constructor(
    @InjectRepository(TrainingSession)
    private trainingSessionRepository: Repository<TrainingSession>,
    @InjectRepository(SessionParticipant)
    private participantRepository: Repository<SessionParticipant>,
    @InjectRepository(SessionFacilitator)
    private facilitatorRepository: Repository<SessionFacilitator>,
    @InjectRepository(Record)
    private recordRepository: Repository<Record>,
    @InjectRepository(RecordValue)
    private recordValueRepository: Repository<RecordValue>,
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
    const session = (await this.trainingSessionRepository.findOne({ uid })).id;
    let participants = await this.participantRepository.find({
      where: {
        trainingsessionId: session,
      },
    });
    if (participants[0] == undefined) {
      throw new NotFoundException(
        `Participants are not available for this training session `,
      );
    }
    return {
    //   participants: await this.recordRepository.find({
    //     relations: ['recordValues'],
    //     where: {
    //       id: In(participants.map(participant => participant.recordId)),
    //     },
    //   }),
    participants: await this.recordValueRepository.find({
      where: {
        recordid: In(participants.map(participant => participant.recordId)),
      },
      join: {
        alias: 'recordValue',
        leftJoinAndSelect: { field: 'recordValue.field' },
      },
    }),
  };  

  }

  async getFacilitators(uid: string) {
    const session = (await this.trainingSessionRepository.findOne({ uid })).id;
    let facilitators = await this.facilitatorRepository.find({
      where: {
        trainingsessionId: session,
      },
    });
    if (facilitators[0] == undefined) {
      throw new NotFoundException(
        `Facilitators are not available for this training session `,
      );
    }
    return {
      facilitators: await this.recordValueRepository.find({
        where: {
          recordid: In(facilitators.map(facilitator => facilitator.recordId)),
        },
        join: {
          alias: 'recordValue',
          leftJoinAndSelect: { field: 'recordValue.field' },
        },
      }),
    };
   }

  async addParticipant(uid: string, createParticipantDto: any) {
    const { record } = createParticipantDto;
    const records = await this.recordRepository.find({
      where: [{ uid: record }],
    });
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
    const records = await this.recordRepository.find({
      where: [{ uid: record }],
    });
    const recordid = records[0].id;
    const trainingsession = (
      await this.trainingSessionRepository.findOne({ uid })
    ).id;
    const facilitator = new SessionFacilitator();
    facilitator.uid = generateUid();
    facilitator.trainingsessionId = trainingsession;
    facilitator.recordId = recordid;
    return await this.facilitatorRepository.save(facilitator);
  }

  async deleteFacilitator(uid: string, record: any) {
    const records = await this.recordRepository.find({
      where: [{ uid: record }],
    });

    const sessionid = (await this.trainingSessionRepository.findOne({ uid }))
      .id;
    const recordid = records[0].id;
    const facilitators = await this.facilitatorRepository.find({
      select: ['id'],
      where: [{ recordId: recordid, trainingsessionId: sessionid }],
    });
    if (facilitators[0] == undefined) {
      throw new NotFoundException(`Facilitator is not available `);
    }
    const facilitator = facilitators[0].id;
    const id = {
      id: facilitator,
      trainingsessionId: sessionid,
      recordId: recordid,
    };
    let deletedFacilitator = await this.facilitatorRepository.delete(id);
    return deletedFacilitator;
  }

  async deleteParticipant(uid: string, record: any) {
    const records = await this.recordRepository.find({
      where: [{ uid: record }],
    });
    const sessionid = (await this.trainingSessionRepository.findOne({ uid }))
      .id;
    const recordid = records[0].id;
    const participants = await this.participantRepository.find({
      select: ['id'],
      where: [{ recordId: recordid, trainingsessionId: sessionid }],
    });

    if (participants[0] == undefined) {
      throw new NotFoundException(`Participant is not available `);
    }
    const participant = participants[0].id;
    const id = {
      id: participant,
      trainingsessionId: sessionid,
      recordId: recordid,
    };
    let deletedParticipants = await this.participantRepository.delete(id);
    return deletedParticipants;
  }
}
