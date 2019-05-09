import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Field} from "./field.entity";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';
import { FieldOptionMerge } from './field-option-merge';


@Entity("fieldoption",{schema:"public" } )
export class FieldOption extends UserIdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldoptionid"
        })
    id:number;
        

   
    @ManyToOne(type=>Field, Field=>Field.fieldOptions,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'field_id'})
    field:Field | null;

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"value"
        })
    value:string;
        

    @Column("boolean",{ 
        nullable:true,
        name:"skipinreport"
        })
    skipinreport:boolean | null; 

    @Column("integer",{ 
        nullable:true,
        name:"sort"
        })
    sort:number | null;

    @Column("boolean",{ 
        nullable:true,
        name:"hastraining"
        })
    hastraining:boolean | null;
   
    @OneToMany(type => FieldOptionMerge, fieldOptionMerge => fieldOptionMerge.mergedFieldOption,{ onDelete: 'CASCADE' , })
    fieldOptionMerges: FieldOptionMerge[];
    
}
