import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("sqlview" ,{schema:"public" } )
@Index("sqlview_query_key",["query",],{unique:true})
@Index("sqlview_title_key",["title",],{unique:true})
export class sqlview {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:128,
        name:"title"
        })
    title:string;
        

    @Column("text",{ 
        nullable:false,
        unique: true,
        name:"query"
        })
    query:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "now()",
        name:"createdat"
        })
    createdat:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "now()",
        name:"updatedat"
        })
    updatedat:Date | null;
        
}
