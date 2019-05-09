import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {User} from "./user.entity";
import IdentifiableObject from 'src/core/entities/identifiable-object';
import { UserIdentifiableObject } from './user-identifiable-object';
import { UserRole } from './user-role.entity';


@Entity('usergroup', { schema: 'public' })
export class UserGroup extends UserIdentifiableObject{

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
