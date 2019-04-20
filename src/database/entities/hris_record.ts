import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_organisationunit} from "./hris_organisationunit";
import {hris_form} from "./hris_form";
import {hris_leave} from "./hris_leave";
import {hris_record_history} from "./hris_record_history";
import {hris_record_training} from "./hris_record_training";


@Entity("hris_record",{schema:"public" } )
@Index("idx_5e5895d45ff69b7d",["form_",])
@Index("uniq_5e5895d44230b1de",["instance",],{unique:true})
@Index("idx_5e5895d483954d93",["organisationunit_",])
@Index("uniq_5e5895d4539b0606",["uid",],{unique:true})
export class hris_record {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_records,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'organisationunit_id'})
    organisationunit_:hris_organisationunit | null;


   
    @ManyToOne(type=>hris_form, hris_form=>hris_form.hris_records,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'form_id'})
    form_:hris_form | null;


    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"instance"
        })
    instance:string;
        

    @Column("text",{ 
        nullable:false,
        name:"value"
        })
    value:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"complete"
        })
    complete:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"correct"
        })
    correct:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"hashistory"
        })
    hashistory:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"hastraining"
        })
    hastraining:boolean;
        

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
        nullable:false,
        length:64,
        name:"username"
        })
    username:string;
        

   
    @OneToMany(type=>hris_leave, hris_leave=>hris_leave.record_,{ onDelete: 'CASCADE' , })
    hris_leaves:hris_leave[];
    

   
    @OneToMany(type=>hris_record_history, hris_record_history=>hris_record_history.record_,{ onDelete: 'CASCADE' , })
    hris_record_historys:hris_record_history[];
    

   
    @OneToMany(type=>hris_record_training, hris_record_training=>hris_record_training.record_,{ onDelete: 'CASCADE' , })
    hris_record_trainings:hris_record_training[];
    
}
