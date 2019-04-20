import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_form} from "./hris_form";
import {hris_field} from "./hris_field";


@Entity("hris_form_visiblefields",{schema:"public" } )
@Index("idx_d9e6e817443707b0",["field_",])
@Index("idx_d9e6e8175ff69b7d",["form_",])
export class hris_form_visiblefields {

   
    @ManyToOne(type=>hris_form, hris_form=>hris_form.hris_form_visiblefieldss,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'form_id'})
    form_:hris_form | null;


   
    @ManyToOne(type=>hris_field, hris_field=>hris_field.hris_form_visiblefieldss,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'field_id'})
    field_:hris_field | null;


    @Column("integer",{ 
        nullable:false,
        name:"sort"
        })
    sort:number;
        
}
