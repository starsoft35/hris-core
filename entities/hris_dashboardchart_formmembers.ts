import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_dashboardchart_formmembers" ,{schema:"public" } )
@Index("idx_81513e0f7b540d5a",["dashboardchart_id",])
@Index("idx_81513e0f5ff69b7d",["form_id",])
export class hris_dashboardchart_formmembers {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"dashboardchart_id"
        })
    dashboardchart_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"form_id"
        })
    form_id:number;
        
}
