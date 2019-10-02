import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_organisationunitgroup_members" ,{schema:"public" } )
@Index("idx_a7da8c1683954d93",["organisationunit_id",])
@Index("idx_a7da8c1648b73890",["organisationunitgroup_id",])
export class hris_organisationunitgroup_members {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"organisationunitgroup_id"
        })
    organisationunitgroup_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"organisationunit_id"
        })
    organisationunit_id:number;
        
}
