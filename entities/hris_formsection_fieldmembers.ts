import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_formsection_fieldmembers" ,{schema:"public" } )
@Index("idx_a83a9cdd443707b0",["field_id",])
@Index("idx_a83a9cdde4bffd6b",["formsection_id",])
export class hris_formsection_fieldmembers {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"formsection_id"
        })
    formsection_id:number;
        

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
