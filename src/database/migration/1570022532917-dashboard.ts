import {MigrationInterface, QueryRunner} from "typeorm";

export class dashboard1570022532917 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let DashboardChart = await queryRunner.getTable('hris_dashboardchart');

    if (DashboardChart){
        await queryRunner.query('ALTER TABLE "hris_dashboardchart" RENAME TO "dashboardchart"');
        await queryRunner.query('ALTER TABLE "dashboardchart" RENAME COLUMN "id" TO "dashboardchartid"');
        await queryRunner.query('ALTER TABLE "dashboardchart" RENAME COLUMN "fieldone_id" TO "fieldoneid"');
        await queryRunner.query('ALTER TABLE "dashboardchart" RENAME COLUMN "fieldtwo_id" TO "fieldtwoid"');
        await queryRunner.query('ALTER TABLE "dashboardchart" RENAME COLUMN "user_id" TO "userid"');
        await queryRunner.query('ALTER TABLE "dashboardchart" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "dashboardchart" RENAME COLUMN "lastupdated" TO "updatedAt"');
        await queryRunner.query('ALTER TABLE "dashboardchart" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "dashboardchart" ADD COLUMN IF NOT EXISTS "description" text');        
        await queryRunner.query('ALTER TABLE "dashboardchart" ADD COLUMN IF NOT EXISTS "graphtype" text');
        await queryRunner.query('ALTER TABLE "dashboardchart" ADD COLUMN IF NOT EXISTS "lowerlevels" boolean');
        await queryRunner.query('ALTER TABLE "dashboardchart" ADD COLUMN IF NOT EXISTS "systemwide" boolean');
        await queryRunner.query('ALTER TABLE "dashboardchart" ADD COLUMN IF NOT EXISTS "uid" text');

        
        await queryRunner.query('ALTER TABLE "hris_dashboardchart_formmembers" RENAME TO "dashboardchartformmembers"');
        await queryRunner.query('ALTER TABLE "dashboardchartformmembers" RENAME COLUMN "dashboardchart_id" TO "dashboardchartid"');
        await queryRunner.query('ALTER TABLE "dashboardchartformmembers" RENAME COLUMN "form_id" TO "formid"');

        await queryRunner.query('ALTER TABLE "hris_dashboardchart_organisationunitmembers" RENAME TO "dashboardchartorganisationunitmembers"');
        await queryRunner.query('ALTER TABLE "dashboardchartorganisationunitmembers" RENAME COLUMN "dashboardchart_id" TO "dashboardchartid"');
        await queryRunner.query('ALTER TABLE "dashboardchartorganisationunitmembers" RENAME COLUMN "organisationunit_id" TO "organisationunitid"');


    }
}

public async down(queryRunner: QueryRunner): Promise<any> {
}

}
