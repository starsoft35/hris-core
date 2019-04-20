import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_resourcetable_fieldmembers} from "./hris_resourcetable_fieldmembers";


@Entity("hris_resourcetable",{schema:"public" } )
@Index("uniq_ed5a2275e237e06",["name",],{unique:true})
@Index("uniq_ed5a227539b0606",["uid",],{unique:true})
export class hris_resourcetable {

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
        

    @Column("boolean",{ 
        nullable:true,
        name:"isgenerating"
        })
    isgenerating:boolean | null;
        

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
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"lastgenerated"
        })
    lastgenerated:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"messagelog"
        })
    messagelog:string | null;
        

   
    @OneToMany(type=>hris_resourcetable_fieldmembers, hris_resourcetable_fieldmembers=>hris_resourcetable_fieldmembers.resourcetable_,{ onDelete: 'CASCADE' , })
    hris_resourcetable_fieldmemberss:hris_resourcetable_fieldmembers[];
    
}
