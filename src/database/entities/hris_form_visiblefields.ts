import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { Form} from "./form";
import {Field} from "./hris_field";


@Entity("hris_form_visiblefields",{schema:"public" } )
@Index("idx_d9e6e817443707b0",["field_",])
@Index("idx_d9e6e8175ff69b7d",["form_",])
export class hris_form_visiblefields {

   
    @ManyToOne(type => Form, hris_form=>hris_form.hris_form_visiblefieldss,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'form_id'})
    form_: Form | null;


   
    @ManyToOne(type=>Field, Field=>Field.hris_form_visiblefieldss,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'field_id'})
    field_:Field | null;


    @Column("integer",{ 
        nullable:false,
        name:"sort"
        })
    sort:number;
        
}
