import { Column } from 'typeorm';

export class IdentifiableEntity {
    @Column('timestamp without time zone', {
        nullable: false,
        name: 'datecreated',
    })
    datecreated: Date;

    @Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'lastupdated',
    })
    lastupdated: Date | null;
}
