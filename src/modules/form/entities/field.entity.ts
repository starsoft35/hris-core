import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {FieldDataType} from "./field-datatype.entity";
import {FieldInputType} from "./field-input-type.entity";
import {FieldRelation} from "./field-relation.entity";
import {FieldOption} from "./field-option.entity";
import {FieldOptionGroup} from "./field-option-group.entity";
import {FieldOptionMerge} from "./field-option-merge";
import {FormFieldMember} from "./form-field-member.entity";
import {FormVisibleField} from "./form-visible-fields.entity";
import {FormSectionFieldMember} from "./formsection-fieldmembers.entity";
import {FieldGroup} from "./field-group.entity";
import {Form} from "./form.entity";


@Entity("field",{schema:"public" } )
export class Field {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"fieldid"
        })
    id:number;
        

   
    @ManyToOne(type => FieldDataType, fieldDataType => fieldDataType.fields,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'datatypeid'})
    dataType: FieldDataType | null;


   
    @ManyToOne(type => FieldInputType, fieldInputType => fieldInputType.fields,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'inputtypeid'})
    inputType: FieldInputType | null;        

    @Column("character varying",{ 
        nullable:false,
        length:64,
        name:"caption"
        })
    caption:string;
        

    @Column("boolean",{ 
        nullable:true,
        name:"compulsory"
        })
    compulsory:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"isunique"
        })
    isunique:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"iscalculated"
        })
    iscalculated:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"calculatedexpression"
        })
    calculatedexpression:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"hashistory"
        })
    hashistory:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"hastarget"
        })
    hastarget:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"fieldrelation"
        })
    fieldrelation:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"skipinreport"
        })
    skipinreport:boolean | null;
        

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
   
    @OneToMany(type=>FieldRelation, fieldRelation=>fieldRelation.childField,{ onDelete: 'CASCADE' , })
    hris_field_relations:FieldRelation[];
   
    @OneToMany(type=>FieldRelation, fieldRelation=>fieldRelation.parentField,{ onDelete: 'CASCADE' , })
    hris_field_relations2:FieldRelation[];

    @OneToMany(type => FieldOption, fieldOption => fieldOption.field,{ onDelete: 'CASCADE' , })
    fieldOptions: FieldOption[];
    

   
    @OneToMany(type => FieldOptionGroup, fieldOptionGroup => fieldOptionGroup.field,{ onDelete: 'CASCADE' , })
    fieldOptionGroups: FieldOptionGroup[];
    

   
    @OneToMany(type => FieldOptionMerge, fieldOptionMerge => fieldOptionMerge.field,{ onDelete: 'CASCADE' , })
    fieldOptionMerges: FieldOptionMerge[];
    

   
    @OneToMany(type => FormFieldMember, formFieldMember => formFieldMember.field,{ onDelete: 'CASCADE' , })
    formFieldMembers: FormFieldMember[];
    

   
    @OneToMany(type => FormVisibleField, formVisibleField => formVisibleField.field,{ onDelete: 'CASCADE' , })
    formVisibleFields: FormVisibleField[];
    

   
    @OneToMany(type => FormSectionFieldMember, formSectionFieldMember => formSectionFieldMember.field,{ onDelete: 'CASCADE' , })
    formSectionFieldMembers: FormSectionFieldMember[];

    @ManyToMany(type => FieldGroup, fieldGroup => fieldGroup.fields)
    fieldGroups: FieldGroup[];
    

   
    @ManyToMany(type=>Form, form=>form.fields)
    forms: Form[];
    
}
