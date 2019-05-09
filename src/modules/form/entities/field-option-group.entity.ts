import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Field} from "./field.entity";
import {FieldOption} from "./field-option.entity";
import {FieldOptionGroupSet} from "./field-option-groupset.entity";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("fieldoptiongroup",{schema:"public" } )
export class FieldOptionGroup extends UserIdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldoptiongroupid"
        })
    id:number;
        

   
    @ManyToOne(type=>Field, Field=>Field.fieldOptionGroups,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'fieldid'})
    field:Field | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"operator"
        })
    operator:string | null;
   
    @ManyToMany(type => FieldOption, fieldOption => fieldOption.fieldOptionGroups,{  nullable:false, })
    @JoinTable({ name:'fieldoptiongroupmembers'})
    fieldOptions: FieldOption[];
    

   
    @ManyToMany(type => FieldOptionGroupSet, fieldOptionGroupSet => fieldOptionGroupSet.fieldOptionGroups)
    fieldOptionGroupSets: FieldOptionGroupSet[];
    
}
