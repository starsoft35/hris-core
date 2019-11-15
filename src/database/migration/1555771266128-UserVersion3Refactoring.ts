import {MigrationInterface, QueryRunner} from "typeorm";
import { objectTypeSpreadProperty } from '@babel/types';

export class UserVersion3Refactoring1555771266128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        //await queryRunner.query('ALTER TABLE hris_user" RENAME TO user');
        let userTable = await queryRunner.getTable('hris_user');

        if (userTable){
            await queryRunner.query('ALTER TABLE "hris_user" RENAME TO "user"');

            await queryRunner.query('ALTER TABLE "user" ADD COLUMN "createdbyid" INTEGER');
            await queryRunner.query('ALTER TABLE "user" ADD CONSTRAINT "fk_user_createdby" FOREIGN KEY("createdbyid") REFERENCES "user"');
            await queryRunner.query('ALTER TABLE "user" ADD COLUMN "lastupdatedbyid" INTEGER');
            await queryRunner.query('ALTER TABLE "user" ADD CONSTRAINT "fk_user_lastupdatedby" FOREIGN KEY("lastupdatedbyid") REFERENCES "user"');

            //await queryRunner.query('ALTER TABLE "user" RENAME COLUMN id TO "userid"');
            await queryRunner.query('ALTER TABLE "user" RENAME COLUMN "organisationunit_id" TO "organisationunitid"');
            await queryRunner.query('ALTER TABLE "user" RENAME COLUMN "last_login" TO "lastlogin"');
            await queryRunner.query('ALTER TABLE "user" RENAME COLUMN "confirmation_token" TO "token"');
            await queryRunner.query('ALTER TABLE "user" RENAME COLUMN "datecreated" TO "created"');

            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "username_canonical"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "salt"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "password"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "locked"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "expired"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "expires_at"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "password_requested_at"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "credentials_expired"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "credentials_expire_at"');

            await queryRunner.query('ALTER TABLE "hris_user_group" RENAME TO "userrole"');
            //await queryRunner.query('ALTER TABLE "userrole" RENAME COLUMN id TO "userroleid"');
            await queryRunner.query('ALTER TABLE "userrole" RENAME COLUMN "datecreated" TO "created"');
            await queryRunner.query('ALTER TABLE "userrole" ADD COLUMN "createdbyid" INTEGER');
            await queryRunner.query('ALTER TABLE "userrole" ADD CONSTRAINT "fk_userrole_createdby" FOREIGN KEY("createdbyid") REFERENCES "user"');
            await queryRunner.query('ALTER TABLE "userrole" ADD COLUMN "lastupdatedbyid" INTEGER');
            await queryRunner.query('ALTER TABLE "userrole" ADD CONSTRAINT "fk_userrole_lastupdatedby" FOREIGN KEY("lastupdatedbyid") REFERENCES "user"');

            await queryRunner.query('ALTER TABLE "hris_user_group_members" RENAME TO "userrolemembers"');
            await queryRunner.query('ALTER TABLE "userrolemembers" RENAME COLUMN group_id TO "userroleid"');
            await queryRunner.query('ALTER TABLE "userrolemembers" RENAME COLUMN user_id TO "userid"');
            //await queryRunner.query('ALTER TABLE GOOD ALTER COLUMN "id" RENAME TO userid;');
            await queryRunner.query(`CREATE SEQUENCE userauthority_id_seq
    INCREMENT 1
    START 1508
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;`);
            let query = `CREATE TABLE userauthority
                (
                    created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
                    lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
                    id integer NOT NULL DEFAULT nextval('userauthority_id_seq':: regclass),
                    uid character varying(256) COLLATE pg_catalog."default" NOT NULL,
                    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
                    description text COLLATE pg_catalog."default",
                    CONSTRAINT "PK_fe38a99dbf1752298d9ecb3d8b7" PRIMARY KEY(id),
                    CONSTRAINT "UQ_28361ca58f332ff7f4b1b3ae787" UNIQUE(uid),
                    CONSTRAINT "UQ_57cf3ab6145ccc967d1749bf28a" UNIQUE(name)

                )`;
            console.log(query);
            await queryRunner.query(query);

            const previousRoles = {
                "ROLE_ADMIN": "ROLE_USER",
                "ROLE_DASHBOARD_VIEW": [
                    "ROLE_USER",
                    "ROLE_DASHBOARD_HOME",
                    "ROLE_DASHBOARD_LIST",
                    "ROLE_DASHBOARD_SHOW"
                ],
                "ROLE_DASHBOARD_MODIFY": [
                    "ROLE_DASHBOARD_VIEW",
                    "ROLE_DASHBOARD_CREATE",
                    "ROLE_DASHBOARD_UPDATE",
                    "ROLE_DASHBOARD_DELETE"
                ],
                "ROLE_SETTINGS_VIEW": [
                    "ROLE_SETTINGS_SHOW"
                ],
                "ROLE_SETTINGS_MODIFY": [
                    "ROLE_SETTINGS_VIEW",
                    "ROLE_SETTINGS_CREATE",
                    "ROLE_SETTINGS_DELETE"
                ],
                "ROLE_VALIDATION_VIEW": [
                    "ROLE_VALIDATION_LIST",
                    "ROLE_VALIDATION_SHOW"
                ],
                "ROLE_VALIDATION_MODIFY": [
                    "ROLE_VALIDATION_VIEW",
                    "ROLE_VALIDATION_UPDATE",
                    "ROLE_VALIDATION_CREATE",
                    "ROLE_VALIDATION_DELETE"
                ],
                "ROLE_DHISDATACONNECTION_VIEW": [
                    "ROLE_DHISDATACONNECTION_LIST",
                    "ROLE_DHISDATACONNECTION_SHOW"
                ],
                "ROLE_DHISDATACONNECTION_MODIFY": [
                    "ROLE_DHISDATACONNECTION_VIEW",
                    "ROLE_DHISDATACONNECTION_UPDATE",
                    "ROLE_DHISDATACONNECTION_CREATE",
                    "ROLE_DHISDATACONNECTION_DELETE"
                ],
                "ROLE_ARITHMETICFILTER_VIEW": [
                    "ROLE_ARITHMETICFILTER_LIST",
                    "ROLE_ARITHMETICFILTER_SHOW"
                ],
                "ROLE_ARITHMETICFILTER_MODIFY": [
                    "ROLE_ARITHMETICFILTER_VIEW",
                    "ROLE_ARITHMETICFILTER_CREATE",
                    "ROLE_ARITHMETICFILTER_UPDATE"
                ],
                "ROLE_FIELD_VIEW": [
                    "ROLE_FIELD_LIST",
                    "ROLE_FIELD_SHOW"
                ],
                "ROLE_FIELD_MODIFY": [
                    "ROLE_FIELD_VIEW",
                    "ROLE_FIELD_CREATE",
                    "ROLE_FIELD_UPDATE",
                    "ROLE_FIELD_DELETE"
                ],
                "ROLE_FIELDGROUP_VIEW": [
                    "ROLE_FIELDGROUP_LIST",
                    "ROLE_FIELDGROUP_SHOW"
                ],
                "ROLE_FIELDGROUP_MODIFY": [
                    "ROLE_FIELDGROUP_VIEW",
                    "ROLE_FIELDGROUP_CREATE",
                    "ROLE_FIELDGROUP_UPDATE",
                    "ROLE_FIELDGROUP_DELETE"
                ],
                "ROLE_FIELDOPTION_VIEW": [
                    "ROLE_FIELDOPTION_LIST",
                    "ROLE_FIELDOPTION_SHOW"
                ],
                "ROLE_FIELDOPTION_MODIFY": [
                    "ROLE_FIELDOPTION_VIEW",
                    "ROLE_FIELDOPTION_CREATE",
                    "ROLE_FIELDOPTION_UPDATE",
                    "ROLE_FIELDOPTION_DELETE"
                ],
                "ROLE_FIELDOPTIONGROUP_VIEW": [
                    "ROLE_FIELDOPTIONGROUP_LIST",
                    "ROLE_FIELDOPTIONGROUP_SHOW"
                ],
                "ROLE_FIELDOPTIONGROUP_MODIFY": [
                    "ROLE_FIELDOPTIONGROUP_VIEW",
                    "ROLE_FIELDOPTIONGROUP_CREATE",
                    "ROLE_FIELDOPTIONGROUP_UPDATE",
                    "ROLE_FIELDOPTIONGROUP_DELETE"
                ],
                "ROLE_FIELDOPTIONGROUPSET_VIEW": [
                    "ROLE_FIELDOPTIONGROUPSET_LIST",
                    "ROLE_FIELDOPTIONGROUPSET_SHOW"
                ],
                "ROLE_FIELDOPTIONGROUPSET_MODIFY": [
                    "ROLE_FIELDOPTIONGROUPSET_VIEW",
                    "ROLE_FIELDOPTIONGROUPSET_CREATE",
                    "ROLE_FIELDOPTIONGROUPSET_UPDATE",
                    "ROLE_FIELDOPTIONGROUPSET_DELETE"
                ],
                "ROLE_FIELDOPTIONMERGE_VIEW": [
                    "ROLE_FIELDOPTIONMERGE_LIST",
                    "ROLE_FIELDOPTIONMERGE_SHOW"
                ],
                "ROLE_FIELDOPTIONMERGE_MODIFY": [
                    "ROLE_FIELDOPTIONMERGE_VIEW",
                    "ROLE_FIELDOPTIONMERGE_CREATE",
                    "ROLE_FIELDOPTIONMERGE_UPDATE",
                    "ROLE_FIELDOPTIONMERGE_DELETE"
                ],
                "ROLE_FORM_VIEW": [
                    "ROLE_FORM_LIST",
                    "ROLE_FORM_SHOW"
                ],
                "ROLE_FORM_MODIFY": [
                    "ROLE_FORM_VIEW",
                    "ROLE_FORM_CREATE",
                    "ROLE_FORM_UPDATE",
                    "ROLE_FORM_DESIGN",
                    "ROLE_FORM_DELETE"
                ],
                "ROLE_FRIENDLYREPORT_VIEW": [
                    "ROLE_FRIENDLYREPORT_LIST",
                    "ROLE_FRIENDLYREPORT_SHOW"
                ],
                "ROLE_FRIENDLYREPORT_MODIFY": [
                    "ROLE_FRIENDLYREPORT_VIEW",
                    "ROLE_FRIENDLYREPORT_CREATE",
                    "ROLE_FRIENDLYREPORT_UPDATE",
                    "ROLE_FRIENDLYREPORT_DELETE"
                ],
                "ROLE_RELATIONALFILTER_VIEW": [
                    "ROLE_RELATIONALFILTER_LIST",
                    "ROLE_RELATIONALFILTER_SHOW"
                ],
                "ROLE_RELATIONALFILTER_MODIFY": [
                    "ROLE_RELATIONALFILTER_VIEW",
                    "ROLE_RELATIONALFILTER_CREATE",
                    "ROLE_RELATIONALFILTER_UPDATE",
                    "ROLE_RELATIONALFILTER_DELETE"
                ],
                "ROLE_RESOURCETABLE_VIEW": [
                    "ROLE_RESOURCETABLE_LIST",
                    "ROLE_RESOURCETABLE_SHOW"
                ],
                "ROLE_RESOURCETABLE_MODIFY": [
                    "ROLE_RESOURCETABLE_VIEW",
                    "ROLE_RESOURCETABLE_CREATE",
                    "ROLE_RESOURCETABLE_UPDATE",
                    "ROLE_RESOURCETABLE_GENERATE",
                    "ROLE_RESOURCETABLE_DELETE"
                ],
                "ROLE_HELPCHAPTER_VIEW": [
                    "ROLE_HELPCHAPTER_LIST",
                    "ROLE_HELPCHAPTER_SHOW"
                ],
                "ROLE_HELPCHAPTER_MODIFY": [
                    "ROLE_HELPCHAPTER_VIEW",
                    "ROLE_HELPCHAPTER_CREATE",
                    "ROLE_HELPCHAPTER_UPDATE",
                    "ROLE_HELPCHAPTER_DELETE"
                ],
                "ROLE_HELPCENTRE_VIEW": [
                    "ROLE_HELPCENTRE_TOPICS",
                    "ROLE_HELPCENTRE_CHAPTER"
                ],
                "ROLE_HELPTOPIC_VIEW": [
                    "ROLE_HELPTOPIC_LIST",
                    "ROLE_HELPTOPIC_SHOW"
                ],
                "ROLE_HELPTOPIC_MODIFY": [
                    "ROLE_HELPTOPIC_VIEW",
                    "ROLE_HELPTOPIC_CREATE",
                    "ROLE_HELPTOPIC_UPDATE",
                    "ROLE_HELPTOPIC_DELETE"
                ],
                "ROLE_EXPORT_VIEW": [
                    "ROLE_EXPORT_LIST",
                    "ROLE_EXPORT_SHOW"
                ],
                "ROLE_EXPORT_MODIFY": [
                    "ROLE_EXPORT_VIEW",
                    "ROLE_EXPORT_CREATE",
                    "ROLE_EXPORT_UPDATE",
                    "ROLE_EXPORT_DELETE"
                ],
                "ROLE_EXPORTMETADATA_VIEW": [
                    "ROLE_EXPORTMETADATA_LIST",
                    "ROLE_EXPORTMETADATA_SHOW"
                ],
                "ROLE_EXPORTMETADATA_MODIFY": [
                    "ROLE_EXPORTMETADATA_VIEW",
                    "ROLE_EXPORTMETADATA_CREATE",
                    "ROLE_EXPORTMETADATA_UPDATE",
                    "ROLE_EXPORTMETADATA_DELETE"
                ],
                "ROLE_IMPORTHISTORY_VIEW": [
                    "ROLE_IMPORTHISTORY_LIST",
                    "ROLE_IMPORTHISTORY_SHOW"
                ],
                "ROLE_IMPORTHISTORY_MODIFY": [
                    "ROLE_IMPORTHISTORY_VIEW",
                    "ROLE_IMPORTHISTORY_CREATE",
                    "ROLE_IMPORTHISTORY_UPDATE",
                    "ROLE_IMPORTHISTORY_DELETE"
                ],
                "ROLE_IMPORT_VIEW": [
                    "ROLE_IMPORT_LIST",
                    "ROLE_IMPORT_SHOW"
                ],
                "ROLE_IMPORT_MODIFY": [
                    "ROLE_IMPORT_VIEW",
                    "ROLE_IMPORT_CREATE",
                    "ROLE_IMPORT_UPDATE",
                    "ROLE_IMPORT_IMPORTRECORDS",
                    "ROLE_IMPORT_ORGANISATIONUNITS",
                    "ROLE_IMPORT_IMPORTFIELDOPTIONS",
                    "ROLE_IMPORT_IMPORTRECORDS",
                    "ROLE_IMPORT_DELETE"
                ],
                "ROLE_INDICATOR_VIEW": [
                    "ROLE_INDICATOR_LIST",
                    "ROLE_INDICATOR_SHOW"
                ],
                "ROLE_INDICATOR_MODIFY": [
                    "ROLE_INDICATOR_VIEW",
                    "ROLE_INDICATOR_CREATE",
                    "ROLE_INDICATOR_UPDATE",
                    "ROLE_INDICATOR_DELETE"
                ],
                "ROLE_TARGET_VIEW": [
                    "ROLE_TARGET_LIST",
                    "ROLE_TARGET_SHOW",
                    "ROLE_TARGET_LISTFIELDOPTIONS"
                ],
                "ROLE_TARGET_MODIFY": [
                    "ROLE_TARGET_VIEW",
                    "ROLE_TARGET_CREATE",
                    "ROLE_TARGET_UPDATE",
                    "ROLE_TARGET_DELETE"
                ],
                "ROLE_MESSAGE_VIEW": [
                    "ROLE_MESSAGE_INBOX",
                    "ROLE_MESSAGE_SENT",
                    "ROLE_MESSAGE_THREAD",
                    "ROLE_MESSAGE_SEARCHUSERS",
                    "ROLE_MESSAGE_SEARCH"
                ],
                "ROLE_MESSAGE_MODIFY": [
                    "ROLE_MESSAGE_VIEW",
                    "ROLE_MESSAGE_CREATETHREAD",
                    "ROLE_MESSAGE_MULTIMESSAGECREATETHREAD",
                    "ROLE_MESSAGE_DELETE"
                ],
                "ROLE_ORGANISATIONUNITCOMPLETENESS_VIEW": [
                    "ROLE_ORGANISATIONUNITCOMPLETENESS_LIST",
                    "ROLE_ORGANISATIONUNITCOMPLETENESS_SHOW"
                ],
                "ROLE_ORGANISATIONUNITCOMPLETENESS_MODIFY": [
                    "ROLE_ORGANISATIONUNITCOMPLETENESS_VIEW",
                    "ROLE_ORGANISATIONUNITCOMPLETENESS_CREATE",
                    "ROLE_ORGANISATIONUNITCOMPLETENESS_UPDATE",
                    "ROLE_ORGANISATIONUNITCOMPLETENESS_AJAXUPDATE",
                    "ROLE_ORGANISATIONUNITCOMPLETENESS_DELETE"
                ],
                "ROLE_ORGANISATIONUNIT_VIEW": [
                    "ROLE_ORGANISATIONUNIT_LIST",
                    "ROLE_ORGANISATIONUNIT_SHOW",
                    "ROLE_ORGANISATIONUNIT_LISTTREE",
                    "ROLE_ORGANISATIONUNITGROUP_LISTTREE",
                    "ROLE_ORGANISATIONUNIT_LISTHIERARCHY"
                ],
                "ROLE_ORGANISATIONUNIT_MODIFY": [
                    "ROLE_ORGANISATIONUNIT_VIEW",
                    "ROLE_ORGANISATIONUNIT_CREATE",
                    "ROLE_ORGANISATIONUNIT_UPDATE",
                    "ROLE_ORGANISATIONUNIT_UPDATEHIERARCHY",
                    "ROLE_ORGANISATIONUNIT_DELETE"
                ],
                "ROLE_ORGANISATIONUNITGROUP_VIEW": [
                    "ROLE_ORGANISATIONUNITGROUP_LIST",
                    "ROLE_ORGANISATIONUNITGROUP_SHOW"
                ],
                "ROLE_ORGANISATIONUNITGROUP_MODIFY": [
                    "ROLE_ORGANISATIONUNITGROUP_VIEW",
                    "ROLE_ORGANISATIONUNITGROUP_CREATE",
                    "ROLE_ORGANISATIONUNITGROUP_UPDATE",
                    "ROLE_ORGANISATIONUNITGROUP_DELETE"
                ],
                "ROLE_ORGANISATIONUNITGROUPSET_VIEW": [
                    "ROLE_ORGANISATIONUNITGROUPSET_LIST",
                    "ROLE_ORGANISATIONUNITGROUPSET_SHOW"
                ],
                "ROLE_ORGANISATIONUNITGROUPSET_MODIFY": [
                    "ROLE_ORGANISATIONUNITGROUPSET_VIEW",
                    "ROLE_ORGANISATIONUNITGROUPSET_CREATE",
                    "ROLE_ORGANISATIONUNITGROUPSET_UPDATE",
                    "ROLE_ORGANISATIONUNITGROUPSET_DELETE"
                ],
                "ROLE_ORGANISATIONUNITLEVEL_VIEW": [
                    "ROLE_ORGANISATIONUNITLEVEL_LIST",
                    "ROLE_ORGANISATIONUNITLEVEL_SHOW"
                ],
                "ROLE_ORGANISATIONUNITLEVEL_MODIFY": [
                    "ROLE_ORGANISATIONUNITLEVEL_VIEW",
                    "ROLE_ORGANISATIONUNITLEVEL_CREATE",
                    "ROLE_ORGANISATIONUNITLEVEL_UPDATE",
                    "ROLE_ORGANISATIONUNITLEVEL_REGENERATE",
                    "ROLE_ORGANISATIONUNITLEVEL_DELETE"
                ],
                "ROLE_ORGANISATIONUNITSTRUCTURE_VIEW": [
                    "ROLE_ORGANISATIONUNITSTRUCTURE_LIST",
                    "ROLE_ORGANISATIONUNITSTRUCTURE_SHOW"
                ],
                "ROLE_ORGANISATIONUNITSTRUCTURE_MODIFY": [
                    "ROLE_ORGANISATIONUNITSTRUCTURE_VIEW",
                    "ROLE_ORGANISATIONUNITSTRUCTURE_CREATE",
                    "ROLE_ORGANISATIONUNITSTRUCTURE_UPDATE",
                    "ROLE_ORGANISATIONUNITSTRUCTURE_DELETE"
                ],
                "ROLE_RECORDHISTORY_VIEW": [
                    "ROLE_RECORDHISTORY_LIST",
                    "ROLE_RECORDHISTORY_SHOW",
                    "ROLE_RECORDHISTORY_SHOWEMPLOYEENAME",
                    "ROLE_RECORDHISTORY_SHOWFIELDOPTION"
                ],
                "ROLE_RECORDHISTORY_MODIFY": [
                    "ROLE_RECORDHISTORY_VIEW",
                    "ROLE_RECORDHISTORY_CREATE",
                    "ROLE_RECORDHISTORY_UPDATE",
                    "ROLE_RECORDHISTORY_DELETE"
                ],
                "ROLE_RECORD_VIEW": [
                    "ROLE_RECORD_LIST",
                    "ROLE_RECORD_SHOW",
                    "ROLE_RECORD_LISTFORMS"
                ],
                "ROLE_RECORD_MODIFY": [
                    "ROLE_RECORD_VIEW",
                    "ROLE_RECORD_CREATE",
                    "ROLE_RECORD_UPDATE",
                    "ROLE_RECORD_CHANGEFORM",
                    "ROLE_RECORD_DELETE"
                ],
                "ROLE_RECORDTRAINING_VIEW": [
                    "ROLE_RECORDTRAINING_LIST",
                    "ROLE_RECORDTRAINING_SHOW",
                    "ROLE_RECORDTRAINING_SHOWEMPLOYEENAME"
                ],
                "ROLE_RECORDTRAINING_MODIFY": [
                    "ROLE_RECORDTRAINING_VIEW",
                    "ROLE_RECORDTRAINING_CREATE",
                    "ROLE_RECORDTRAINING_UPDATE",
                    "ROLE_RECORDTRAINING_DELETE"
                ],
                "ROLE_RECORDVALIDATION_VIEW": [
                    "ROLE_RECORDVALIDATION_VALIDATE"
                ],
                "ROLE_REPORTAGGREGATION_VIEW": [
                    "ROLE_REPORTAGGREGATION_GENERATE",
                    "ROLE_REPORTAGGREGATION_DOWNLOAD"
                ],
                "ROLE_REPORTAGGREGATION_VIEWRECORDS": [
                    "ROLE_REPORTAGGREGATION_VIEW",
                    "ROLE_REPORTAGGREGATION_DOWNLOADRECORDS"
                ],
                "ROLE_REPORTSHARING_VIEW": [
                    "ROLE_REPORTSHARING_LIST",
                    "ROLE_REPORTSHARING_SHOW"
                ],
                "ROLE_REPORTSHARING_MODIFY": [
                    "ROLE_REPORTSHARING_VIEW",
                    "ROLE_REPORTSHARING_CREATE",
                    "ROLE_REPORTSHARING_UPDATE",
                    "ROLE_REPORTSHARING_DELETE"
                ],
                "ROLE_REPORTRECORDS_VIEW": [
                    "ROLE_REPORTRECORDS_LIST",
                    "ROLE_REPORTRECORDS_DOWNLOAD"
                ],
                "ROLE_REPORTFRIENDLYREPORT_VIEW": [
                    "ROLE_REPORTFRIENDLYREPORT_GENERATE"
                ],
                "ROLE_REPORTHISTORY_VIEW": [
                    "ROLE_REPORTHISTORY_GENERATE",
                    "ROLE_REPORTHISTORY_DOWNLOAD"
                ],
                "ROLE_REPORTHISTORY_VIEWRECORDS": [
                    "ROLE_REPORTHISTORY_VIEW",
                    "ROLE_REPORTHISTORY_DOWNLOADBYCADRE"
                ],
                "ROLE_REPORTORGANISATIONUNITGROUPSET_VIEW": [
                    "ROLE_REPORTORGANISATIONUNITGROUPSET_GENERATE"
                ],
                "ROLE_REPORTORGANISATIONUNITLEVELS_VIEW": [
                    "ROLE_REPORTORGANISATIONUNITLEVELS_GENERATE"
                ],
                "ROLE_REPORTORGANISATIONUNITCOMPLETENESS_VIEW": [
                    "ROLE_REPORTORGANISATIONUNITCOMPLETENESS_GENERATE"
                ],
                "ROLE_USER_VIEW": [
                    "ROLE_USER_LIST",
                    "ROLE_USER_SHOW"
                ],
                "ROLE_USER_MODIFY": [
                    "ROLE_USER_VIEW",
                    "ROLE_USER_CREATE",
                    "ROLE_USER_UPDATE",
                    "ROLE_USER_DELETE"
                ],
                "ROLE_USERGROUP_VIEW": [
                    "ROLE_USERGROUP_LIST",
                    "ROLE_USERGROUP_SHOW"
                ],
                "ROLE_USERGROUP_MODIFY": [
                    "ROLE_USERGROUP_VIEW",
                    "ROLE_USERGROUP_CREATE",
                    "ROLE_USERGROUP_UPDATE",
                    "ROLE_USERGROUP_DELETE"
                ],
                "ROLE_USERPROFILE_VIEW": [
                    "ROLE_USERPROFILE_SHOW"
                ],
                "ROLE_USERPROFILE_MODIFY": [
                    "ROLE_USERPROFILE_VIEW",
                    "ROLE_USERPROFILE_UPDATE"
                ],
                "ROLE_USER_CHANGEPASSWORD": [
                    "ROLE_USER_CHANGEPASSWORD"
                ],
                "ROLE_HELPCENTRE_BUNDLE_VIEW": [
                    "ROLE_HELPCHAPTER_VIEW",
                    "ROLE_HELPTOPIC_VIEW",
                    "ROLE_HELPCENTRE_BUNDLE_MENU"
                ],
                "ROLE_HELPCENTRE_BUNDLE_MODIFY": [
                    "ROLE_HELPCHAPTER_MODIFY",
                    "ROLE_HELPTOPIC_MODIFY"
                ],
                "ROLE_USER_BUNDLE_VIEW": [
                    "ROLE_USER_VIEW",
                    "ROLE_USERGROUP_VIEW",
                    "ROLE_USER_BUNDLE_MENU"
                ],
                "ROLE_USER_BUNDLE_MODIFY": [
                    "ROLE_USER_MODIFY",
                    "ROLE_USERGROUP_MODIFY"
                ],
                "ROLE_FORM_BUNDLE_VIEW": [
                    "ROLE_FIELD_VIEW",
                    "ROLE_FIELDGROUP_VIEW",
                    "ROLE_FIELDOPTION_VIEW",
                    "ROLE_FIELDOPTIONGROUP_VIEW",
                    "ROLE_FIELDOPTIONGROUPSET_VIEW",
                    "ROLE_RELATIONALFILTER_VIEW",
                    "ROLE_ARITHMETICFILTER_VIEW",
                    "ROLE_FRIENDLYREPORT_VIEW",
                    "ROLE_FORM_VIEW",
                    "ROLE_FORM_BUNDLE_MENU"
                ],
                "ROLE_FORM_BUNDLE_MODIFY": [
                    "ROLE_FIELD_MODIFY",
                    "ROLE_FIELDGROUP_MODIFY",
                    "ROLE_FIELDOPTION_MODIFY",
                    "ROLE_FIELDOPTIONGROUP_MODIFY",
                    "ROLE_FIELDOPTIONGROUPSET_MODIFY",
                    "ROLE_RELATIONALFILTER_MODIFY",
                    "ROLE_ARITHMETICFILTER_MODIFY",
                    "ROLE_FRIENDLYREPORT_MODIFY",
                    "ROLE_FORM_MODIFY"
                ],
                "ROLE_RESOURCETABLE_BUNDLE_VIEW": [
                    "ROLE_RESOURCETABLE_VIEW"
                ],
                "ROLE_RESOURCETABLE_BUNDLE_MODIFY": [
                    "ROLE_RESOURCETABLE_MODIFY"
                ],
                "ROLE_TARGET_BUNDLE_VIEW": [
                    "ROLE_TARGET_VIEW",
                    "ROLE_TARGET_BUNDLE_MENU"
                ],
                "ROLE_TARGET_BUNDLE_MODIFY": [
                    "ROLE_TARGET_MODIFY"
                ],
                "ROLE_ORGANISATIONUNIT_BUNDLE_VIEW": [
                    "ROLE_ORGANISATIONUNIT_VIEW",
                    "ROLE_ORGANISATIONUNITGROUP_VIEW",
                    "ROLE_ORGANISATIONUNITGROUPSET_VIEW",
                    "ROLE_ORGANISATIONUNITLEVEL_VIEW",
                    "ROLE_ORGANISATIONUNITSTRUCTURE_VIEW",
                    "ROLE_ORGANISATIONUNIT_BUNDLE_MENU"
                ],
                "ROLE_ORGANISATIONUNIT_BUNDLE_MODIFY": [
                    "ROLE_ORGANISATIONUNIT_MODIFY",
                    "ROLE_ORGANISATIONUNITGROUP_MODIFY",
                    "ROLE_ORGANISATIONUNITGROUPSET_MODIFY",
                    "ROLE_ORGANISATIONUNITLEVEL_MODIFY",
                    "ROLE_ORGANISATIONUNITSTRUCTURE_MODIFY"
                ],
                "ROLE_DATAQUALITY_BUNDLE_VIEW": [
                    "ROLE_VALIDATION_VIEW",
                    "ROLE_DATAQUALITY_BUNDLE_MENU"
                ],
                "ROLE_DATAQUALITY_BUNDLE_MODIFY": [
                    "ROLE_VALIDATION_MODIFY"
                ],
                "ROLE_INTERGRATION_BUNDLE_VIEW": [
                    "ROLE_DHISDATACONNECTION_VIEW",
                    "ROLE_INTERGRATION_BUNDLE_MENU"
                ],
                "ROLE_INTERGRATION_BUNDLE_MODIFY": [
                    "ROLE_DHISDATACONNECTION_MODIFY",
                    "ROLE_DHISDATACONNECTION_SHOWMAPPING",
                    "ROLE_DHISDATACONNECTION_UPDATERELATION",
                    "ROLE_DHISDATACONNECTION_SYNCDATA"
                ],
                "ROLE_RECORDS_BUNDLE_VIEW": [
                    "ROLE_RECORD_VIEW",
                    "ROLE_RECORDHISTORY_VIEW",
                    "ROLE_RECORDTRAINING_VIEW",
                    "ROLE_RECORDVALIDATION_VIEW",
                    "ROLE_RECORDS_BUNDLE_MENU"
                ],
                "ROLE_RECORDS_BUNDLE_MODIFY": [
                    "ROLE_RECORDVALIDATION_VIEW",
                    "ROLE_RECORD_MODIFY",
                    "ROLE_RECORDHISTORY_MODIFY",
                    "ROLE_RECORDTRAINING_MODIFY",
                    "ROLE_RECORDVALIDATION_MODIFY"
                ],
                "ROLE_REPORTS_BUNDLE_VIEW": [
                    "ROLE_REPORTSHARING_VIEW",
                    "ROLE_REPORTRECORDS_VIEW",
                    "ROLE_REPORTFRIENDLYREPORT_VIEW",
                    "ROLE_REPORTHISTORY_VIEW",
                    "ROLE_REPORTORGANISATIONUNITGROUPSET_VIEW",
                    "ROLE_REPORTORGANISATIONUNITLEVELS_VIEW",
                    "ROLE_REPORTORGANISATIONUNITCOMPLETENESS_VIEW",
                    "ROLE_REPORTS_BUNDLE_MENU"
                ],
                "ROLE_REPORTS_BUNDLE_VIEWRECORDS": [
                    "ROLE_REPORTS_BUNDLE_VIEW",
                    "ROLE_REPORTAGGREGATION_VIEWRECORDS",
                    "ROLE_REPORTHISTORY_VIEWRECORDS",
                    "ROLE_REPORTRECORDS_DOWNLOADBYCADRE"
                ],
                "ROLE_IMPORTEXPORT_BUNDLE_VIEW": [
                    "ROLE_IMPORT_VIEW",
                    "ROLE_IMPORTHISTORY_VIEW",
                    "ROLE_EXPORT_VIEW",
                    "ROLE_EXPORTMETADATA_VIEW",
                    "ROLE_IMPORTEXPORT_BUNDLE_MENU"
                ],
                "ROLE_IMPORTEXPORT_BUNDLE_MODIFY": [
                    "ROLE_IMPORT_MODIFY",
                    "ROLE_IMPORTHISTORY_MODIFY",
                    "ROLE_EXPORT_MODIFY",
                    "ROLE_EXPORTMETADATA_MODIFY"
                ],
                "ROLE_DASHBOARD_BUNDLE_VIEW": [
                    "ROLE_SETTINGS_VIEW",
                    "ROLE_DASHBOARD_VIEW"
                ],
                "ROLE_DASHBOARD_BUNDLE_MODIFY": [
                    "ROLE_SETTINGS_MODIFY",
                    "ROLE_DASHBOARD_MODIFY"
                ],
                "ROLE_MESSAGE_BUNDLE_VIEW": [
                    "ROLE_MESSAGE_VIEW"
                ],
                "ROLE_MESSAGE_BUNDLE_MODIFY": [
                    "ROLE_MESSAGE_MODIFY"
                ],
                "ROLE_DATA_MANAGER": [
                    "ROLE_RECORDS_BUNDLE_MODIFY",
                    "ROLE_REPORTS_BUNDLE_VIEWRECORDS",
                    "ROLE_IMPORTEXPORT_BUNDLE_MODIFY",
                    "ROLE_USERPROFILE_MODIFY",
                    "ROLE_DASHBOARD_BUNDLE_MODIFY",
                    "ROLE_MESSAGE_BUNDLE_MODIFY",
                    "ROLE_USER_CHANGEPASSWORD"
                ],
                "ROLE_SUPER_USER": [
                    "SUPER_USER",
                    "ROLE_USER",
                    "ROLE_ADMIN",
                    "ROLE_DATA_MANAGER",
                    "ROLE_ALLOWED_TO_SWITCH"
                ],
                "ROLE_TRAINING_BUNDLE_VIEW": [
                    "TRAINING_BUNDLE_VIEW",
                    "ROLE_MESSAGE_MODIFY"
                ],
                "ROLE_TRAINING_BUNDLE_MODFIY": [
                    "TRAINING_BUNDLE_MODFIY",
                    "ROLE_MESSAGE_MODIFY"
                ],
                "ROLE_UNIT_MODIFY": [
                    "ROLE_UNIT_CREATE",
                    "ROLE_UNIT_UPDATE",
                    "ROLE_UNIT_DELETE"
                ],
                "ROLE_SECTION_MODIFY": [
                    "ROLE_SECTION_CREATE",
                    "ROLE_SECTION_UPDATE",
                    "ROLE_SECTION_DELETE"
                ],
                "ROLE_CURRICULUM_MODIFY": [
                    "ROLE_CURRICULUM_CREATE",
                    "ROLE_CURRICULUM_UPDATE",
                    "ROLE_CURRICULUM_DELETE"
                ],
                "ROLE_METHOD_MODIFY": [
                    "ROLE_METHOD_CREATE",
                    "ROLE_METHOD_UPDATE",
                    "ROLE_METHOD_DELETE"
                ],
                "ROLE_VENUE_MODIFY": [
                    "ROLE_VENUE_CREATE",
                    "ROLE_VENUE_UPDATE",
                    "ROLE_VENUE_DELETE"
                ],
                "ROLE_SPONSOR_MODIFY": [
                    "ROLE_SPONSOR_CREATE",
                    "ROLE_SPONSOR_UPDATE",
                    "ROLE_SPONSOR_DELETE"
                ],
                "ROLE_TRAINER_MODIFY": [
                    "ROLE_TRAINER_CREATE",
                    "ROLE_TRAINER_UPDATE",
                    "ROLE_TRAINER_DELETE"
                ],
                "ROLE_SESSION_MODIFY": [
                    "ROLE_SESSION_CREATE",
                    "ROLE_SESSION_UPDATE",
                    "ROLE_SESSION_DELETE"
                ],
                "ROLE_PARTICIPANT_MODIFY": [
                    "ROLE_PARTICIPANT_CREATE",
                    "ROLE_PARTICIPANT_UPDATE",
                    "ROLE_PARTICIPANT_DELETE"
                ],
                "ROLE_TRAINING_BUNDLE_SETTING": [
                    "TRAINING_BUNDLE_SETTING",
                    "ROLE_UNIT_VIEW",
                    "ROLE_UNIT_MODIFY",
                    "ROLE_SECTION_VIEW",
                    "ROLE_SECTION_MODIFY",
                    "ROLE_CURRICULUM_VIEW",
                    "ROLE_CURRICULUM_MODIFY",
                    "ROLE_METHOD_VIEW",
                    "ROLE_METHOD_MODIFY",
                    "ROLE_VENUE_VIEW",
                    "ROLE_VENUE_MODIFY",
                    "ROLE_SPONSOR_VIEW",
                    "ROLE_SPONSOR_MODIFY",
                    "ROLE_TRAINER_VIEW",
                    "ROLE_TRAINER_MODIFY",
                    "ROLE_PARTICIPANT_VIEW",
                    "ROLE_PARTICIPANT_MODIFY"
                ],
                "ROLE_TRAINING_BUNDLE_REPORT": [
                    "TRAINING_BUNDLE_REPORT",
                    "ROLE_TRAINING_REPORT_VIEW"
                ],
                "ROLE_TRAINING_BUNDLE_SESSION": [
                    "TRAINING_BUNDLE_SESSION",
                    "ROLE_SESSION_VIEW",
                    "ROLE_SESSION_MODIFY"
                ]
            }
            let authorities = [];
            Object.keys(previousRoles).forEach((key) => {
                console.log(previousRoles[key]);
                if (Array.isArray(previousRoles[key])){
                    authorities = authorities.concat(previousRoles[key].filter((role) => authorities.indexOf(role.replace('ROLE_', '')) === -1).map((role) => role.replace('ROLE_', '')));
                } else if (authorities.indexOf(previousRoles[key].replace('ROLE_', '')) === -1){
                    authorities.push(previousRoles[key].replace('ROLE_', ''));
                }
            })
            await queryRunner.query(`INSERT INTO userauthority(
	created, lastupdated, id, uid, name)
	VALUES (` + authorities.map((auth, index) => `now(), now(), ${index + 1}, uid(), '${auth}'`).join('),(') + ') ON CONFLICT DO NOTHING;');
            const useroles = await queryRunner.manager.query(
                "SELECT * FROM userrole",
            );

            await queryRunner.query(`CREATE TABLE userauthoritymembers
                    (
                        "userauthorityId" integer NOT NULL,
                        "userroleId" integer NOT NULL,
                        CONSTRAINT "PK_756e47136e4a6023bef85742272" PRIMARY KEY ("userauthorityId", "userroleId"),
                        CONSTRAINT "FK_0f440c00688aa6615dc24e4247d" FOREIGN KEY ("userauthorityId")
                            REFERENCES userauthority (id) MATCH SIMPLE
                            ON UPDATE NO ACTION
                            ON DELETE CASCADE,
                        CONSTRAINT "FK_76bc448ca476788f7886a7569b7" FOREIGN KEY ("userroleId")
                            REFERENCES userrole (id) MATCH SIMPLE
                            ON UPDATE NO ACTION
                            ON DELETE CASCADE
                    )`);
            for (let userole of useroles) {
                let auths = [];
                userole.roles.split(';').forEach((artifacts) => {
                    let authorities = artifacts.split(':');
                    if (authorities[0] === 's') {
                        auths.push(authorities[2].replace('ROLE_', ''))
                    }
                })
                if (auths.length > 0){
                    console.log(auths);
                    await queryRunner.query(`INSERT INTO userauthoritymembers(
	"userroleId","userauthorityId")
	VALUES (` + auths.map((auth) => `${userole.id}, (SELECT id FROM userauthority WHERE name='${auth.split('"').join('')}')`).join('),(') + ')');
                }                
            }
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
