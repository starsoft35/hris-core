import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_traininginstance_methods" ,{schema:"public" } )
@Index("idx_1c39c1a119883967",["method_id",])
@Index("idx_1c39c1a1e3a43803",["traininginstance_id",])
export class hris_traininginstance_methods {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"traininginstance_id"
        })
    traininginstance_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"method_id"
        })
    method_id:number;
        
}
