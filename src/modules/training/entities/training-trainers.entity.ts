import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("trainingtrainer",{schema:"public" } )
export class Trainer extends UserIdentifiableObject{
    @Column("integer", {
        nullable: false,
        primary: true,
        name: "trainingtrainerid"
    })
    id: number;

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"firstname"
        })
    firstname:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"middlename"
        })
    middlename:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"lastname"
        })
    lastname:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"primaryjobresponsibility"
        })
    primaryjobresponsibility:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"secondaryjobresponsibility"
        })
    secondaryjobresponsibility:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"profession"
        })
    profession:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"currentjobtitle"
        })
    currentjobtitle:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"placeofwork"
        })
    placeofwork:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"organisationtype"
        })
    organisationtype:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"trainertype"
        })
    trainertype:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"trainerlanguage"
        })
    trainerlanguage:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"traineraffiliation"
        })
    traineraffiliation:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"experience"
        })
    experience:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"highestlevelofqualification"
        })
    highestlevelofqualification:string;        
}
