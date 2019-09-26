import { JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { UserCoreProps } from 'src/core/entities/user-core-props.entity';

export class UserIdentification extends UserCoreProps {
  @JoinColumn({ name: 'createdbyid' })
  createdBy: User;

  @JoinColumn({ name: 'lastupdatedbyid' })
  lastUpdatedBy: User;
}
