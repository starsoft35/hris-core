import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_form} from "./form";
import {hris_formsection_fieldmembers} from "./hris_formsection_fieldmembers";


@Entity("hris_formsection",{schema:"public" } )
@Index("idx_de406fd05ff69b7d",["form_",])
@Index("uniq_de406fd05e237e06",["name",],{unique:true})
@Index("uniq_de406fd0539b0606",["uid",],{unique:true})
export class hris_formsection {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>hris_form, hris_form=>hris_form.hris_formsections,{ onDelete: 'CASCADE', })
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
        

   
    @OneToMany(type=>hris_formsection_fieldmembers, hris_formsection_fieldmembers=>hris_formsection_fieldmembers.formsection_,{ onDelete: 'CASCADE' , })
    hris_formsection_fieldmemberss:hris_formsection_fieldmembers[];
    
}
