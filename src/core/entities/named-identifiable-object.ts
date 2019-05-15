import { Field, ObjectType } from 'type-graphql';
import { BeforeInsert, Column, PrimaryGeneratedColumn } from 'typeorm';

import { IdentifiableObject } from './identifiable-object';

@ObjectType()
export class NamedIdentifiableObject extends IdentifiableObject {

    @Field()
    @Column('text', {
        nullable: true,
        name: 'description',
    })
    description: string | null;

    @Field()
    @Column('character varying', {
        nullable: false,
        name: 'name',
    })
    name: string;

    @Field()
    @Column('character varying', {
        nullable: false,
        length: 50,
        name: 'shortname',
    })
    shortName: string;
}
