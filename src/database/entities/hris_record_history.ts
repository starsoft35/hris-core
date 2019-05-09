import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Field} from "./hris_field";


@Entity("hris_record_history",{schema:"public" } )
@Index("idx_bab4b7b443707b0",["field_",])
//@Index("unique_recordhistory_idx",["history","record_","startdate",],{unique:true})
//@Index("idx_bab4b7b4dfd750c",["record_",])
@Index("uniq_bab4b7b539b0606",["uid",],{unique:true})
export class hris_record_history {


    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"username"
        })
    username:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        default: () => "NULL::character varying",
        name:"entitled_payment"
        })
    entitled_payment:string | null;
        
}
