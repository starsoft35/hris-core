import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Field} from "./field.entity";
import {FieldOption} from "./field-option.entity";
import IdentifiableObject from 'src/core/entities/identifiable-object';


@Entity("fieldoptionmerge",{schema:"public" } )
export class FieldOptionMerge extends IdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>Field, Field=>Field.fieldOptionMerges,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'field_id'})
    field:Field | null;


   
    @ManyToOne(type => FieldOption, fieldOption => fieldOption.fieldOptionMerges,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'mergedfieldoptionid'})
    mergedFieldOption: FieldOption | null;

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"removedfieldoptionvalue"
        })
    removedfieldoptionvalue:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"removedfieldoptionuid"
        })
    removedfieldoptionuid:string;
        
}
