import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {TrainingSection} from "./training-section.entity";
import {TrainingCurriculum} from "./training-curriculum.entity";
import {TrainingSession} from "./training-session.entity";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("trainingunit",{schema:"public" } )
export class TrainingUnit extends UserIdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"trainingunitid"
        })
    id:number;
        

   
    @ManyToOne(type => TrainingSection, trainingSection => trainingSection.trainingUnits,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'sectionid'})
    section: TrainingSection | null;        

   
    @OneToMany(type => TrainingCurriculum, trainingCurriculum => trainingCurriculum.unit,{ onDelete: 'CASCADE' , })
    trainingCurriculums: TrainingCurriculum[];
    

   
    @OneToMany(type => TrainingSession, trainingSession => trainingSession.unit,{ onDelete: 'CASCADE' , })
    trainingSessions: TrainingSession[];
    
}
