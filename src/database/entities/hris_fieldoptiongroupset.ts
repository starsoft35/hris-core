import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_intergration_dhis_dataconnection} from "./hris_intergration_dhis_dataconnection";
import {hris_fieldoptiongroup} from "./hris_fieldoptiongroup";


@Entity("hris_fieldoptiongroupset",{schema:"public" } )
@Index("uniq_af31f0175e237e06",["name",],{unique:true})
@Index("uniq_af31f017539b0606",["uid",],{unique:true})
export class hris_fieldoptiongroupset {

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
        length:64,
        name:"name"
        })
    name:string;
        

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
        

   
    @ManyToMany(type=>hris_intergration_dhis_dataconnection, hris_intergration_dhis_dataconnection=>hris_intergration_dhis_dataconnection.hris_fieldoptiongroupsets)
    hris_intergration_dhis_dataconnections:hris_intergration_dhis_dataconnection[];
    

   
    @ManyToMany(type=>hris_fieldoptiongroup, hris_fieldoptiongroup=>hris_fieldoptiongroup.hris_fieldoptiongroupsets,{  nullable:false, })
    @JoinTable({ name:'hris_fieldoptiongroupset_members'})
    hris_fieldoptiongroups:hris_fieldoptiongroup[];
    
}
