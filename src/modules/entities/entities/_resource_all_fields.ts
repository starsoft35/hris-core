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

@Entity('resourceallfields', { schema: 'public' })
export class ResourceAllFields {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'instance',
  })
  instance: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'firstname',
  })
  firstname: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'middlename',
  })
  middlename: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'surname',
  })
  surname: string | null;

  @Column('date', {
    nullable: true,
    name: 'surname_last_updated',
  })
  surname_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'surname_last_updated_month_text',
  })
  surname_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'surname_last_updated_year',
  })
  surname_last_updated_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'sex',
  })
  sex: string | null;

  @Column('date', {
    nullable: true,
    name: 'dob',
  })
  dob: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'dob_month_text',
  })
  dob_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'dob_year',
  })
  dob_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'basic_education_level',
  })
  basic_education_level: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'edu_evel',
  })
  edu_evel: string | null;

  @Column('date', {
    nullable: true,
    name: 'edu_evel_last_updated',
  })
  edu_evel_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'edu_evel_last_updated_month_text',
  })
  edu_evel_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'edu_evel_last_updated_year',
  })
  edu_evel_last_updated_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'specialization',
  })
  specialization: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'profession',
  })
  profession: string | null;

  @Column('date', {
    nullable: true,
    name: 'profession_last_updated',
  })
  profession_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'profession_last_updated_month_text',
  })
  profession_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'profession_last_updated_year',
  })
  profession_last_updated_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'designation',
  })
  designation: string | null;

  @Column('date', {
    nullable: true,
    name: 'designation_last_updated',
  })
  designation_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'designation_last_updated_month_text',
  })
  designation_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'designation_last_updated_year',
  })
  designation_last_updated_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'hosp_designation',
  })
  hosp_designation: string | null;

  @Column('date', {
    nullable: true,
    name: 'hosp_designation_last_updated',
  })
  hosp_designation_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'hosp_designation_last_updated_month_text',
  })
  hosp_designation_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'hosp_designation_last_updated_year',
  })
  hosp_designation_last_updated_year: number | null;

  @Column('date', {
    nullable: true,
    name: 'first_appointment',
  })
  first_appointment: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'first_appointment_month_text',
  })
  first_appointment_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'first_appointment_year',
  })
  first_appointment_year: number | null;

  @Column('date', {
    nullable: true,
    name: 'confirmation_date',
  })
  confirmation_date: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'confirmation_date_month_text',
  })
  confirmation_date_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'confirmation_date_year',
  })
  confirmation_date_year: number | null;

  @Column('date', {
    nullable: true,
    name: 'last_promo',
  })
  last_promo: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'last_promo_month_text',
  })
  last_promo_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'last_promo_year',
  })
  last_promo_year: number | null;

  @Column('date', {
    nullable: true,
    name: 'last_promo_last_updated',
  })
  last_promo_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'last_promo_last_updated_month_text',
  })
  last_promo_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'last_promo_last_updated_year',
  })
  last_promo_last_updated_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'employer',
  })
  employer: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'employment_status',
  })
  employment_status: string | null;

  @Column('date', {
    nullable: true,
    name: 'employment_status_last_updated',
  })
  employment_status_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'employment_status_last_updated_month_text',
  })
  employment_status_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'employment_status_last_updated_year',
  })
  employment_status_last_updated_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'employment_terms',
  })
  employment_terms: string | null;

  @Column('date', {
    nullable: true,
    name: 'employment_terms_last_updated',
  })
  employment_terms_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'employment_terms_last_updated_month_text',
  })
  employment_terms_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'employment_terms_last_updated_year',
  })
  employment_terms_last_updated_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'employmentduration',
  })
  employmentduration: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'marital',
  })
  marital: string | null;

  @Column('date', {
    nullable: true,
    name: 'marital_last_updated',
  })
  marital_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'marital_last_updated_month_text',
  })
  marital_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'marital_last_updated_year',
  })
  marital_last_updated_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'check_no',
  })
  check_no: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'file_no',
  })
  file_no: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'department',
  })
  department: string | null;

  @Column('date', {
    nullable: true,
    name: 'department_last_updated',
  })
  department_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'department_last_updated_month_text',
  })
  department_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'department_last_updated_year',
  })
  department_last_updated_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'hosp_dept',
  })
  hosp_dept: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'superlative',
  })
  superlative: string | null;

  @Column('date', {
    nullable: true,
    name: 'superlative_last_updated',
  })
  superlative_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'superlative_last_updated_month_text',
  })
  superlative_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'superlative_last_updated_year',
  })
  superlative_last_updated_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'hosp_superlative_post',
  })
  hosp_superlative_post: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'salary_scale',
  })
  salary_scale: string | null;

  @Column('date', {
    nullable: true,
    name: 'salary_scale_last_updated',
  })
  salary_scale_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'salary_scale_last_updated_month_text',
  })
  salary_scale_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'salary_scale_last_updated_year',
  })
  salary_scale_last_updated_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'hosp_salary_scale',
  })
  hosp_salary_scale: string | null;

  @Column('double precision', {
    nullable: true,
    precision: 53,
    name: 'salary',
  })
  salary: number | null;

  @Column('date', {
    nullable: true,
    name: 'salary_last_updated',
  })
  salary_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'salary_last_updated_month_text',
  })
  salary_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'salary_last_updated_year',
  })
  salary_last_updated_year: number | null;

  @Column('text', {
    nullable: true,
    default: () => 'NULL::character varying',
    name: 'domicile',
  })
  domicile: string | null;

  @Column('text', {
    nullable: true,
    default: () => 'NULL::character varying',
    name: 'contact',
  })
  contact: string | null;

  @Column('text', {
    nullable: true,
    default: () => 'NULL::character varying',
    name: 'contact_of_next_of_kin',
  })
  contact_of_next_of_kin: string | null;

  @Column('text', {
    nullable: true,
    default: () => 'NULL::character varying',
    name: 'relation_next_kin',
  })
  relation_next_kin: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'disability',
  })
  disability: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'nationality',
  })
  nationality: string | null;

  @Column('text', {
    nullable: true,
    default: () => 'NULL::character varying',
    name: 'next_kin',
  })
  next_kin: string | null;

  @Column('integer', {
    nullable: true,
    name: 'number_of_children',
  })
  number_of_children: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'reg_no',
  })
  reg_no: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'agedistribution',
  })
  agedistribution: string | null;

  @Column('date', {
    nullable: true,
    name: 'agedistribution_last_updated',
  })
  agedistribution_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'agedistribution_last_updated_month_text',
  })
  agedistribution_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'agedistribution_last_updated_year',
  })
  agedistribution_last_updated_year: number | null;

  @Column('integer', {
    nullable: true,
    name: 'age',
  })
  age: number | null;

  @Column('integer', {
    nullable: true,
    name: 'retirementdistribution',
  })
  retirementdistribution: number | null;

  @Column('date', {
    nullable: true,
    name: 'retirementdistribution_last_updated',
  })
  retirementdistribution_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'retirementdistribution_last_updated_month_text',
  })
  retirementdistribution_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'retirementdistribution_last_updated_year',
  })
  retirementdistribution_last_updated_year: number | null;

  @Column('integer', {
    nullable: true,
    name: 'employmentdistribution',
  })
  employmentdistribution: number | null;

  @Column('date', {
    nullable: true,
    name: 'employmentdistribution_last_updated',
  })
  employmentdistribution_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'employmentdistribution_last_updated_month_text',
  })
  employmentdistribution_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'employmentdistribution_last_updated_year',
  })
  employmentdistribution_last_updated_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'email',
  })
  email: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'religion',
  })
  religion: string | null;

  @Column('date', {
    nullable: true,
    name: 'religion_last_updated',
  })
  religion_last_updated: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'religion_last_updated_month_text',
  })
  religion_last_updated_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'religion_last_updated_year',
  })
  religion_last_updated_year: number | null;

  @Column('date', {
    nullable: true,
    name: 'retirementdate',
  })
  retirementdate: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'retirementdate_month_text',
  })
  retirementdate_month_text: string | null;

  @Column('integer', {
    nullable: true,
    name: 'retirementdate_year',
  })
  retirementdate_year: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'level1_mohcdgec',
  })
  level1_mohcdgec: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'level2_categories',
  })
  level2_categories: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'level3_regions_departments_institutions_referrals',
  })
  level3_regions_departments_institutions_referrals: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'level4_districts_reg_hospitals',
  })
  level4_districts_reg_hospitals: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'level5_facility',
  })
  level5_facility: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'type',
  })
  type: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'ownership',
  })
  ownership: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'organisationunit_name',
  })
  organisationunit_name: string | null;

  @Column('integer', {
    nullable: true,
    name: 'level',
  })
  level: number | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'levelname',
  })
  levelname: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'form_name',
  })
  form_name: string | null;

  @Column('integer', {
    nullable: true,
    name: 'organisationunitid',
  })
  organisationunitid: number | null;

  @Column('integer', {
    nullable: true,
    name: 'formid',
  })
  formid: number | null;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastupdated',
  })
  lastupdated: Date | null;
}
