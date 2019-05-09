import { JoinColumn } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { User } from './user.entity';
import IdentifiableObject from 'src/core/entities/identifiable-object';
@ObjectType()
export abstract class UserIdentifiableObject extends IdentifiableObject {
    @JoinColumn({ name: 'createbyid' })
    createdBy: User;

    @JoinColumn({ name: 'updatedbyid' })
    lastUpdatedBy: User;
}
