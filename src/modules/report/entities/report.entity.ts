import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';


@Entity("report",{schema:"public" } )
export class Report extends UserIdentifiableObject{

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"uri"
        })
    uri:string;
        

    @Column("text",{ 
        nullable:false,
        name:"parameters"
        })
    parameters:string;        
}
