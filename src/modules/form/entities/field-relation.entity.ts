import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Field} from "./field.entity";


@Entity("fieldrelation",{schema:"public" } )
export class FieldRelation {

   
    @ManyToOne(type=>Field, Field=>Field.hris_field_relations,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'parent_field'})
    parentField:Field | null;


   
    @ManyToOne(type=>Field, Field=>Field.hris_field_relations2,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'child_field'})
    childField:Field | null;

}
