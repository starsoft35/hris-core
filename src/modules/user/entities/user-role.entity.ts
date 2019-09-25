import {
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { UserGroup } from './user-group.entity';
import { UserIdentification } from './user-identification';

@Entity('userrole', { schema: 'public' })
export class UserRole extends UserIdentification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 64 })
  name: string;

  // User & User Role Relationship: Many-Many Relationship
  @ManyToMany(type => User, user => user.userRoles, {
    eager: true,
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  users: User[];

  @ManyToMany(type => UserGroup, userGroup => userGroup.userRoles, {
    nullable: false,
  })
  @JoinTable({ name: 'userrolegroupmembers' })
  userGroups: UserGroup[];
}
