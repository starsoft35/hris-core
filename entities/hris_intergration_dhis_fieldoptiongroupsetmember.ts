import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_intergration_dhis_fieldoptiongroupsetmember" ,{schema:"public" } )
@Index("idx_a410d632b17756c2",["dhis_data_connection_id",])
@Index("idx_a410d632fd950577",["field_option_groupset_id",])
export class hris_intergration_dhis_fieldoptiongroupsetmember {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"dhis_data_connection_id"
        })
    dhis_data_connection_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"field_option_groupset_id"
        })
    field_option_groupset_id:number;
        
}
