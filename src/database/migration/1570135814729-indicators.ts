import {MigrationInterface, QueryRunner} from "typeorm";

export class indicatortargets1570135814729 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let Indicator = await queryRunner.getTable('hris_indicator_targetfieldoption');

    if (Indicator){
        await queryRunner.query('ALTER TABLE "hris_indicator_target" RENAME TO "indicatortarget"');
        await queryRunner.query('ALTER TABLE "indicatortarget" RENAME COLUMN "id" TO "indicatortargetid"');
        await queryRunner.query('ALTER TABLE "indicatortarget" RENAME COLUMN "organisationunitgroup_id" TO "organisationunitgroupid"');
        await queryRunner.query('ALTER TABLE "indicatortarget" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "indicatortarget" RENAME COLUMN "lastupdated" TO "updatedAt"');
        await queryRunner.query('ALTER TABLE "indicatortarget" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "indicatortarget" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "indicatortarget" ADD COLUMN IF NOT EXISTS "description" text');        
        await queryRunner.query('ALTER TABLE "indicatortarget" ADD COLUMN IF NOT EXISTS "operator" text');
    
        await queryRunner.query('ALTER TABLE "hris_indicator_targetfieldoption" RENAME TO "indicatortargetfieldoption"');
        await queryRunner.query('ALTER TABLE "indicatortargetfieldoption" RENAME COLUMN "target_id" TO "targetid"');
        await queryRunner.query('ALTER TABLE "indicatortargetfieldoption" RENAME COLUMN "fieldoption_id" TO "fieldoptionid"');
        await queryRunner.query('ALTER TABLE "indicatortargetfieldoption" ADD COLUMN IF NOT EXISTS "value" integer');
        await queryRunner.query('ALTER TABLE "indicatortargetfieldoption" ADD COLUMN IF NOT EXISTS "max_value" integer');

    }
}
public async down(queryRunner: QueryRunner): Promise<any> {

}
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
