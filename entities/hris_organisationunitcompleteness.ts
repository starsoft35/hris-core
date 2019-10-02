import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_organisationunitcompleteness" ,{schema:"public" } )
@Index("idx_e57d91715ff69b7d",["form_id",])
@Index("idx_e57d917183954d93",["organisationunit_id",])
export class hris_organisationunitcompleteness {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"organisationunit_id"
        })
    organisationunit_id:number | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"form_id"
        })
    form_id:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"expectation"
        })
    expectation:number | null;
        

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
