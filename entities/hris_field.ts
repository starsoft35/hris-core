import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_field" ,{schema:"public" } )
@Index("idx_8dc4bee05c815a09",["datatype_id",])
@Index("idx_8dc4bee0f0cbe24d",["inputtype_id",])
export class hris_field {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"datatype_id"
        })
    datatype_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"inputtype_id"
        })
    inputtype_id:number | null;
        

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
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"caption"
        })
    caption:string;
        

    @Column("boolean",{ 
        nullable:true,
        name:"compulsory"
        })
    compulsory:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"isunique"
        })
    isunique:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"iscalculated"
        })
    iscalculated:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"calculatedexpression"
        })
    calculatedexpression:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"hashistory"
        })
    hashistory:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"hastarget"
        })
    hastarget:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"fieldrelation"
        })
    fieldrelation:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"skipinreport"
        })
    skipinreport:boolean | null;
        

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
