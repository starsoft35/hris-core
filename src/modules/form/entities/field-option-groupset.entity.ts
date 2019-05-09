import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {FieldOptionGroup} from "./field-option-group.entity";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("fieldoptiongroupset",{schema:"public" } )
export class FieldOptionGroupSet extends UserIdentifiableObject {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldoptiongroupsetid"
        })
    id:number;
    @ManyToMany(type => FieldOptionGroup, fieldOptionGroup => fieldOptionGroup.fieldOptionGroupSets,{  nullable:false, })
    @JoinTable({ name:'fieldoptiongroupsetmembers'})
    fieldOptionGroups: FieldOptionGroup[];
    
}
