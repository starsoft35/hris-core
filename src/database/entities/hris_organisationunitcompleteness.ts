import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_organisationunit} from "./hris_organisationunit";
import {hris_form} from "./hris_form";


@Entity("hris_organisationunitcompleteness",{schema:"public" } )
@Index("unique_organisationunit_formcompleteness_idx",["form_","organisationunit_",],{unique:true})
@Index("idx_e57d91715ff69b7d",["form_",])
@Index("idx_e57d917183954d93",["organisationunit_",])
@Index("uniq_e57d9171539b0606",["uid",],{unique:true})
export class hris_organisationunitcompleteness {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_organisationunitcompletenesss,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'organisationunit_id'})
    organisationunit_:hris_organisationunit | null;


   
    @ManyToOne(type=>hris_form, hris_form=>hris_form.hris_organisationunitcompletenesss,{  nullable:false, })
    @JoinColumn({ name:'form_id'})
    form_:hris_form | null;


    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"expectation"
        })
    expectation:number | null;
        

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
