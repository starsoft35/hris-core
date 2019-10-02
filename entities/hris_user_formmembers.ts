import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_user_formmembers" ,{schema:"public" } )
@Index("idx_e3ba6be55ff69b7d",["form_id",])
@Index("idx_e3ba6be5a76ed395",["user_id",])
export class hris_user_formmembers {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"user_id"
        })
    user_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"form_id"
        })
    form_id:number;
        
}
