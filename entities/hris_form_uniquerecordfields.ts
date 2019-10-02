import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_form_uniquerecordfields" ,{schema:"public" } )
@Index("idx_65f38b73443707b0",["field_id",])
@Index("idx_65f38b735ff69b7d",["form_id",])
export class hris_form_uniquerecordfields {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"form_id"
        })
    form_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"field_id"
        })
    field_id:number;
        
}
