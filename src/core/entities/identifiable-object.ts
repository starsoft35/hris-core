import { Field, ObjectType } from 'type-graphql';
import { BeforeInsert, Column, PrimaryGeneratedColumn } from 'typeorm';

import { TransactionDate } from './transaction-date.entity';

@ObjectType()
export class IdentifiableObject extends TransactionDate {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Field()
  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Field()
  @Column('character varying', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @Field()
  @Column('character varying', {
    nullable: false,
    length: 50,
    name: 'shortname',
  })
  shortName: string;

  @Field()
  @Column('character varying', {
    nullable: true,
    length: 25,
    default: () => 'NULL::character varying',
    name: 'code',
  })
  code: string | null;

  @BeforeInsert()
  beforeInsertIdentifiable() {
    this.uid = '1234567890123';
  }
}
