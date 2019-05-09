import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { Form} from "./form.entity";
import {FormSectionFieldMember} from "./formsection-fieldmembers.entity";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("hris_formsection",{schema:"public" } )
export class FormSection extends UserIdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type => Form, form=>form.formSections,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'formid'})
    form: Form | null;        

   
    @OneToMany(type => FormSectionFieldMember, hris_formsection_fieldmembers=>hris_formsection_fieldmembers.formSection,{ onDelete: 'CASCADE' , })
    formSectionFieldMembers: FormSectionFieldMember[];
    
}
