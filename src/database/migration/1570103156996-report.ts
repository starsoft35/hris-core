import {MigrationInterface, QueryRunner} from "typeorm";

export class report1570103156996 implements MigrationInterface {

    
    public async up(queryRunner: QueryRunner): Promise<any> {
        let Report = await queryRunner.getTable('hris_report');

    if (Report){
        await queryRunner.query('ALTER TABLE "hris_report" RENAME TO "report"');
        await queryRunner.query('ALTER TABLE "report" RENAME COLUMN "id" TO "reportid"');
        await queryRunner.query('ALTER TABLE "report" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "report" RENAME COLUMN "lastupdated" TO "updatedAt"');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "parameters" text');        
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "createdby" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "uri" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "userid" text');
        
       

    }
}
public async down(queryRunner: QueryRunner): Promise<any> {

}


}

