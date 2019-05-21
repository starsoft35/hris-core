import { Field, ObjectType } from 'type-graphql';
import { BeforeInsert, Column, PrimaryGeneratedColumn } from 'typeorm';

import { TransactionDate } from './transaction-date.entity';

import * as uuid from 'uuid/v1';

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
    unique: true,
  })
  uid: string;

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
    this.uid = uuid();
    this.uid = this.uid.split('-').join('');
    this.uid = this.uid.substr(0,13);
  }
}
