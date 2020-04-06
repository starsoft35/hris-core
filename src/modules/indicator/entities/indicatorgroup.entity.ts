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
import { Indicator } from './indicator.entity';

@Entity('indicatorgroup', { schema: 'public' })
@Index('uk_f7wfef3jx1yl73stqs7b45ewb', ['code'], { unique: true })
@Index('uk_7carnwjb5dtsk6i5dn43wy9ck', ['name'], { unique: true })
@Index('uk_2p9x16ryxtek0g6bqwd49et0c', ['uid'], { unique: true })
export class IndicatorGroup {
    @Column('integer', {
        nullable: false,
        primary: true,
        name: 'programindicatorgroupid',
    })
    programindicatorgroupid: number;

    @Column('character varying', {
        nullable: false,
        unique: true,
        length: 11,
        name: 'uid',
    })
    uid: string;

    @Column('character varying', {
        nullable: true,
        unique: true,
        length: 50,
        name: 'code',
    })
    code: string | null;

    @Column('timestamp without time zone', {
        nullable: false,
        name: 'created',
    })
    created: Date;

    @Column('timestamp without time zone', {
        nullable: false,
        name: 'lastupdated',
    })
    lastupdated: Date;

    @Column('character varying', {
        nullable: false,
        unique: true,
        length: 230,
        name: 'name',
    })
    name: string;

    @Column('text', {
        nullable: true,
        name: 'description',
    })
    description: string | null;

    @ManyToMany(
        () => Indicator,
        (indicator: Indicator) => indicator.indicatorgroups,
        { nullable: false },
    )
    @JoinTable({ name: 'indicatorgroupmembers' })
    indicators: Indicator[];
}
