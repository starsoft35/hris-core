import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_trainers" ,{schema:"public" } )
export class hris_trainers {

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
        
}
