import { TransactionTimestamp } from 'src/core/entities/transaction-timestamp.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('training', {schema: 'public'})
export class Training extends TransactionTimestamp {
  static plural = 'trainings';

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  uid: string

  @Column()
  coursename: string

  @Column()
  trainingcategory: string

  @Column()
  traininginstruction: string

  @Column()
  curiculum: string

}
