import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_resourcetable_fieldmembers" ,{schema:"public" } )
@Index("idx_f68dc8b7443707b0",["field_id",])
@Index("idx_f68dc8b7c5172ec9",["resourcetable_id",])
export class hris_resourcetable_fieldmembers {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"resourcetable_id"
        })
    resourcetable_id:number;
        

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
