import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("mnh_staff",{schema:"public" } )
export class mnh_staff {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:510,
        name:"file_number"
        })
    file_number:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"first_name"
        })
    first_name:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"middle_name"
        })
    middle_name:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"last_name"
        })
    last_name:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"date_of_birth"
        })
    date_of_birth:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"sex"
        })
    sex:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"marstat"
        })
    marstat:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"nationality"
        })
    nationality:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"district"
        })
    district:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"domicile"
        })
    domicile:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"cheque_number"
        })
    cheque_number:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"basic_salary"
        })
    basic_salary:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"date_of_appoitment"
        })
    date_of_appoitment:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"confirmation_date"
        })
    confirmation_date:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"date_last_promotion"
        })
    date_last_promotion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"employment_status"
        })
    employment_status:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"designation"
        })
    designation:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"payscale"
        })
    payscale:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"dept_name"
        })
    dept_name:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"emp_contacts"
        })
    emp_contacts:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"next_kin_contact"
        })
    next_kin_contact:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"next_of_kin_name"
        })
    next_of_kin_name:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"emp_classification"
        })
    emp_classification:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:510,
        name:"religion"
        })
    religion:string | null;
        
}
