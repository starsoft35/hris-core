import { Column, Entity, ManyToMany, JoinTable} from "typeorm";
import { TransactionDate } from 'src/core/entities/transaction-date.entity';
import { User } from './user.entity';
import { UserGroup } from './user-group.entity';


@Entity('userrole', { schema: 'public' })
export class UserRole extends TransactionDate{
    @Column('integer', {
        nullable: false,
        primary: true,
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

    @ManyToMany(
        type => UserGroup,
        userGroup => userGroup.userRoles,
        { nullable: false },
    )
    @JoinTable({ name: 'userrolegroupmembers' })
    userGroups: UserGroup[];
}
