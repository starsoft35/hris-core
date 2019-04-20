import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_field} from "./hris_field";
import {hris_fieldoption} from "./hris_fieldoption";


@Entity("hris_fieldoptionmerge",{schema:"public" } )
@Index("unique_fieldoptionmerge_idx",["field_","mergedfieldoption_","removedfieldoptionvalue",],{unique:true})
@Index("idx_c45d97c3443707b0",["field_",])
@Index("idx_c45d97c359907821",["mergedfieldoption_",])
@Index("uniq_c45d97c340cf28c8",["removedfieldoptionuid",],{unique:true})
@Index("uniq_c45d97c3539b0606",["uid",],{unique:true})
export class hris_fieldoptionmerge {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>hris_field, hris_field=>hris_field.hris_fieldoptionmerges,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'field_id'})
    field_:hris_field | null;


   
    @ManyToOne(type=>hris_fieldoption, hris_fieldoption=>hris_fieldoption.hris_fieldoptionmerges,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'mergedfieldoption_id'})
    mergedfieldoption_:hris_fieldoption | null;


    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"removedfieldoptionvalue"
        })
    removedfieldoptionvalue:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"removedfieldoptionuid"
        })
    removedfieldoptionuid:string;
        

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
        
}
