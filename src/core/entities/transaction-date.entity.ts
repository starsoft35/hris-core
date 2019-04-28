import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
@ObjectType()
export abstract class TransactionDate {
  @Field()
  @CreateDateColumn({
    type: 'timestamp',
    name: 'created',
    default: () => 'LOCALTIMESTAMP',
  })
  created: Date;

  @Field()
  @UpdateDateColumn({
    type: 'timestamp',
    name: 'lastupdated',
    default: () => 'LOCALTIMESTAMP',
  })
  lastUpdated: Date;
}
