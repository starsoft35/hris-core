import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Field} from "./field.entity";
import {FieldGroupSet} from "./field-groupset.entity";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("fieldgroup",{schema:"public" } )
export class FieldGroup extends UserIdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldgroupid"
        })
    id:number;      

   
    @ManyToMany(type=>Field, Field=>Field.fieldGroups,{  nullable:false, })
    @JoinTable({ name:'fieldgroupmembers'})
    fields:Field[];
    

   
    @ManyToMany(type => FieldGroupSet, fieldGroupSet => fieldGroupSet.fieldGroups)
    fieldGroupSets: FieldGroupSet[];
    
}
