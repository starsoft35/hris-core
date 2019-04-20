import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_field} from "./hris_field";
import {hris_fieldgroupset} from "./hris_fieldgroupset";


@Entity("hris_fieldgroup",{schema:"public" } )
@Index("uniq_a03262295e237e06",["name",],{unique:true})
@Index("uniq_a0326229539b0606",["uid",],{unique:true})
export class hris_fieldgroup {

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
        

   
    @ManyToMany(type=>hris_field, hris_field=>hris_field.hris_fieldgroups,{  nullable:false, })
    @JoinTable({ name:'hris_fieldgroup_members'})
    hris_fields:hris_field[];
    

   
    @ManyToMany(type=>hris_fieldgroupset, hris_fieldgroupset=>hris_fieldgroupset.hris_fieldgroups)
    hris_fieldgroupsets:hris_fieldgroupset[];
    
}
