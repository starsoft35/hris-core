import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Field} from "./field.entity";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("fieldinputtype",{schema:"public" } )
export class FieldInputType extends UserIdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldinputtypeid"
        })
    id:number;

    @Column("character varying",{ 
        nullable:true,
        length:255,
        default: () => "NULL::character varying",
        name:"htmltag"
        })
    htmltag:string | null;
   
    @OneToMany(type=>Field, Field=>Field.inputType,{ onDelete: 'CASCADE' , })
    fields:Field[];
    
}
