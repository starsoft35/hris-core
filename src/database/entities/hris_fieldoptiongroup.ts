import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_field} from "./hris_field";
import {hris_friendlyreport} from "./hris_friendlyreport";
import {hris_friendlyreportcategory} from "./hris_friendlyreportcategory";
import {hris_intergration_dhis_dataelementfieldoptionrelation} from "./hris_intergration_dhis_dataelementfieldoptionrelation";
import {hris_fieldoption} from "./hris_fieldoption";
import {hris_fieldoptiongroupset} from "./hris_fieldoptiongroupset";


@Entity("hris_fieldoptiongroup",{schema:"public" } )
@Index("idx_42f4445f443707b0",["field_",])
@Index("uniq_42f4445f5e237e06",["name",],{unique:true})
@Index("uniq_42f4445f539b0606",["uid",],{unique:true})
export class hris_fieldoptiongroup {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>hris_field, hris_field=>hris_field.hris_fieldoptiongroups,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'field_id'})
    field_:hris_field | null;


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
        

    @Column("character varying",{ 
        nullable:true,
        length:64,
        default: () => "NULL::character varying",
        name:"operator"
        })
    operator:string | null;
        

   
    @OneToMany(type=>hris_friendlyreport, hris_friendlyreport=>hris_friendlyreport.series_,{ onDelete: 'CASCADE' , })
    hris_friendlyreports:hris_friendlyreport[];
    

   
    @OneToMany(type=>hris_friendlyreportcategory, hris_friendlyreportcategory=>hris_friendlyreportcategory.fieldoptiongroup_,{ onDelete: 'CASCADE' , })
    hris_friendlyreportcategorys:hris_friendlyreportcategory[];
    

   
    @OneToMany(type=>hris_intergration_dhis_dataelementfieldoptionrelation, hris_intergration_dhis_dataelementfieldoptionrelation=>hris_intergration_dhis_dataelementfieldoptionrelation.column_fieldoption_group_,{ onDelete: 'CASCADE' , })
    hris_intergration_dhis_dataelementfieldoptionrelations:hris_intergration_dhis_dataelementfieldoptionrelation[];
    

   
    @OneToMany(type=>hris_intergration_dhis_dataelementfieldoptionrelation, hris_intergration_dhis_dataelementfieldoptionrelation=>hris_intergration_dhis_dataelementfieldoptionrelation.row_fieldoption_group_,{ onDelete: 'CASCADE' , })
    hris_intergration_dhis_dataelementfieldoptionrelations2:hris_intergration_dhis_dataelementfieldoptionrelation[];
    

   
    @ManyToMany(type=>hris_fieldoption, hris_fieldoption=>hris_fieldoption.hris_fieldoptiongroups,{  nullable:false, })
    @JoinTable({ name:'hris_fieldoptiongroup_members'})
    hris_fieldoptions:hris_fieldoption[];
    

   
    @ManyToMany(type=>hris_fieldoptiongroupset, hris_fieldoptiongroupset=>hris_fieldoptiongroupset.hris_fieldoptiongroups)
    hris_fieldoptiongroupsets:hris_fieldoptiongroupset[];
    
}
