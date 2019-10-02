import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_message_thread_metadata" ,{schema:"public" } )
@Index("idx_240580139d1c3019",["participant_id",])
@Index("idx_24058013e2904019",["thread_id",])
export class hris_message_thread_metadata {

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
        name:"participant_id"
        })
    participant_id:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"is_deleted"
        })
    is_deleted:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"last_participant_message_date"
        })
    last_participant_message_date:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"last_message_date"
        })
    last_message_date:Date | null;
        

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
