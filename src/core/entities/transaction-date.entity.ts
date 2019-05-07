import { CreateDateColumn, UpdateDateColumn, BaseEntity, BeforeInsert } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
@ObjectType()
export abstract class TransactionDate extends BaseEntity{
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

  @BeforeInsert()
  beforeInsertTransaction() {
    this.created = new Date();
    this.lastUpdated = new Date();
  }

  @BeforeInsert()
  beforeUpdateTransaction() {
    console.log('Updating Something');
    this.lastUpdated = new Date();
  }
}
