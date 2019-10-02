import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_relationalfilter_member" ,{schema:"public" } )
@Index("idx_bf17240a5f3cdfc2",["fieldoption_id",])
@Index("idx_bf17240a8dc1907b",["relationalfilter_id",])
export class hris_relationalfilter_member {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"relationalfilter_id"
        })
    relationalfilter_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldoption_id"
        })
    fieldoption_id:number;
        
}
