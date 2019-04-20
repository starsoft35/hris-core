import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_training_curriculums} from "./hris_training_curriculums";
import {hris_traininginstance} from "./hris_traininginstance";


@Entity("hris_training_methods",{schema:"public" } )
export class hris_training_methods {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

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
        

   
    @ManyToMany(type=>hris_training_curriculums, hris_training_curriculums=>hris_training_curriculums.hris_training_methodss)
    hris_training_curriculumss:hris_training_curriculums[];
    

   
    @ManyToMany(type=>hris_traininginstance, hris_traininginstance=>hris_traininginstance.hris_training_methodss)
    hris_traininginstances:hris_traininginstance[];
    
}
