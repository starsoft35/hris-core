import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {TrainingSession} from "./training-session.entity";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("trainingsponsor",{schema:"public" } )
export class TrainingSponsor extends UserIdentifiableObject {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"trainingsponsorid"
        })
    id:number;        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"phone"
        })
    phone:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"email"
        })
    email:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"box"
        })
    box:string | null;
   
    @OneToMany(type => TrainingSession, trainingSession => trainingSession.organiser,{ onDelete: 'CASCADE' , })
    organiserTrainingSessions: TrainingSession[];
   
    @OneToMany(type => TrainingSession, trainingSession => trainingSession.sponsor,{ onDelete: 'CASCADE' , })
    sponsorTrainingSessions: TrainingSession[];
    
}
