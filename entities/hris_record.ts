import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_record" ,{schema:"public" } )
@Index("idx_5e5895d45ff69b7d",["form_id",])
@Index("idx_5e5895d483954d93",["organisationunit_id",])
export class hris_record {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"organisationunit_id"
        })
    organisationunit_id:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"form_id"
        })
    form_id:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"instance"
        })
    instance:string;
        

    @Column("text",{ 
        nullable:false,
        name:"value"
        })
    value:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"complete"
        })
    complete:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"correct"
        })
    correct:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"hashistory"
        })
    hashistory:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"hastraining"
        })
    hastraining:boolean;
        

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
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"username"
        })
    username:string;
        
}
