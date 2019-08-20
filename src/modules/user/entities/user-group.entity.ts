import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { UserRole } from './user-role.entity';
import { User } from './user.entity';

@Entity('usergroup', { schema: 'public' })
export class UserGroup extends IdentifiableObject {

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
