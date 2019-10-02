import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_indicator_targetfieldoption" ,{schema:"public" } )
@Index("idx_e7321b205f3cdfc2",["fieldoption_id",])
@Index("idx_e7321b20158e0b66",["target_id",])
export class hris_indicator_targetfieldoption {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"target_id"
        })
    target_id:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldoption_id"
        })
    fieldoption_id:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"value"
        })
    value:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"max_value"
        })
    max_value:number | null;
        
}
