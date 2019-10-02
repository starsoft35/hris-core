import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_intergration_dhis_dataconnection" ,{schema:"public" } )
@Index("idx_c47f616d4108d2f5",["parent_organisationunit_id",])
export class hris_intergration_dhis_dataconnection {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"parent_organisationunit_id"
        })
    parent_organisationunit_id:number | null;
        

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
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"dataset_name"
        })
    dataset_name:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"dataset_uid"
        })
    dataset_uid:string;
        

    @Column("text",{ 
        nullable:true,
        name:"dataset_html"
        })
    dataset_html:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"host_url"
        })
    host_url:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"username"
        })
    username:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"password"
        })
    password:string;
        

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
