import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { FieldDatatype } from './hris_field_datatype';
import { FieldInputtype } from './hris_field_inputtype';
import { Dashboardchart } from './hris_dashboardchart';
import { FieldRelation } from './hris_field_relation';
import { Fieldoption } from './hris_fieldoption';
import { Fieldoptiongroup } from './hris_fieldoptiongroup';
import { Fieldoptionmerge } from './hris_fieldoptionmerge';
import { FormFieldmembers } from './hris_form_fieldmembers';
import { FormVisiblefields } from './hris_form_visiblefields';
import { FormsectionFieldmembers } from './hris_formsection_fieldmembers';
import { IntergrationTiisEmployeeFieldrelation } from './hris_intergration_tiis_employee_fieldrelation';
import { RecordHistory } from './hris_record_history';
import { RecordHistoryDate } from './hris_record_history_date';
import { Relationalfilter } from './hris_relationalfilter';
import { ResourcetableFieldmembers } from './hris_resourcetable_fieldmembers';
import { Form } from './hris_form';
import { Fieldgroup } from './hris_fieldgroup';

@Entity('field', { schema: 'public' })
@Index('idx_8dc4bee05c815a09', ['datatype'])
@Index('idx_8dc4bee0f0cbe24d', ['inputtype'])
@Index('uniq_8dc4bee05e237e06', ['name'], { unique: true })
@Index('uniq_8dc4bee0539b0606', ['uid'], { unique: true })
export class Field {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => FieldDatatype,
    (FieldDatatype: FieldDatatype) => FieldDatatype.hrisFields,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'datatypeid' })
  datatype: FieldDatatype | null;

  @ManyToOne(
    () => FieldInputtype,
    (FieldInputtype: FieldInputtype) => FieldInputtype.hrisFields,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'inputtypeid' })
  inputtype: FieldInputtype | null;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'name',
  })
  name: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'caption',
  })
  caption: string;

  @Column('boolean', {
    nullable: true,
    name: 'compulsory',
  })
  compulsory: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'isunique',
  })
  isunique: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'iscalculated',
  })
  iscalculated: boolean | null;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('text', {
    nullable: true,
    name: 'calculatedexpression',
  })
  calculatedexpression: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'hashistory',
  })
  hashistory: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'hastarget',
  })
  hastarget: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'fieldrelation',
  })
  fieldrelation: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'skipinreport',
  })
  skipinreport: boolean | null;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'datecreated',
  })
  datecreated: Date;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastupdated',
  })
  lastupdated: Date | null;

  @OneToMany(
    () => Dashboardchart,
    (Dashboardchart: Dashboardchart) => Dashboardchart.fieldone,
    { onDelete: 'CASCADE' },
  )
  hrisDashboardcharts: Dashboardchart[];

  @OneToMany(
    () => Dashboardchart,
    (Dashboardchart: Dashboardchart) => Dashboardchart.fieldtwo,
    { onDelete: 'CASCADE' },
  )
  hrisDashboardcharts2: Dashboardchart[];

  @OneToMany(
    () => FieldRelation,
    (FieldRelation: FieldRelation) => FieldRelation.childField,
    { onDelete: 'CASCADE' },
  )
  hrisFieldRelations: FieldRelation[];

  @OneToMany(
    () => FieldRelation,
    (FieldRelation: FieldRelation) => FieldRelation.parentField,
    { onDelete: 'CASCADE' },
  )
  hrisFieldRelations2: FieldRelation[];

  @OneToMany(
    () => Fieldoption,
    (Fieldoption: Fieldoption) => Fieldoption.field,
    { onDelete: 'CASCADE' },
  )
  hrisFieldoptions: Fieldoption[];

  @OneToMany(
    () => Fieldoptiongroup,
    (Fieldoptiongroup: Fieldoptiongroup) => Fieldoptiongroup.field,
    { onDelete: 'CASCADE' },
  )
  hrisFieldoptiongroups: Fieldoptiongroup[];

  @OneToMany(
    () => Fieldoptionmerge,
    (Fieldoptionmerge: Fieldoptionmerge) => Fieldoptionmerge.field,
    { onDelete: 'CASCADE' },
  )
  hrisFieldoptionmerges: Fieldoptionmerge[];

  @OneToMany(
    () => FormFieldmembers,
    (FormFieldmembers: FormFieldmembers) => FormFieldmembers.field,
    { onDelete: 'CASCADE' },
  )
  hrisFormFieldmemberss: FormFieldmembers[];

  @OneToMany(
    () => FormVisiblefields,
    (FormVisiblefields: FormVisiblefields) => FormVisiblefields.field,
    { onDelete: 'CASCADE' },
  )
  hrisFormVisiblefieldss: FormVisiblefields[];

  @OneToMany(
    () => FormsectionFieldmembers,
    (FormsectionFieldmembers: FormsectionFieldmembers) =>
      FormsectionFieldmembers.field,
    { onDelete: 'CASCADE' },
  )
  hrisFormsectionFieldmemberss: FormsectionFieldmembers[];

  @OneToMany(
    () => IntergrationTiisEmployeeFieldrelation,
    (
      IntergrationTiisEmployeeFieldrelation: IntergrationTiisEmployeeFieldrelation,
    ) => IntergrationTiisEmployeeFieldrelation.field,
    { onDelete: 'CASCADE' },
  )
  hrisIntergrationTiisEmployeeFieldrelations: IntergrationTiisEmployeeFieldrelation[];

  @OneToMany(
    () => RecordHistory,
    (RecordHistory: RecordHistory) => RecordHistory.field,
    { onDelete: 'CASCADE' },
  )
  hrisRecordHistorys: RecordHistory[];

  @OneToMany(
    () => RecordHistoryDate,
    (RecordHistoryDate: RecordHistoryDate) => RecordHistoryDate.field,
    { onDelete: 'CASCADE' },
  )
  hrisRecordHistoryDates: RecordHistoryDate[];

  @OneToMany(
    () => Relationalfilter,
    (Relationalfilter: Relationalfilter) => Relationalfilter.field,
    { onDelete: 'CASCADE' },
  )
  hrisRelationalfilters: Relationalfilter[];

  @OneToMany(
    () => ResourcetableFieldmembers,
    (ResourcetableFieldmembers: ResourcetableFieldmembers) =>
      ResourcetableFieldmembers.field,
    { onDelete: 'CASCADE' },
  )
  hrisResourcetableFieldmemberss: ResourcetableFieldmembers[];

  @ManyToMany(() => Form, (Form: Form) => Form.hrisFields)
  hrisForms: Form[];

  @ManyToMany(
    () => Fieldgroup,
    (Fieldgroup: Fieldgroup) => Fieldgroup.hrisFields,
  )
  hrisFieldgroups: Fieldgroup[];
}
