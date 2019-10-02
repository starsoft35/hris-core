import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_intergration_tiis_employee_fieldrelation" ,{schema:"public" } )
@Index("idx_a802e39c443707b0",["field_id",])
export class hris_intergration_tiis_employee_fieldrelation {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"tiis_data_connection_id"
        })
    tiis_data_connection_id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"field_id"
        })
    field_id:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        default: () => "NULL::character varying",
        name:"columnname"
        })
    columnname:string | null;
        
}
