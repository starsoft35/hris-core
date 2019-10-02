import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_training_venues" ,{schema:"public" } )
export class hris_training_venues {

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
        name:"venuename"
        })
    venuename:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"region"
        })
    region:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"district"
        })
    district:string;
        

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
