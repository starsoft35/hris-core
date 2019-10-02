import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_intergration_tiis_data_connection" ,{schema:"public" } )
@Index("idx_eaa7f9f983954d93",["organisationunit_id",])
export class hris_intergration_tiis_data_connection {

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
        name:"recordstablename"
        })
    recordstablename:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"organisationunittablename"
        })
    organisationunittablename:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"organisationunitlongnamecolumnname"
        })
    organisationunitlongnamecolumnname:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"organisationunitcodecolumnname"
        })
    organisationunitcodecolumnname:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"organisationunitownershipcolumnname"
        })
    organisationunitownershipcolumnname:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"recordsorganisationunitcolumnname"
        })
    recordsorganisationunitcolumnname:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"recordsinstancecolumnname"
        })
    recordsinstancecolumnname:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"tiisparentorganisationunitcode"
        })
    tiisparentorganisationunitcode:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"hristopmostorganisationunitshrotname"
        })
    hristopmostorganisationunitshrotname:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"hrisinstituiongroupname"
        })
    hrisinstituiongroupname:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"host_url"
        })
    host_url:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"password"
        })
    password:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"username"
        })
    username:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"database"
        })
    database:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"employeeformname"
        })
    employeeformname:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"defaultnationality"
        })
    defaultnationality:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"defaulthrnationality"
        })
    defaulthrnationality:string;
        

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
