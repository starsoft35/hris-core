import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';
import { OrganisationUnit } from 'src/modules/organisation-unit/entities/organisation-unit.entity';
import { TrainingSession } from './training-session.entity';


@Entity("trainingvenue",{schema:"public" } )
export class TrainingVenue extends UserIdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"trainingvenueid"
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
        name:"venuename"
        })
    venuename:string;
        

    @ManyToOne(type => OrganisationUnit, organisationunit => organisationunit.trainingVenues, { onDelete: 'CASCADE', })
    @JoinColumn({ name: 'organisationunitid' })
    organisationUnit: OrganisationUnit | null;
    
    @OneToMany(
        type => TrainingSession,
        trainingSession => trainingSession.venue,
        { onDelete: 'CASCADE' },
    )
    trainingSessions: TrainingSession[];
}
