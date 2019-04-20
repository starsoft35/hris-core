import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("_resource_compulsory_fields",{schema:"public" } )
export class _resource_compulsory_fields {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"instance"
        })
    instance:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"level1_mohsw"
        })
    level1_mohsw:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"level2_categories"
        })
    level2_categories:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"level3_regions_departments_institutions_referrals"
        })
    level3_regions_departments_institutions_referrals:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"level4_districts_reg_hospitals"
        })
    level4_districts_reg_hospitals:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"level5_facility"
        })
    level5_facility:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"type"
        })
    type:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"ownership"
        })
    ownership:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"organisationunit_name"
        })
    organisationunit_name:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"form_name"
        })
    form_name:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"organisationunit_id"
        })
    organisationunit_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"form_id"
        })
    form_id:number | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"lastupdated"
        })
    lastupdated:Date | null;
        
}
