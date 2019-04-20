import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_fieldoption} from "./hris_fieldoption";


@Entity("hris_fieldoption_children",{schema:"public" } )
@Index("idx_4d513bb4219d1df9",["child_fieldoption",])
@Index("idx_4d513bb4903568a7",["parent_fieldoption",])
export class hris_fieldoption_children {

   
    @ManyToOne(type=>hris_fieldoption, hris_fieldoption=>hris_fieldoption.hris_fieldoption_childrens2,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'parent_fieldoption'})
    parent_fieldoption:hris_fieldoption | null;


   
    @ManyToOne(type=>hris_fieldoption, hris_fieldoption=>hris_fieldoption.hris_fieldoption_childrens,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'child_fieldoption'})
    child_fieldoption:hris_fieldoption | null;

}
