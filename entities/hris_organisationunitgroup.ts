import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_organisationunitgroup" ,{schema:"public" } )
@Index("idx_7c8c96e13c4f988f",["organisationunitgroupset_id",])
export class hris_organisationunitgroup {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"organisationunitgroupset_id"
        })
    organisationunitgroupset_id:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"name"
        })
    name:string;
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:11,
        default: () => "NULL::character varying",
        name:"dhisuid"
        })
    dhisuid:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        default: () => "NULL::character varying",
        name:"code"
        })
    code:string | null;
        

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
