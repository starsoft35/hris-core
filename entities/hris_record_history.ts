import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_record_history" ,{schema:"public" } )
@Index("idx_bab4b7b443707b0",["field_id",])
@Index("idx_bab4b7b4dfd750c",["record_id",])
export class hris_record_history {

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
        

    @Column("integer",{ 
        nullable:true,
        name:"field_id"
        })
    field_id:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"history"
        })
    history:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        default: () => "NULL::character varying",
        name:"reason"
        })
    reason:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"startdate"
        })
    startdate:Date;
        

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
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"enddate"
        })
    enddate:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        default: () => "NULL::character varying",
        name:"entitled_payment"
        })
    entitled_payment:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"organisationunit_id"
        })
    organisationunit_id:number | null;
        
}
