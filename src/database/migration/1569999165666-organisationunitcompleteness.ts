import {MigrationInterface, QueryRunner} from "typeorm";

export class organisationunitcompleteness1569999165666 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        let organisationunitcompletenessTable = await queryRunner.getTable('hris_organisationunitcompleteness');

        if (organisationunitcompletenessTable){
            await queryRunner.query('ALTER TABLE "hris_organisationunitcompleteness" RENAME TO " organisationunitcompleteness"');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" DROP COLUMN "lastupdatedby"');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD CONSTRAINT "organisationUnit" FOREIGN KEY("organisationunitid") REFERENCES "organisationunitcompleteness"');

            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" RENAME COLUMN id TO "organisationunitcompletenessid"');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" RENAME COLUMN "organisationunit_id" TO "organisationunitid"');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" RENAME COLUMN "datecreated" TO "created"');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" RENAME COLUMN "form_id" TO "formid"');
            // ALTER TABLE "post" ALTER COLUMN "title" RENAME TO "name";


        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }
}
