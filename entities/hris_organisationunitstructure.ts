import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_organisationunitstructure" ,{schema:"public" } )
@Index("idx_f820ce269e81aa93",["level1_id",])
@Index("idx_f820ce268c34057d",["level2_id",])
@Index("idx_f820ce2634886218",["level3_id",])
@Index("idx_f820ce26a95f5aa1",["level4_id",])
@Index("idx_f820ce2611e33dc4",["level5_id",])
@Index("idx_f820ce26356922a",["level6_id",])
@Index("idx_f820ce265fb14ba7",["level_id",])
export class hris_organisationunitstructure {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"organisationunit_id"
        })
    organisationunit_id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"level_id"
        })
    level_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"level1_id"
        })
    level1_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"level2_id"
        })
    level2_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"level3_id"
        })
    level3_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"level4_id"
        })
    level4_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"level5_id"
        })
    level5_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"level6_id"
        })
    level6_id:number | null;
        

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
