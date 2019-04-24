import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_formsection} from "./hris_formsection";
import {Field} from "./hris_field";


@Entity("hris_formsection_fieldmembers",{schema:"public" } )
@Index("idx_a83a9cdd443707b0",["field_",])
@Index("idx_a83a9cdde4bffd6b",["formsection_",])
export class hris_formsection_fieldmembers {

   
    @ManyToOne(type=>hris_formsection, hris_formsection=>hris_formsection.hris_formsection_fieldmemberss,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'formsection_id'})
    formsection_:hris_formsection | null;


   
    @ManyToOne(type=>Field, Field=>Field.hris_formsection_fieldmemberss,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'field_id'})
    field_:Field | null;


    @Column("integer",{ 
        nullable:false,
        name:"sort"
        })
    sort:number;
        
}
