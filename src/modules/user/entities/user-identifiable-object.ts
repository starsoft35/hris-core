import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { JoinColumn } from 'typeorm';

import { User } from './user.entity';

export class UserIdentifiableObject extends EntityCoreProps {
  @JoinColumn({ name: 'createdbyid' })
  createdBy: User;

  @JoinColumn({ name: 'lastupdatedbyid' })
  lastUpdatedBy: User;
}
