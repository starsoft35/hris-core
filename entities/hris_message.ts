import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_message" ,{schema:"public" } )
@Index("idx_b0cee96ae2904019",["thread_id",])
@Index("idx_b0cee96aa76ed395",["user_id",])
export class hris_message {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"thread_id"
        })
    thread_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"user_id"
        })
    user_id:number | null;
        

    @Column("text",{ 
        nullable:false,
        name:"body"
        })
    body:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"created_at"
        })
    created_at:Date;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

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
