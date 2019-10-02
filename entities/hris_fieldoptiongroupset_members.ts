import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_fieldoptiongroupset_members" ,{schema:"public" } )
@Index("idx_1eb9ed26a1a91b38",["fieldoptiongroup_id",])
@Index("idx_1eb9ed26af82debc",["fieldoptiongroupset_id",])
export class hris_fieldoptiongroupset_members {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldoptiongroupset_id"
        })
    fieldoptiongroupset_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldoptiongroup_id"
        })
    fieldoptiongroup_id:number;
        
}
