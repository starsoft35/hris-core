import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {FieldGroup} from "./field-group.entity";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("fieldgroupset",{schema:"public" } )
export class FieldGroupSet extends UserIdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldgroupsetid"
        })
    id:number;
   
    @ManyToMany(type => FieldGroup, hris_fieldgroup=>hris_fieldgroup.fieldGroupSets,{  nullable:false, })
    @JoinTable({ name:'hris_fieldgroupset_members'})
    fieldGroups: FieldGroup[];
    
}
