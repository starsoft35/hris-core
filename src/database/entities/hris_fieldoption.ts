import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Field} from "./hris_field";
import {hris_fieldoption_children} from "./hris_fieldoption_children";
import {hris_fieldoptionmerge} from "./hris_fieldoptionmerge";
import {hris_indicator_targetfieldoption} from "./hris_indicator_targetfieldoption";
import {hris_leave_type} from "./hris_leave_type";
import {hris_fieldoptiongroup} from "./hris_fieldoptiongroup";
import {hris_relationalfilter} from "./hris_relationalfilter";


@Entity("hris_fieldoption",{schema:"public" } )
@Index("idx_f3f75cc5443707b0",["field_",])
@Index("unique_fieldoption_idx",["field_","value",],{unique:true})
@Index("uniq_f3f75cc5539b0606",["uid",],{unique:true})
export class hris_fieldoption {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>Field, Field=>Field.hris_fieldoptions,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'field_id'})
    field_:Field | null;


    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"value"
        })
    value:string;
        

    @Column("boolean",{ 
        nullable:true,
        name:"skipinreport"
        })
    skipinreport:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"sort"
        })
    sort:number | null;
        

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
        

    @Column("boolean",{ 
        nullable:true,
        name:"hastraining"
        })
    hastraining:boolean | null;
        

   
    @OneToMany(type=>hris_fieldoption_children, hris_fieldoption_children=>hris_fieldoption_children.child_fieldoption,{ onDelete: 'CASCADE' , })
    hris_fieldoption_childrens:hris_fieldoption_children[];
    

   
    @OneToMany(type=>hris_fieldoption_children, hris_fieldoption_children=>hris_fieldoption_children.parent_fieldoption,{ onDelete: 'CASCADE' , })
    hris_fieldoption_childrens2:hris_fieldoption_children[];
    

   
    @OneToMany(type=>hris_fieldoptionmerge, hris_fieldoptionmerge=>hris_fieldoptionmerge.mergedfieldoption_,{ onDelete: 'CASCADE' , })
    hris_fieldoptionmerges:hris_fieldoptionmerge[];
    

   
    @OneToMany(type=>hris_indicator_targetfieldoption, hris_indicator_targetfieldoption=>hris_indicator_targetfieldoption.fieldoption_,{ onDelete: 'CASCADE' , })
    hris_indicator_targetfieldoptions:hris_indicator_targetfieldoption[];
    

   
    @OneToOne(type=>hris_leave_type, hris_leave_type=>hris_leave_type.field_,{ onDelete: 'CASCADE' , })
    hris_leave_type:hris_leave_type | null;


   
    @ManyToMany(type=>hris_fieldoptiongroup, hris_fieldoptiongroup=>hris_fieldoptiongroup.hris_fieldoptions)
    hris_fieldoptiongroups:hris_fieldoptiongroup[];
    

   
    @ManyToMany(type=>hris_relationalfilter, hris_relationalfilter=>hris_relationalfilter.hris_fieldoptions)
    hris_relationalfilters:hris_relationalfilter[];
    
}
