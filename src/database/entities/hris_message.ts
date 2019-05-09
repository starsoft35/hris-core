import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_message_thread} from "./hris_message_thread";
import {User} from "../../modules/user/entities/user";
import {hris_message_metadata} from "./hris_message_metadata";


@Entity("hris_message",{schema:"public" } )
@Index("idx_b0cee96ae2904019",["thread_",])
@Index("uniq_b0cee96a539b0606",["uid",],{unique:true})
@Index("idx_b0cee96aa76ed395",["user_",])
export class hris_message {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>hris_message_thread, hris_message_thread=>hris_message_thread.hris_messages,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'thread_id'})
    thread_:hris_message_thread | null;


   
    @ManyToOne(type => User, User => User.hris_messages,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'user_id'})
    user_:User | null;


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
        

   
    @OneToMany(type=>hris_message_metadata, hris_message_metadata=>hris_message_metadata.message_,{ onDelete: 'CASCADE' , })
    hris_message_metadatas:hris_message_metadata[];
    
}
