import { Column, Entity, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { UserGroup } from '../../user-group/entities/user-group.entity';
import { UserIdentification } from '../../user/entities/user-identification';
import { UserAuthority } from '../../user-authority/entities/user-authority.entity';

@Entity('userrole', { schema: 'public' })
export class UserRole extends UserIdentification {
  static plural = 'userRoles';

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  // User & User Role Relationship: Many-Many Relationship
  @ManyToMany(type => User, user => user.userRoles, { nullable: false })
  users: User[];

  @ManyToMany(type => UserAuthority, userAuthority => userAuthority.userRoles, {
    nullable: false,
    eager: true,
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  userAuthorities: UserAuthority[];

  @ManyToMany(type => UserGroup, userGroup => userGroup.userRoles, {
    nullable: false,
  })
  @JoinTable({
    name: 'userrolegroupmembers',
    joinColumn: { referencedColumnName: 'uid' },
    inverseJoinColumn: { referencedColumnName: 'uid' },
  })
  userGroups: UserGroup[];
}
