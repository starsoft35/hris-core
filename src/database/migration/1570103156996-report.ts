import {MigrationInterface, QueryRunner} from "typeorm";

export class report1570103156996 implements MigrationInterface {

    
    public async up(queryRunner: QueryRunner): Promise<any> {
        let Report = await queryRunner.getTable('hris_report');

    if (Report){
        await queryRunner.query('ALTER TABLE "hris_report" RENAME TO "report"');
        await queryRunner.query('ALTER TABLE "report" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "name" character varying(256)');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "parameters" text');        
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "createdby" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "uri" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "userid" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "code" character varying(25)');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "description" text');

    }

}
public async down(queryRunner: QueryRunner): Promise<any> {

}


}

