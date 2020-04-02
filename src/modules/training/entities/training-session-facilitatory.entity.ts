import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionTimestamp } from 'src/core/entities/transaction-timestamp.entity';

@Entity('sessionfacilitator', { schema: 'public' })
export class SessionFacilitator extends TransactionTimestamp {
  static plural = 'facilitators';

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sessionid: number;

  @Column()
  recordid: number;
}
