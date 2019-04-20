import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_organisationunitgroupset} from "./hris_organisationunitgroupset";
import {hris_indicator_target} from "./hris_indicator_target";
import {hris_organisationunit} from "./hris_organisationunit";


@Entity("hris_organisationunitgroup",{schema:"public" } )
@Index("uniq_7c8c96e177153098",["code",],{unique:true})
@Index("uniq_7c8c96e17f0db905",["dhisuid",],{unique:true})
@Index("uniq_7c8c96e15e237e06",["name",],{unique:true})
@Index("idx_7c8c96e13c4f988f",["organisationunitgroupset_",])
@Index("uniq_7c8c96e1539b0606",["uid",],{unique:true})
export class hris_organisationunitgroup {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>hris_organisationunitgroupset, hris_organisationunitgroupset=>hris_organisationunitgroupset.hris_organisationunitgroups,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'organisationunitgroupset_id'})
    organisationunitgroupset_:hris_organisationunitgroupset | null;


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
        

    @Column("character varying",{ 
        nullable:true,
        length:11,
        default: () => "NULL::character varying",
        name:"dhisuid"
        })
    dhisuid:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        default: () => "NULL::character varying",
        name:"code"
        })
    code:string | null;
        

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
        

   
    @OneToMany(type=>hris_indicator_target, hris_indicator_target=>hris_indicator_target.organisationunitgroup_,{ onDelete: 'CASCADE' , })
    hris_indicator_targets:hris_indicator_target[];
    

   
    @ManyToMany(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_organisationunitgroups,{  nullable:false, })
    @JoinTable({ name:'hris_organisationunitgroup_members'})
    hris_organisationunits:hris_organisationunit[];
    
}
