import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_fieldoptiongroup_members" ,{schema:"public" } )
@Index("idx_a19ad3a45f3cdfc2",["fieldoption_id",])
@Index("idx_a19ad3a4a1a91b38",["fieldoptiongroup_id",])
export class hris_fieldoptiongroup_members {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldoptiongroup_id"
        })
    fieldoptiongroup_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldoption_id"
        })
    fieldoption_id:number;
        
}
