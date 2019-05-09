import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {TrainingSection} from "./training-section.entity";
import {TrainingUnit} from "./training-unit.entity";
import {TrainingSession} from "./training-session.entity";
import {TrainingMethod} from "./training-method.entity";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("trainingcurriculum",{schema:"public" } )
export class TrainingCurriculum extends UserIdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"trainingcurriculumid"
        })
    id:number;
        

   
    @ManyToOne(type => TrainingSection, trainingSection => trainingSection.curriculums,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'sectionid'})
    section: TrainingSection | null;


   
    @ManyToOne(type => TrainingUnit, trainingUnit => trainingUnit.trainingCurriculums,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'unitid'})
    unit: TrainingUnit | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"allmethodsselected"
        })
    all_methods_selected:boolean | null;        

   
    @OneToMany(type => TrainingSession, trainingSession => trainingSession.curriculum,{ onDelete: 'CASCADE' , })
    trainingSessions: TrainingSession[];
    

   
    @ManyToMany(type => TrainingMethod, TrainingMethod => TrainingMethod.trainingCurriculums,{  nullable:false, })
    @JoinTable({ name:'hris_curriculum_methods_members'})
    trainingMethods: TrainingMethod[];
    
}
