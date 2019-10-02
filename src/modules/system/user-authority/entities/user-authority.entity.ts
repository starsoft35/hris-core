import { OrganisationUnit } from 'src/modules/organisation-unit/entities/organisation-unit.entity';
import { Column, Entity, JoinTable, ManyToMany, JoinColumn } from 'typeorm';
import { UserRole } from '../../user-role/entities/user-role.entity';
import { UserCoreProps } from 'src/core/entities/user-core-props.entity';
import { User } from '../../user/entities/user.entity';

@Entity('userauthority', { schema: 'public' })
export class UserAuthority extends UserCoreProps {
    static plural = 'userAuthorities';

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string | null;

    @JoinColumn({ name: 'createdbyid' })
    createdby: User;

    @JoinColumn({ name: 'lastupdatedbyid' })
    lastupdatedby: User;

    // User & User Role Relationship: Many To Many Relationship
    @ManyToMany(type => UserRole, userRole => userRole.userAuthorities, {
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinTable({
        name: 'userauthoritymembers',
        joinColumn: { name: 'userauthority_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'userrole_id', referencedColumnName: 'id' },
    })
    userRoles: UserRole[];
}
