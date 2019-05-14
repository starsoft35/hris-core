import { Entity, Column } from 'typeorm';
import { ObjectType } from 'type-graphql';
import { NamedIdentifiableObject } from 'src/core/entities/named-identifiable-object';

@Entity('app', {schema: 'public'})
@ObjectType()
export class App extends NamedIdentifiableObject {

    static plural = 'apps';

    @Column('integer', {
        nullable: false,
        primary: true,
        name: 'appid',
    })
    id: number;

    @Column('character varying', {
        nullable: false,
        length: 50,
        name: 'version',
    })
    version: string;

    @Column('character varying', {
        nullable: false,
        length: 50,
        name: 'launchpath',
    })
    launchpath: string;

    @Column('character varying', {
        nullable: false,
        length: 50,
        name: 'appicon',
    })
    appicon: string;
}
