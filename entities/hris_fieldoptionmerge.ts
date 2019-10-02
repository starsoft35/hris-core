import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_fieldoptionmerge" ,{schema:"public" } )
@Index("idx_c45d97c3443707b0",["field_id",])
@Index("idx_c45d97c359907821",["mergedfieldoption_id",])
export class hris_fieldoptionmerge {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"field_id"
        })
    field_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"mergedfieldoption_id"
        })
    mergedfieldoption_id:number | null;
        

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
