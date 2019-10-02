import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_message_thread" ,{schema:"public" } )
@Index("idx_9dc9eac1f0b5af0b",["createdby_id",])
export class hris_message_thread {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"createdby_id"
        })
    createdby_id:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"subject"
        })
    subject:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"createdat"
        })
    createdat:Date;
        

    @Column("boolean",{ 
        nullable:false,
        name:"isspam"
        })
    isspam:boolean;
        

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
