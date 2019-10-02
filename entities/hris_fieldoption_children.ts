import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_fieldoption_children" ,{schema:"public" } )
@Index("idx_4d513bb4219d1df9",["child_fieldoption",])
@Index("idx_4d513bb4903568a7",["parent_fieldoption",])
export class hris_fieldoption_children {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"parent_fieldoption"
        })
    parent_fieldoption:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"child_fieldoption"
        })
    child_fieldoption:number;
        
}
