import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {TrainingSection} from "./training-section.entity";
import {TrainingSponsor} from "./training-sponsor.entity";
import {TrainingUnit} from "./training-unit.entity";
import {TrainingCurriculum} from "./training-curriculum.entity";
import {hris_record_training} from "../../../database/entities/hris_record_training";
import {TrainingMethod} from "./training-method.entity";
import { OrganisationUnit } from 'src/modules/organisation-unit/entities/organisation-unit.entity';
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';
import { TrainingVenue } from './training-venue.entity';


@Entity("trainingsession",{schema:"public" } )
export class TrainingSession extends UserIdentifiableObject{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"trainingsessionid"
        })
    id:number;
        

   
    @ManyToOne(type => TrainingSection, trainingSection => trainingSection.trainingSessions,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'sectionid'})
    section: TrainingSection | null;
   
    @ManyToOne(type=>OrganisationUnit, organisationunit=>organisationunit.trainingSessions,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'organisationunitid'})
    organisationUnit: OrganisationUnit | null;


    @ManyToOne(type => TrainingVenue, TrainingVenue => TrainingVenue.trainingSessions, { onDelete: 'CASCADE', })
    @JoinColumn({ name: 'venueid' })
    venue: TrainingVenue | null;
        

   
    @ManyToOne(type => TrainingSponsor, trainingSponsor => trainingSponsor.sponsorTrainingSessions,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'sponsorid'})
    sponsor: TrainingSponsor | null;


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
        

   
    @ManyToOne(type => TrainingUnit, trainingUnits=>trainingUnits.trainingSessions,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'unitid'})
    unit: TrainingUnit | null;


   
    @ManyToOne(type => TrainingCurriculum, trainingCurriculum => trainingCurriculum.trainingSessions,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'curriculumid'})
    curriculum: TrainingCurriculum | null;


   
    @ManyToOne(type => TrainingSponsor, trainingSponsor => trainingSponsor.organiserTrainingSessions,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'organiserid'})
    organiser: TrainingSponsor | null;    

   
    @ManyToMany(type => TrainingMethod, trainingMethod => trainingMethod.trainingSessions,{  nullable:false, })
    @JoinTable({ name:'trainingsessionmethods'})
    trainingMethods: TrainingMethod[];
    
}
