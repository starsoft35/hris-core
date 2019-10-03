import { Column, Entity, ManyToMany } from 'typeorm';

import { UserRole } from '../../user-role/entities/user-role.entity';
import { User } from '../../user/entities/user.entity';
import { UserCoreProps } from 'src/core/entities/user-core-props.entity';

@Entity('usergroup', { schema: 'public' })
export class UserGroup extends UserCoreProps {

  static plural = 'userGroups';

  @Column({ type: 'varchar', length: 256 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({
    type: 'text',
    nullable: false,
    name: 'roles',
  })
  roles: string;

  @ManyToMany(type => User, user => user.userGroups)
  users: User[];

  @ManyToMany(type => User, user => user.userGroups)
  userRoles: UserRole[];
}
