import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_fieldgroupset_members" ,{schema:"public" } )
@Index("idx_40455edf64381d9a",["fieldgroup_id",])
@Index("idx_40455edfa42c5323",["fieldgroupset_id",])
export class hris_fieldgroupset_members {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldgroupset_id"
        })
    fieldgroupset_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldgroup_id"
        })
    fieldgroup_id:number;
        
}
