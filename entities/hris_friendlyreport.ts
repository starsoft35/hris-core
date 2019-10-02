import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_friendlyreport" ,{schema:"public" } )
@Index("idx_354231795278319c",["series_id",])
export class hris_friendlyreport {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"series_id"
        })
    series_id:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"name"
        })
    name:string;
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"sort"
        })
    sort:number;
        

    @Column("boolean",{ 
        nullable:true,
        name:"ignoreskipinreport"
        })
    ignoreskipinreport:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"usetargets"
        })
    usetargets:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"showdeficitsurplus"
        })
    showdeficitsurplus:boolean | null;
        

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
        nullable:true,
        length:13,
        default: () => "NULL::character varying",
        name:"type"
        })
    type:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"sql"
        })
    sql:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"javascript"
        })
    javascript:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"stylesheet"
        })
    stylesheet:string | null;
        
}
