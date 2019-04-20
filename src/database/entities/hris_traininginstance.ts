import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_training_sections} from "./hris_training_sections";
import {hris_trainings} from "./hris_trainings";
import {hris_organisationunit} from "./hris_organisationunit";
import {hris_training_sponsors} from "./hris_training_sponsors";
import {hris_training_units} from "./hris_training_units";
import {hris_training_curriculums} from "./hris_training_curriculums";
import {hris_record_training} from "./hris_record_training";
import {hris_training_methods} from "./hris_training_methods";


@Entity("hris_traininginstance",{schema:"public" } )
@Index("idx_1f9a830f5aea4428",["curriculum_",])
@Index("idx_1f9a830f31c15487",["district",])
@Index("idx_1f9a830f96054afc",["organiser",])
@Index("idx_1f9a830ff62f176",["region",])
@Index("idx_1f9a830fd823e37a",["section_id",])
@Index("idx_1f9a830f818cc9d4",["sponsor",])
@Index("idx_1f9a830ff8bd700d",["unit_",])
export class hris_traininginstance {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>hris_training_sections, hris_training_sections=>hris_training_sections.hris_traininginstances,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'section_id'})
    section_id:hris_training_sections | null;

    /*@ManyToOne(type=>hris_trainings, hris_trainings=>hris_trainings.hris_traininginstances,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'section_id'})
    section_:hris_trainings | null;*/


    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

   
    @ManyToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_traininginstances2,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'region'})
    region:hris_organisationunit | null;


   
    @ManyToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_traininginstances,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'district'})
    district:hris_organisationunit | null;


    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"venue"
        })
    venue:string | null;
        

   
    @ManyToOne(type=>hris_training_sponsors, hris_training_sponsors=>hris_training_sponsors.hris_traininginstances2,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'sponsor'})
    sponsor:hris_training_sponsors | null;


    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"startdate"
        })
    startdate:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"enddate"
        })
    enddate:Date | null;
        

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
        

   
    @ManyToOne(type=>hris_training_units, hris_training_units=>hris_training_units.hris_traininginstances,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'unit_id'})
    unit_:hris_training_units | null;


   
    @ManyToOne(type=>hris_training_curriculums, hris_training_curriculums=>hris_training_curriculums.hris_traininginstances,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'curriculum_id'})
    curriculum_:hris_training_curriculums | null;


   
    @ManyToOne(type=>hris_training_sponsors, hris_training_sponsors=>hris_training_sponsors.hris_traininginstances,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'organiser'})
    organiser:hris_training_sponsors | null;


    @Column("character varying",{ 
        nullable:true,
        length:100,
        default: () => "NULL::character varying",
        name:"createdby"
        })
    createdby:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"training_id"
        })
    training_id:number | null;
        

   
    @OneToMany(type=>hris_record_training, hris_record_training=>hris_record_training.trainingsession_)
    hris_record_trainings:hris_record_training[];
    

   
    @ManyToMany(type=>hris_training_methods, hris_training_methods=>hris_training_methods.hris_traininginstances,{  nullable:false, })
    @JoinTable({ name:'hris_traininginstance_methods'})
    hris_training_methodss:hris_training_methods[];
    
}
