import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { Form} from "./form.entity";
import {Field} from "./field.entity";


@Entity("formvisiblefield",{schema:"public" } )
export class FormVisibleField {

   
    @ManyToOne(type => Form, form=>form.formVisibleFields,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'form_id'})
    form: Form | null;


   
    @ManyToOne(type=>Field, Field=>Field.formVisibleFields,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'field_id'})
    field:Field | null;


    @Column("integer",{ 
        nullable:false,
        name:"sort"
        })
    sort:number;
        
}
