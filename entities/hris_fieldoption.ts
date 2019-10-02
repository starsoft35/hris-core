import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_fieldoption" ,{schema:"public" } )
@Index("idx_f3f75cc5443707b0",["field_id",])
export class hris_fieldoption {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"field_id"
        })
    field_id:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"value"
        })
    value:string;
        

    @Column("boolean",{ 
        nullable:true,
        name:"skipinreport"
        })
    skipinreport:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"sort"
        })
    sort:number | null;
        

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
        

    @Column("boolean",{ 
        nullable:true,
        name:"hastraining"
        })
    hastraining:boolean | null;
        
}
