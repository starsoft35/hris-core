import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_friendlyreport_arithmeticfilter" ,{schema:"public" } )
@Index("idx_a756de2a150b1463",["arithmeticfilter_id",])
@Index("idx_a756de2a5bc2af53",["friendlyreport_id",])
export class hris_friendlyreport_arithmeticfilter {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"friendlyreport_id"
        })
    friendlyreport_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"arithmeticfilter_id"
        })
    arithmeticfilter_id:number;
        
}
