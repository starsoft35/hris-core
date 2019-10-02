import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_message_metadata" ,{schema:"public" } )
@Index("idx_b2eeb3a7537a1329",["message_id",])
@Index("idx_b2eeb3a79d1c3019",["participant_id",])
export class hris_message_metadata {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"message_id"
        })
    message_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"participant_id"
        })
    participant_id:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"is_read"
        })
    is_read:boolean;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        
}
