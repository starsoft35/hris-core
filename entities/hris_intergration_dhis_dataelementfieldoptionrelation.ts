import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_intergration_dhis_dataelementfieldoptionrelation" ,{schema:"public" } )
@Index("idx_6902021b1bd8199f",["column_fieldoption_group_id",])
@Index("idx_6902021bb17756c2",["dhis_data_connection_id",])
@Index("idx_6902021bceff300e",["row_fieldoption_group_id",])
export class hris_intergration_dhis_dataelementfieldoptionrelation {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"dhis_data_connection_id"
        })
    dhis_data_connection_id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"column_fieldoption_group_id"
        })
    column_fieldoption_group_id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"row_fieldoption_group_id"
        })
    row_fieldoption_group_id:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:16,
        name:"dataelementuid"
        })
    dataelementuid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"dataelementname"
        })
    dataelementname:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:16,
        name:"categorycombouid"
        })
    categorycombouid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"categorycomboname"
        })
    categorycomboname:string;
        
}
