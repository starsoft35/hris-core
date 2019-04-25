import { TransactionDate } from './transaction-date.entity';
import { PrimaryGeneratedColumn, Column } from 'typeorm';

export default class IdentifiableObject extends TransactionDate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('character varying', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column('character varying', {
    nullable: false,
    length: 50,
    name: 'shortname',
  })
  shortName: string;

  @Column('character varying', {
    nullable: true,
    length: 25,
    default: () => 'NULL::character varying',
    name: 'code',
  })
  code: string | null;
}
