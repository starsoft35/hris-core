import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_user_group_members" ,{schema:"public" } )
@Index("idx_5eca113efe54d947",["group_id",])
@Index("idx_5eca113ea76ed395",["user_id",])
export class hris_user_group_members {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"user_id"
        })
    user_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"group_id"
        })
    group_id:number;
        
}
