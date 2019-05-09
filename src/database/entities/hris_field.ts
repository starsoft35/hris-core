import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_field_datatype} from "./hris_field_datatype";
import {hris_field_inputtype} from "./hris_field_inputtype";
import {hris_dashboardchart} from "./hris_dashboardchart";
import {hris_field_relation} from "./hris_field_relation";
import {hris_fieldoption} from "./hris_fieldoption";
import {hris_fieldoptiongroup} from "./hris_fieldoptiongroup";
import {hris_fieldoptionmerge} from "./hris_fieldoptionmerge";
import {hris_form_fieldmembers} from "./hris_form_fieldmembers";
import {hris_form_visiblefields} from "./hris_form_visiblefields";
import {hris_formsection_fieldmembers} from "./hris_formsection_fieldmembers";
import {hris_intergration_tiis_employee_fieldrelation} from "./hris_intergration_tiis_employee_fieldrelation";
import {hris_record_history} from "./hris_record_history";
import {hris_record_history_date} from "./hris_record_history_date";
import {hris_relationalfilter} from "./hris_relationalfilter";
import {hris_resourcetable_fieldmembers} from "./hris_resourcetable_fieldmembers";
import {hris_fieldgroup} from "./hris_fieldgroup";
import {hris_form} from "./form";


@Entity("hris_field",{schema:"public" } )
@Index("idx_8dc4bee05c815a09",["datatype_",])
@Index("idx_8dc4bee0f0cbe24d",["inputtype_",])
@Index("uniq_8dc4bee05e237e06",["name",],{unique:true})
@Index("uniq_8dc4bee0539b0606",["uid",],{unique:true})
export class Field {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>hris_field_datatype, hris_field_datatype=>hris_field_datatype.hris_fields,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'datatype_id'})
    datatype_:hris_field_datatype | null;


   
    @ManyToOne(type=>hris_field_inputtype, hris_field_inputtype=>hris_field_inputtype.hris_fields,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'inputtype_id'})
    inputtype_:hris_field_inputtype | null;


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
        name:"caption"
        })
    caption:string;
        

    @Column("boolean",{ 
        nullable:true,
        name:"compulsory"
        })
    compulsory:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"isunique"
        })
    isunique:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"iscalculated"
        })
    iscalculated:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"calculatedexpression"
        })
    calculatedexpression:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"hashistory"
        })
    hashistory:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"hastarget"
        })
    hastarget:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"fieldrelation"
        })
    fieldrelation:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"skipinreport"
        })
    skipinreport:boolean | null;
        

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
        

   
    @OneToMany(type=>hris_dashboardchart, hris_dashboardchart=>hris_dashboardchart.fieldone_,{ onDelete: 'CASCADE' , })
    hris_dashboardcharts:hris_dashboardchart[];
    

   
    @OneToMany(type=>hris_dashboardchart, hris_dashboardchart=>hris_dashboardchart.fieldtwo_,{ onDelete: 'CASCADE' , })
    hris_dashboardcharts2:hris_dashboardchart[];
    

   
    @OneToMany(type=>hris_field_relation, hris_field_relation=>hris_field_relation.child_field,{ onDelete: 'CASCADE' , })
    hris_field_relations:hris_field_relation[];
    

   
    @OneToMany(type=>hris_field_relation, hris_field_relation=>hris_field_relation.parent_field,{ onDelete: 'CASCADE' , })
    hris_field_relations2:hris_field_relation[];
    

   
    @OneToMany(type=>hris_fieldoption, hris_fieldoption=>hris_fieldoption.field_,{ onDelete: 'CASCADE' , })
    hris_fieldoptions:hris_fieldoption[];
    

   
    @OneToMany(type=>hris_fieldoptiongroup, hris_fieldoptiongroup=>hris_fieldoptiongroup.field_,{ onDelete: 'CASCADE' , })
    hris_fieldoptiongroups:hris_fieldoptiongroup[];
    

   
    @OneToMany(type=>hris_fieldoptionmerge, hris_fieldoptionmerge=>hris_fieldoptionmerge.field_,{ onDelete: 'CASCADE' , })
    hris_fieldoptionmerges:hris_fieldoptionmerge[];
    

   
    @OneToMany(type=>hris_form_fieldmembers, hris_form_fieldmembers=>hris_form_fieldmembers.field_,{ onDelete: 'CASCADE' , })
    hris_form_fieldmemberss:hris_form_fieldmembers[];
    

   
    @OneToMany(type=>hris_form_visiblefields, hris_form_visiblefields=>hris_form_visiblefields.field_,{ onDelete: 'CASCADE' , })
    hris_form_visiblefieldss:hris_form_visiblefields[];
    

   
    @OneToMany(type=>hris_formsection_fieldmembers, hris_formsection_fieldmembers=>hris_formsection_fieldmembers.field_,{ onDelete: 'CASCADE' , })
    hris_formsection_fieldmemberss:hris_formsection_fieldmembers[];
    

   
    @OneToMany(type=>hris_intergration_tiis_employee_fieldrelation, hris_intergration_tiis_employee_fieldrelation=>hris_intergration_tiis_employee_fieldrelation.field_,{ onDelete: 'CASCADE' , })
    hris_intergration_tiis_employee_fieldrelations:hris_intergration_tiis_employee_fieldrelation[];
    

   
    // @OneToMany(type=>hris_record_history, hris_record_history=>hris_record_history.field_,{ onDelete: 'CASCADE' , })
    // hris_record_historys:hris_record_history[];
    

   
    @OneToMany(type=>hris_record_history_date, hris_record_history_date=>hris_record_history_date.field_,{ onDelete: 'CASCADE' , })
    hris_record_history_dates:hris_record_history_date[];
    

   
    @OneToMany(type=>hris_relationalfilter, hris_relationalfilter=>hris_relationalfilter.field_,{ onDelete: 'CASCADE' , })
    hris_relationalfilters:hris_relationalfilter[];
    

   
    @OneToMany(type=>hris_resourcetable_fieldmembers, hris_resourcetable_fieldmembers=>hris_resourcetable_fieldmembers.field_,{ onDelete: 'CASCADE' , })
    hris_resourcetable_fieldmemberss:hris_resourcetable_fieldmembers[];
    

   
    @ManyToMany(type=>hris_fieldgroup, hris_fieldgroup=>hris_fieldgroup.hris_fields)
    hris_fieldgroups:hris_fieldgroup[];
    

   
    @ManyToMany(type=>hris_form, hris_form=>hris_form.hris_fields)
    hris_forms:hris_form[];
    
}
