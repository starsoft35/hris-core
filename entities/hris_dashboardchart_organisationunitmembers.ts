import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_dashboardchart_organisationunitmembers" ,{schema:"public" } )
@Index("idx_3a31fce27b540d5a",["dashboardchart_id",])
@Index("idx_3a31fce283954d93",["organisationunit_id",])
export class hris_dashboardchart_organisationunitmembers {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"dashboardchart_id"
        })
    dashboardchart_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"organisationunit_id"
        })
    organisationunit_id:number;
        
}
