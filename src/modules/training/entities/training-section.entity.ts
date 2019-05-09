import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {TrainingCurriculum} from "./training-curriculum.entity";
import {TrainingUnit} from "./training-unit.entity";
import {TrainingSession} from "./training-session.entity";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("trainingsections",{schema:"public" } )
export class TrainingSection extends UserIdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;    
   
    @OneToMany(type => TrainingCurriculum, trainingCurriculum => trainingCurriculum.section,{ onDelete: 'CASCADE' , })
    curriculums: TrainingCurriculum[];
    

   
    @OneToMany(type => TrainingUnit, trainingUnit=>trainingUnit.section,{ onDelete: 'CASCADE' , })
    trainingUnits: TrainingUnit[];
    

   
    @OneToMany(type => TrainingSession, trainingSession => trainingSession.section,{ onDelete: 'CASCADE' , })
    trainingSessions: TrainingSession[];
    
}
