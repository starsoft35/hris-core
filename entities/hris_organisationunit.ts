import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_organisationunit" ,{schema:"public" } )
@Index("idx_93942222727aca70",["parent_id",])
export class hris_organisationunit {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"parent_id"
        })
    parent_id:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:11,
        default: () => "NULL::character varying",
        name:"dhisuid"
        })
    dhisuid:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:25,
        default: () => "NULL::character varying",
        name:"code"
        })
    code:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"shortname"
        })
    shortname:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"longname"
        })
    longname:string;
        

    @Column("boolean",{ 
        nullable:true,
        name:"active"
        })
    active:boolean | null;
        

    @Column("date",{ 
        nullable:true,
        name:"openingdate"
        })
    openingdate:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"closingdate"
        })
    closingdate:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        default: () => "NULL::character varying",
        name:"geocode"
        })
    geocode:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"coordinates"
        })
    coordinates:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        default: () => "NULL::character varying",
        name:"featuretype"
        })
    featuretype:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"address"
        })
    address:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        default: () => "NULL::character varying",
        name:"email"
        })
    email:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        default: () => "NULL::character varying",
        name:"phonenumber"
        })
    phonenumber:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        default: () => "NULL::character varying",
        name:"contactperson"
        })
    contactperson:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

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
