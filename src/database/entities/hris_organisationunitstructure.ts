import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { hris_organisationunit } from "./hris_organisationunit";
import {hris_organisationunitlevel} from "./hris_organisationunitlevel";


@Entity("hris_organisationunitstructure",{schema:"public" } )
@Index("idx_f820ce269e81aa93",["level1_",])
@Index("idx_f820ce268c34057d",["level2_",])
@Index("idx_f820ce2634886218",["level3_",])
@Index("idx_f820ce26a95f5aa1",["level4_",])
@Index("idx_f820ce2611e33dc4",["level5_",])
@Index("idx_f820ce26356922a",["level6_",])
@Index("idx_f820ce265fb14ba7",["level_",])
@Index("uniq_f820ce2683954d93",["organisationunit_",],{unique:true})
@Index("uniq_f820ce26539b0606",["uid",],{unique:true})
export class hris_organisationunitstructure {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @OneToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_organisationunitstructure,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'organisationunit_id'})
    organisationunit_:hris_organisationunit | null;


   
    @ManyToOne(type=>hris_organisationunitlevel, hris_organisationunitlevel=>hris_organisationunitlevel.hris_organisationunitstructures,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'level_id'})
    level_:hris_organisationunitlevel | null;


   
    @ManyToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_organisationunitstructures,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'level1_id'})
    level1_:hris_organisationunit | null;


   
    @ManyToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_organisationunitstructures2,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'level2_id'})
    level2_:hris_organisationunit | null;


   
    @ManyToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_organisationunitstructures3,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'level3_id'})
    level3_:hris_organisationunit | null;


   
    @ManyToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_organisationunitstructures4,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'level4_id'})
    level4_:hris_organisationunit | null;


   
    @ManyToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_organisationunitstructures5,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'level5_id'})
    level5_:hris_organisationunit | null;


   
    @ManyToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_organisationunitstructures6,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'level6_id'})
    level6_:hris_organisationunit | null;


    @Column("character varying",{ 
        nullable:false,
        length:13,
        name:"uid"
        })
    uid:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"datecreated"
        })
    datecreated:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "NULL::timestamp without time zone",
        name:"lastupdated"
        })
    lastupdated:Date | null;
        
}
