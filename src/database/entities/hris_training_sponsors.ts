import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_traininginstance} from "./hris_traininginstance";


@Entity("hris_training_sponsors",{schema:"public" } )
@Index("uniq_4578581fc4d036c8",["sponsorname",],{unique:true})
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
        

   
    @OneToMany(type=>hris_traininginstance, hris_traininginstance=>hris_traininginstance.organiser,{ onDelete: 'CASCADE' , })
    hris_traininginstances:hris_traininginstance[];
    

   
    @OneToMany(type=>hris_traininginstance, hris_traininginstance=>hris_traininginstance.sponsor,{ onDelete: 'CASCADE' , })
    hris_traininginstances2:hris_traininginstance[];
    
}
