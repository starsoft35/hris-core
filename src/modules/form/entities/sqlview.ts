import {
    Column,
    Entity,
    Index,
    PrimaryColumn,
    Generated,
} from 'typeorm';
import { UserIdentification } from 'src/modules/system/user/entities/user-identification';

@Entity('sqlview', { schema: 'public' })
@Index('sqlview_query_key', ['query'], { unique: true })
@Index('sqlview_title_key', ['title'], { unique: true })
export class SqlView extends UserIdentification {
    static plural = 'sqlViews';

    @Column({ select: false })
    @Generated('increment')
    id: number;

    @PrimaryColumn({ type: 'varchar', length: 256, unique: true })
    uid: string;

    @Column({ type: 'text', unique: true })
    query: string;
}
