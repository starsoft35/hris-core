import { Column, Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { UserGroup } from './user-group.entity';
import { UserIdentification } from './user-identification-object';

@Entity('userrole', { schema: 'public' })
export class UserRole extends UserIdentification {
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
