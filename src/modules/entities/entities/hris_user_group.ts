import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { UserRole } from './hris_user_role';
import { User } from './hris_user';

@Entity('usergroup', { schema: 'public' })
export class UserGroup extends EntityCoreProps {

  @PrimaryGeneratedColumn({
    name: 'usergroupid',
  })
  id: number;
  @Column('text', {
    nullable: false,
    name: 'roles',
  })
  roles: string;

  @ManyToMany(type => User, user => user.userGroups)
  users: User[];

  @ManyToMany(type => User, user => user.userGroups)
  userRoles: UserRole[];
}

