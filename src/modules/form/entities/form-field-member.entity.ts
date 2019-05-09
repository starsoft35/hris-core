import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { Form} from "./form.entity";
import {Field} from "./field.entity";


@Entity("formfieldmember",{schema:"public" } )
export class FormFieldMember {

   
    @ManyToOne(type => Form, form=>form.formFieldMembers,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'formid'})
    form: Form | null;


   
    @ManyToOne(type=>Field, Field=>Field.formFieldMembers,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'fieldid'})
    field:Field | null;


    @Column("integer",{ 
        nullable:false,
        name:"sort"
        })
    sort:number;
        
}
