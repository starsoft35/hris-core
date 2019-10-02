import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_form_fieldmembers" ,{schema:"public" } )
@Index("idx_c4bcec9b443707b0",["field_id",])
@Index("idx_c4bcec9b5ff69b7d",["form_id",])
export class hris_form_fieldmembers {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"form_id"
        })
    form_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"field_id"
        })
    field_id:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"sort"
        })
    sort:number;
        
}
