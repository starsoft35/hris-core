import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hris_leave_relative" ,{schema:"public" } )
@Index("idx_cbbd24371b2adb5c",["leave_id",])
export class hris_leave_relative {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"leave_id"
        })
    leave_id:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"name"
        })
    name:string;
        

    @Column("date",{ 
        nullable:false,
        name:"date_of_birth"
        })
    date_of_birth:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"age"
        })
    age:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        
}
