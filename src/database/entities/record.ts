import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_organisationunit} from "./hris_organisationunit";
import {hris_form} from "./hris_form";


@Entity("record",{schema:"public" } )
export class record {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.records,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'organisationunit_id'})
    organisationunit_:hris_organisationunit | null;


   
    @ManyToOne(type=>hris_form, hris_form=>hris_form.records,{  nullable:false,onDelete: 'CASCADE', })
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
        
}
