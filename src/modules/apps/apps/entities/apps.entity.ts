import IdentifiableObject from 'src/core/entities/identifiable-object';
import { Entity, Column } from 'typeorm';
import { ObjectType } from 'type-graphql';

@Entity('apps', {schema: 'public'})
@ObjectType()
export class Apps extends IdentifiableObject {

    @Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    })
    id: number;

    @Column('character varying', {
        nullable: false,
        length: 13,
        name: 'uid',
    })
    uid: string;

    @Column('character varying', {
        nullable: false,
        length: 100,
        name: 'name',
    })
    name: string;

    @Column('character varying', {
        nullable: false,
        length: 100,
        name: 'appicon',
    })
    appicon: string;
}
