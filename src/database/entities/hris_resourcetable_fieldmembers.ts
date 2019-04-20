import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_resourcetable} from "./hris_resourcetable";
import {hris_field} from "./hris_field";


@Entity("hris_resourcetable_fieldmembers",{schema:"public" } )
@Index("idx_f68dc8b7443707b0",["field_",])
@Index("idx_f68dc8b7c5172ec9",["resourcetable_",])
export class hris_resourcetable_fieldmembers {

   
    @ManyToOne(type=>hris_resourcetable, hris_resourcetable=>hris_resourcetable.hris_resourcetable_fieldmemberss,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'resourcetable_id'})
    resourcetable_:hris_resourcetable | null;


   
    @ManyToOne(type=>hris_field, hris_field=>hris_field.hris_resourcetable_fieldmemberss,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'field_id'})
    field_:hris_field | null;


    @Column("integer",{ 
        nullable:false,
        name:"sort"
        })
    sort:number;
        
}
