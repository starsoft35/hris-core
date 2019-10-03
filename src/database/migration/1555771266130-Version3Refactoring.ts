import { MigrationInterface, QueryRunner } from "typeorm";

export class Version3Refactoring1555771266128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        //await queryRunner.query('ALTER TABLE hris_user" RENAME TO user');
        let helpTable = await queryRunner.getTable('hris_help_topic');

        if (helpTable) {
            await queryRunner.query('DROP TABLE IF EXISTS "hris_help_topic_chapters"');
            await queryRunner.query('DROP TABLE IF EXISTS "hris_help_topic"');
            await queryRunner.query('DROP TABLE IF EXISTS "hris_help_chapter"');
            await queryRunner.query('DROP TABLE IF EXISTS "ext_log_entries"');
            await queryRunner.query('DROP TABLE IF EXISTS "ext_translations"');
            await queryRunner.query('DROP TABLE IF EXISTS "_resource_all_fields"');
            await queryRunner.query('DROP TABLE IF EXISTS "_resource_compulsory_fields"');
            await queryRunner.query('DROP TABLE IF EXISTS "_temp"');
            await queryRunner.query('DROP TABLE IF EXISTS "education"');
            await queryRunner.query('DROP TABLE IF EXISTS "hris_importexport_history"');
            await queryRunner.query('DROP TABLE IF EXISTS "hris_resourcetable_fieldmembers"');
            await queryRunner.query('DROP TABLE IF EXISTS "hris_resourcetable"');
            await queryRunner.query('DROP TABLE IF EXISTS "hris_participants"');

            await queryRunner.query('DROP TABLE IF EXISTS "hris_organisationunitstructure"');
            await queryRunner.query('DROP TABLE IF EXISTS "mnh_staff"');
            await queryRunner.query('DROP TABLE IF EXISTS "_resource_all_fields_temporary"');
            await queryRunner.query('DROP TABLE IF EXISTS "_resource_all_fields_temporary"');

            await queryRunner.query('ALTER TABLE "sqlview" RENAME COLUMN id TO "sqlviewid"');
            await queryRunner.query('ALTER TABLE "sqlview" RENAME COLUMN "datecreated" TO "created"');
            await queryRunner.query('ALTER TABLE "sqlview" ADD COLUMN "createdbyid" INTEGER');
            await queryRunner.query('ALTER TABLE "sqlview" ADD CONSTRAINT "fk_sql_view_createdby" FOREIGN KEY("createdbyid") REFERENCES "user"');
            await queryRunner.query('ALTER TABLE "sqlview" ADD COLUMN "lastupdatedbyid" INTEGER');
            await queryRunner.query('ALTER TABLE "sqlview" ADD CONSTRAINT "fk_sql_view_lastupdatedby" FOREIGN KEY("lastupdatedbyid") REFERENCES "user"');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
