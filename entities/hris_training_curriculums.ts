import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_training_curriculums" ,{schema:"public" } )
@Index("idx_bf909a70d823e37a",["section_id",])
@Index("idx_bf909a70f8bd700d",["unit_id",])
export class hris_training_curriculums {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"section_id"
        })
    section_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"unit_id"
        })
    unit_id:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"name"
        })
    name:string;
        

    @Column("boolean",{ 
        nullable:true,
        name:"all_methods_selected"
        })
    all_methods_selected:boolean | null;
        

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
