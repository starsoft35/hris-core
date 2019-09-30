import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from './user.entity';
import { EntityCoreProps } from 'src/core/entities/entity-core-props';

@Entity('usersettings', { schema: 'public' })
export class UserSettings extends EntityCoreProps {
  @PrimaryGeneratedColumn()
  id: number;

  // ! Deprecated
  // @OneToOne(type => User, user => user.userSettings, {
  //   onDelete: 'CASCADE',
  // })
  // @JoinColumn({ name: 'userid' })
  // user: User | null;
  // ! Deprecated

  @OneToOne(type => User, user => user.userSettings, {
    onDelete: 'CASCADE',
  })
  user: User;

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
