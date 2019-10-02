import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_friendlyreportcategory" ,{schema:"public" } )
@Index("idx_9016a10da1a91b38",["fieldoptiongroup_id",])
@Index("idx_9016a10d5bc2af53",["friendlyreport_id",])
export class hris_friendlyreportcategory {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"friendlyreport_id"
        })
    friendlyreport_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldoptiongroup_id"
        })
    fieldoptiongroup_id:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"sort"
        })
    sort:number;
        
}
