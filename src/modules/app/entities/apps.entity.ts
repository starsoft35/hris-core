import IdentifiableObject from 'src/core/entities/identifiable-object';
import { Entity, Column } from 'typeorm';
import { ObjectType } from 'type-graphql';

@Entity('apps', {schema: 'public'})
@ObjectType()
export class Apps extends IdentifiableObject {

    @Column('integer', {
        nullable: false,
        primary: true,
        name: 'appid',
    })
    appid: number;

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
