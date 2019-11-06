import {MigrationInterface, QueryRunner} from "typeorm";

export class organizationunit1570013088616 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        let organizationUnit = await queryRunner.getTable('hris_organisationunit');

    if (organizationUnit){
        await queryRunner.query('ALTER TABLE "hris_organisationunit" RENAME TO "organisationunit"');
        await queryRunner.query('ALTER TABLE "organisationunit" RENAME COLUMN "id" TO "organisationunitid"');
        await queryRunner.query('ALTER TABLE "organisationunit" RENAME COLUMN "parent_id" TO "parenttid"');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "organisationunit" DROP COLUMN "description"');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "dhisuid" text');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "active" text');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "active" boolean');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "openingdate" text');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "closingdate" text');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "geocode" text');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "coordinates" text');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "featuretype" text');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "address" text');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "email" text');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "phoneinteger" text');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "contactperson" text');

        await queryRunner.query('ALTER TABLE "hris_organisationunitlevel" RENAME TO "organisationunitlevel"');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" RENAME COLUMN "id" TO "organisationunitelevelid"');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "dataentrylevel" boolean');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "level" integer');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "name" text');

        await queryRunner.query('ALTER TABLE "hris_organisationunitgroup" RENAME TO "organisationunitgroup"');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" RENAME COLUMN "id" TO "organisationunitroleid"');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" RENAME COLUMN "organisationunitgroupset_id" TO "organisationunitgroupsetid"');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "dhisuid" text');


        await queryRunner.query('ALTER TABLE "hris_organisationunitgroupset" RENAME TO "organisationunitgroupset"');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" RENAME COLUMN "id" TO "organisationunitgroupsetid"');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "compulsory" boolean');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "dhisuid" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');

        await queryRunner.query('ALTER TABLE "hris_organisationunitcompleteness" RENAME TO "organisationunitcompleteness"');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" RENAME COLUMN "organisationunit_id" TO "organisationunitid"');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" RENAME COLUMN "id" TO "organisationunitcompletenessid"');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" RENAME COLUMN "form_id" TO "formid"');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "expectation" integer');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "externalaccess" text');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "descriptionEW" text');

    
    }
}

public async down(queryRunner: QueryRunner): Promise<any> {
}

}
