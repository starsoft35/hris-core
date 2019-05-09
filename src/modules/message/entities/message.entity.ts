import {Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { MessageThread} from "./message-thread.entity";
import {User} from "../../user/entities/user.entity";
import {MessageMetadata} from "./message-metadata.entity";
import { UserTracker } from 'src/modules/user/entities/user-tracker';


@Entity("message",{schema:"public" } )
export class Message extends UserTracker{

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"messageid"
        })
    id:number;
        

   
    @ManyToOne(type => MessageThread, messageThread=>messageThread.messages,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'threadid'})
    thread: MessageThread | null;


   
    @ManyToOne(type => User, User => User.messages,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'userid'})
    user:User | null;


    @Column("text",{ 
        nullable:false,
        name:"body"
        })
    body:string;        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;      

    @OneToMany(type => MessageMetadata, messageMetadata=>messageMetadata.message,{ onDelete: 'CASCADE' , })
    messageMetadatas: MessageMetadata[];
    
}
