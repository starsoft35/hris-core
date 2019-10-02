import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_fieldgroup_members" ,{schema:"public" } )
@Index("idx_f26d2e03443707b0",["field_id",])
@Index("idx_f26d2e0364381d9a",["fieldgroup_id",])
export class hris_fieldgroup_members {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldgroup_id"
        })
    fieldgroup_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"field_id"
        })
    field_id:number;
        
}
