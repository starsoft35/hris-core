import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_dashboardchart" ,{schema:"public" } )
@Index("idx_34cd0e7e5a05b474",["fieldone_id",])
@Index("idx_34cd0e7e315953bb",["fieldtwo_id",])
@Index("idx_34cd0e7ea76ed395",["user_id",])
export class hris_dashboardchart {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"fieldone_id"
        })
    fieldone_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"fieldtwo_id"
        })
    fieldtwo_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"user_id"
        })
    user_id:number | null;
        

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
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"graphtype"
        })
    graphtype:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"lowerlevels"
        })
    lowerlevels:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"systemwide"
        })
    systemwide:boolean;
        

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
