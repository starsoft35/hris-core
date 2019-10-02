import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_friendlyreport_relationalfilter" ,{schema:"public" } )
@Index("idx_28fb5f325bc2af53",["friendlyreport_id",])
@Index("idx_28fb5f328dc1907b",["relationalfilter_id",])
export class hris_friendlyreport_relationalfilter {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"friendlyreport_id"
        })
    friendlyreport_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"relationalfilter_id"
        })
    relationalfilter_id:number;
        
}
