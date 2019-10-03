import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { UserIdentifiableObject } from '../../user/entities/user-identifiable-object';


@Entity("sqlview",{schema:"public" } )
@Index("sqlview_query_key",["query",],{unique:true})
@Index("sqlview_title_key",["title",],{unique:true})
export class SqlView extends UserIdentifiableObject{

    static plural = 'sqlViews';

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"sqlviewid"
        })
    id:number;
        

    @Column("text",{ 
        nullable:false,
        unique: true,
        name:"query"
        })
    query:string;
        
}
