import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { User } from './user.entity';
import { EntityCoreProps } from 'src/core/entities/entity-core-props';

@Entity('usersettings', { schema: 'public' })
export class UserSettings extends EntityCoreProps {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'usersettingsid',
  })
  id: number;

  @OneToOne(type => User, user => user.userSettings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userid' })
  user: User | null;

  @Column('boolean', {
    nullable: false,
    name: 'emailnotification',
  })
  emailNotification: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'smsnotification',
  })
  smsNotification: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'completenessalert',
  })
  completenessAlert: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'qualitycheckalert',
  })
  qualityCheckAlert: boolean;
}
