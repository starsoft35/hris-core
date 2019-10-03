import { Column, Entity, JoinTable, ManyToMany, JoinColumn } from 'typeorm';
import { UserRole } from '../../user-role/entities/user-role.entity';
import { UserCoreProps } from 'src/core/entities/user-core-props.entity';

@Entity('userauthority', { schema: 'public' })
export class UserAuthority extends UserCoreProps {
    static plural = 'userAuthorities';

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string | null;

    // User & User Role Relationship: Many To Many Relationship
    @ManyToMany(type => UserRole, userRole => userRole.userAuthorities, {
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinTable({
        name: 'userauthoritymembers',
        joinColumn: { referencedColumnName: 'uid' },
        inverseJoinColumn: { referencedColumnName: 'uid' },
    })
    userRoles: UserRole[];
}
