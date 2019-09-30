import {
    BaseEntity,
    Column,
    Entity,
    Index,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    RelationId,
} from 'typeorm';
import { UserIdentification } from 'src/modules/system/user/entities/user-identification';

@Entity('sqlview', { schema: 'public' })
@Index('sqlview_query_key', ['query'], { unique: true })
@Index('sqlview_title_key', ['title'], { unique: true })
export class SqlView extends UserIdentification {
    static plural = 'sqlViews';

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', unique: true })
    query: string;
}
