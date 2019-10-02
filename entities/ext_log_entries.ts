import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("ext_log_entries" ,{schema:"public" } )
@Index("log_class_lookup_idx",["object_class",])
export class ext_log_entries {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:8,
        name:"action"
        })
    action:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"logged_at"
        })
    logged_at:Date;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"object_id"
        })
    object_id:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"object_class"
        })
    object_class:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"version"
        })
    version:number;
        

    @Column("text",{ 
        nullable:true,
        name:"data"
        })
    data:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        default: () => "NULL::character varying",
        name:"username"
        })
    username:string | null;
        
}
