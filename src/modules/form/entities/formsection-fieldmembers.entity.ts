import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {FormSection} from "./form-section.entity";
import {Field} from "./field.entity";


@Entity("formsectionfieldmember",{schema:"public" } )
export class FormSectionFieldMember {

   
    @ManyToOne(type => FormSection, formSection => formSection.formSectionFieldMembers,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'formsectionid'})
    formSection: FormSection | null;


   
    @ManyToOne(type=>Field, Field=>Field.formSectionFieldMembers,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'fieldid'})
    field:Field | null;


    @Column("integer",{ 
        nullable:false,
        name:"sort"
        })
    sort:number;
        
}
