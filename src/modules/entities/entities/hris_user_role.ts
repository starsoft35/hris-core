import { Column, Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './hris_user';
import { UserGroup } from './hris_user_group';
import { UserIdentifiableObject } from './hris_user_identifiable_object';

@Entity('userrole', { schema: 'public' })
export class UserRole extends UserIdentifiableObject {
  @PrimaryGeneratedColumn({
    name: 'userroleid',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'name',
  })
  name: string;

  @ManyToMany(type => User, user => user.userRoles)
  users: User[];

  @ManyToMany(type => UserGroup, userGroup => userGroup.userRoles, {
    nullable: false,
  })
  @JoinTable({ name: 'userrolegroupmembers' })
  userGroups: UserGroup[];
}
