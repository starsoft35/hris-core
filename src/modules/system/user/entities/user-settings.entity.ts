import { Column, Entity, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { EntityCoreProps } from '../../../../core/entities/entity-core-props';

@Entity('usersetting', { schema: 'public' })
export class UserSettings extends EntityCoreProps {

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', nullable: false })
  emailNotification: boolean;

  @Column({ type: 'boolean', nullable: false })
  smsnotification: boolean;

  @Column({ type: 'boolean', nullable: false })
  completenessalert: boolean;

  @Column({ type: 'boolean', nullable: false })
  qualitycheckalert: boolean;

  @OneToOne(type => User, user => user.usersettings)
  user: User;
}
