import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_user" ,{schema:"public" } )
@Index("idx_6acb86e983954d93",["organisationunit_id",])
export class hris_user {

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
        length:255,
        name:"username"
        })
    username:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"username_canonical"
        })
    username_canonical:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"email"
        })
    email:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"email_canonical"
        })
    email_canonical:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"enabled"
        })
    enabled:boolean;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"salt"
        })
    salt:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"password"
        })
    password:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"last_login"
        })
    last_login:Date | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"locked"
        })
    locked:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"expired"
        })
    expired:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"expires_at"
        })
    expires_at:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        default: () => "NULL::character varying",
        name:"confirmation_token"
        })
    confirmation_token:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"password_requested_at"
        })
    password_requested_at:Date | null;
        

    @Column("text",{ 
        nullable:false,
        name:"roles"
        })
    roles:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"credentials_expired"
        })
    credentials_expired:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"credentials_expire_at"
        })
    credentials_expire_at:Date | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"phonenumber"
        })
    phonenumber:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"jobtitle"
        })
    jobtitle:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"firstname"
        })
    firstname:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"middlename"
        })
    middlename:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"surname"
        })
    surname:string | null;
        

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
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"deletedat"
        })
    deletedat:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        
}
