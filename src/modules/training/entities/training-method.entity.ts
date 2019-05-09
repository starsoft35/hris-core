import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {TrainingCurriculum} from "./training-curriculum.entity";
import {TrainingSession} from "./training-session.entity";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("trainingmethod",{schema:"public" } )
export class TrainingMethod extends UserIdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"trainingmethodid"
        })
    id:number;
        
   
    @ManyToMany(type => TrainingCurriculum, trainingCurriculum => trainingCurriculum.trainingMethods)
    trainingCurriculums: TrainingCurriculum[];
    

   
    @ManyToMany(type => TrainingSession, trainingSession => trainingSession.trainingMethods)
    trainingSessions: TrainingSession[];
    
}
