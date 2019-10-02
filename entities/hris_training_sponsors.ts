import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_training_sponsors" ,{schema:"public" } )
export class hris_training_sponsors {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"sponsorname"
        })
    sponsorname:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"phone"
        })
    phone:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"email"
        })
    email:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"box"
        })
    box:string | null;
        

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
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        
}
