import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionTimestamp } from 'src/core/entities/transaction-timestamp.entity';

@Entity('sessionparticipant', { schema: 'public' })
export class SessionParticipant extends TransactionTimestamp {
  static plural = 'participants';

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sessionid: number;

  @Column()
  recordid: number;
}
