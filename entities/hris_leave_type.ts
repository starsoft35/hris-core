import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_leave_type" ,{schema:"public" } )
export class hris_leave_type {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"field_id"
        })
    field_id:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"name"
        })
    name:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:25,
        name:"uid"
        })
    uid:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"maximum_days"
        })
    maximum_days:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:53,
        default: () => "NULL::character varying",
        name:"limit_applicable"
        })
    limit_applicable:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:53,
        default: () => "NULL::character varying",
        name:"payment_applicable"
        })
    payment_applicable:string | null;
        

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
