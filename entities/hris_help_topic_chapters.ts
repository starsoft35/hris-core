import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_help_topic_chapters" ,{schema:"public" } )
@Index("idx_36f8f0fb579f4768",["chapter_id",])
@Index("idx_36f8f0fb1f55203d",["topic_id",])
export class hris_help_topic_chapters {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"topic_id"
        })
    topic_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"chapter_id"
        })
    chapter_id:number;
        
}
