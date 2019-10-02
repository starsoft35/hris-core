import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_field_relation" ,{schema:"public" } )
@Index("idx_2f7ffbc98f3e7cb",["child_field",])
@Index("idx_2f7ffbc997c4d1fb",["parent_field",])
export class hris_field_relation {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"parent_field"
        })
    parent_field:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"child_field"
        })
    child_field:number;
        
}
