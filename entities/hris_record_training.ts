import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_record_training" ,{schema:"public" } )
@Index("idx_f3e7ab184dfd750c",["record_id",])
export class hris_record_training {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"record_id"
        })
    record_id:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"coursename"
        })
    coursename:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"courselocation"
        })
    courselocation:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"sponsor"
        })
    sponsor:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"startdate"
        })
    startdate:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"enddate"
        })
    enddate:Date;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"username"
        })
    username:string;
        

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
        

    @Column("integer",{ 
        nullable:true,
        name:"trainingsession_id"
        })
    trainingsession_id:number | null;
        
}
