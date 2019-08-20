import { BeforeInsert, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { HRISBaseEntity } from './base-entity';

export abstract class TransactionDate extends HRISBaseEntity {
  @CreateDateColumn({
    type: 'timestamp',
    name: 'created',
    default: () => 'LOCALTIMESTAMP',
  })
  created: Date;

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
    this.lastUpdated = new Date();
  }
}
