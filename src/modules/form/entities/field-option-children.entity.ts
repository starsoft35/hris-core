import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {FieldOption} from "./field-option.entity";


@Entity("fieldoptionchildren",{schema:"public" } )
export class FieldOptionChildren {

   
    @ManyToOne(type => FieldOption, hris_fieldoption=>hris_fieldoption.hris_fieldoption_childrens2,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'parent_fieldoption'})
    fieldOption: FieldOption | null;


   
    @ManyToOne(type => FieldOption, hris_fieldoption=>hris_fieldoption.hris_fieldoption_childrens,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'child_fieldoption'})
    childFieldOption: FieldOption | null;

}
