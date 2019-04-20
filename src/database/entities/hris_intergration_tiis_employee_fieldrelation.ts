import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_intergration_tiis_data_connection} from "./hris_intergration_tiis_data_connection";
import {hris_field} from "./hris_field";


@Entity("hris_intergration_tiis_employee_fieldrelation",{schema:"public" } )
@Index("idx_a802e39c443707b0",["field_",])
export class hris_intergration_tiis_employee_fieldrelation {

   
    @OneToOne(type=>hris_intergration_tiis_data_connection, hris_intergration_tiis_data_connection=>hris_intergration_tiis_data_connection.hris_intergration_tiis_employee_fieldrelation,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'tiis_data_connection_id'})
    tiis_data_connection_:hris_intergration_tiis_data_connection | null;


   
    @ManyToOne(type=>hris_field, hris_field=>hris_field.hris_intergration_tiis_employee_fieldrelations,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'field_id'})
    field_:hris_field | null;


    @Column("character varying",{ 
        nullable:true,
        length:255,
        default: () => "NULL::character varying",
        name:"columnname"
        })
    columnname:string | null;
        
}
