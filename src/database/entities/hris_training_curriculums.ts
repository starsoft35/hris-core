import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_training_sections} from "./hris_training_sections";
import {hris_training_units} from "./hris_training_units";
import {hris_traininginstance} from "./hris_traininginstance";
import {hris_training_methods} from "./hris_training_methods";


@Entity("hris_training_curriculums",{schema:"public" } )
@Index("idx_bf909a70d823e37a",["section_",])
@Index("idx_bf909a70f8bd700d",["unit_",])
export class hris_training_curriculums {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>hris_training_sections, hris_training_sections=>hris_training_sections.hris_training_curriculumss,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'section_id'})
    section_:hris_training_sections | null;


   
    @ManyToOne(type=>hris_training_units, hris_training_units=>hris_training_units.hris_training_curriculumss,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'unit_id'})
    unit_:hris_training_units | null;


    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"name"
        })
    name:string;
        

    @Column("boolean",{ 
        nullable:true,
        name:"all_methods_selected"
        })
    all_methods_selected:boolean | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"datecreated"
        })
    datecreated:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"lastupdated"
        })
    lastupdated:Date | null;
        

   
    @OneToMany(type=>hris_traininginstance, hris_traininginstance=>hris_traininginstance.curriculum_,{ onDelete: 'CASCADE' , })
    hris_traininginstances:hris_traininginstance[];
    

   
    @ManyToMany(type=>hris_training_methods, hris_training_methods=>hris_training_methods.hris_training_curriculumss,{  nullable:false, })
    @JoinTable({ name:'hris_curriculum_methods_members'})
    hris_training_methodss:hris_training_methods[];
    
}
