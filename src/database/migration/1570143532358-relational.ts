import {MigrationInterface, QueryRunner} from "typeorm";

export class relational1570143532358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let relationalfilter = await queryRunner.getTable('hris_relationalfilter');

    if (relationalfilter){
        await queryRunner.query('ALTER TABLE "hris_relationalfilter" RENAME TO "relationalfilter"');
        await queryRunner.query('ALTER TABLE "relationalfilter" RENAME COLUMN "id" TO "relationalfilterid"');
        await queryRunner.query('ALTER TABLE "relationalfilter" RENAME COLUMN "field_id" TO "fieldid"');
        await queryRunner.query('ALTER TABLE "relationalfilter" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "relationalfilter" RENAME COLUMN "lastupdated" TO "updatedAt"');
        await queryRunner.query('ALTER TABLE "relationalfilter" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "relationalfilter" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "relationalfilter" ADD COLUMN IF NOT EXISTS "excludefieldoptions" text');   
        
        await queryRunner.query('ALTER TABLE "hris_relationalfilter_member" RENAME TO "relationalfiltermember"');
        await queryRunner.query('ALTER TABLE "relationalfiltermember" RENAME COLUMN "relationalfilter_id" TO "relationalfilterid"');
        await queryRunner.query('ALTER TABLE "relationalfiltermember" RENAME COLUMN "fieldoption_id" TO "fieldoptionid"');

    }
}
public async down(queryRunner: QueryRunner): Promise<any> {

}

}
