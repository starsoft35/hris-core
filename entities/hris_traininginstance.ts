import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_traininginstance" ,{schema:"public" } )
@Index("idx_1f9a830f5aea4428",["curriculum_id",])
@Index("idx_1f9a830f31c15487",["district",])
@Index("idx_1f9a830f96054afc",["organiser",])
@Index("idx_1f9a830ff62f176",["region",])
@Index("idx_1f9a830fd823e37a",["section_id",])
@Index("idx_1f9a830f818cc9d4",["sponsor",])
@Index("idx_1f9a830ff8bd700d",["unit_id",])
export class hris_traininginstance {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"section_id"
        })
    section_id:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"region"
        })
    region:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"district"
        })
    district:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"venue"
        })
    venue:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"sponsor"
        })
    sponsor:number | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"startdate"
        })
    startdate:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"enddate"
        })
    enddate:Date | null;
        

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
        

    @Column("integer",{ 
        nullable:true,
        name:"unit_id"
        })
    unit_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"curriculum_id"
        })
    curriculum_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"organiser"
        })
    organiser:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        default: () => "NULL::character varying",
        name:"createdby"
        })
    createdby:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"training_id"
        })
    training_id:number | null;
        
}
