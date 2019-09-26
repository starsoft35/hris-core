import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { UserRole } from '../../user-role/entities/user-role.entity';
import { User } from '../../user/entities/user.entity';

@Entity('usergroup', { schema: 'public' })
export class UserGroup extends EntityCoreProps {

  static plural = 'userGroups';

  @PrimaryGeneratedColumn()
  id: number;

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
