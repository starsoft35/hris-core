import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_curriculum_methods_members" ,{schema:"public" } )
@Index("idx_f0557a7e5aea4428",["curriculum_id",])
@Index("idx_f0557a7e19883967",["method_id",])
export class hris_curriculum_methods_members {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"curriculum_id"
        })
    curriculum_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"method_id"
        })
    method_id:number;
        
}
