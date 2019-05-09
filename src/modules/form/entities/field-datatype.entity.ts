import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Field} from "./field.entity";


@Entity("fielddatatype",{schema:"public" } )
export class FieldDataType {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fielddatatypeid"
        })
    id:number;     
   
    @OneToMany(type=>Field, field=>field.dataType,{ onDelete: 'CASCADE' , })
    fields:Field[];
    
}
