import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_fieldgroup} from "./hris_fieldgroup";


@Entity("hris_fieldgroupset",{schema:"public" } )
@Index("uniq_4e9400b65e237e06",["name",],{unique:true})
@Index("uniq_4e9400b6539b0606",["uid",],{unique:true})
export class hris_fieldgroupset {

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
        

   
    @ManyToMany(type=>hris_fieldgroup, hris_fieldgroup=>hris_fieldgroup.hris_fieldgroupsets,{  nullable:false, })
    @JoinTable({ name:'hris_fieldgroupset_members'})
    hris_fieldgroups:hris_fieldgroup[];
    
}
