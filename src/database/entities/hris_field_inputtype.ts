import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_field} from "./hris_field";


@Entity("hris_field_inputtype",{schema:"public" } )
@Index("uniq_28126627591c07fd",["htmltag",],{unique:true})
@Index("uniq_281266275e237e06",["name",],{unique:true})
@Index("uniq_28126627539b0606",["uid",],{unique:true})
export class hris_field_inputtype {

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
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        default: () => "NULL::character varying",
        name:"htmltag"
        })
    htmltag:string | null;
        

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
        

   
    @OneToMany(type=>hris_field, hris_field=>hris_field.inputtype_,{ onDelete: 'CASCADE' , })
    hris_fields:hris_field[];
    
}
