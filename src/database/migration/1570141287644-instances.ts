import {MigrationInterface, QueryRunner} from "typeorm";

export class instances1570141287644 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let Instance = await queryRunner.getTable('hris_instance_records');

    if (Instance){
        await queryRunner.query('ALTER TABLE "hris_instance_records" RENAME TO "sessionparticipants"');
        await queryRunner.query('ALTER TABLE "sessionparticipants" RENAME COLUMN "instance_id" TO "instanceid"');
        await queryRunner.query('ALTER TABLE "sessionparticipants" RENAME COLUMN "record_id" TO "recordid"');
        await queryRunner.query('ALTER TABLE "sessionparticipants" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
      
        await queryRunner.query('ALTER TABLE "hris_instancefacilitator" RENAME TO "instancefacilitator"');
        await queryRunner.query('ALTER TABLE "instancefacilitator" RENAME COLUMN "instance_id" TO "instanceid"');
        await queryRunner.query('ALTER TABLE "instancefacilitator" RENAME COLUMN "record_id" TO "recordid"');
        await queryRunner.query('ALTER TABLE "instancefacilitator" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "instancefacilitator" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');

        await queryRunner.query('ALTER TABLE "hris_instancetrainer" RENAME TO "instancetrainer"');
        await queryRunner.query('ALTER TABLE "instancetrainer" RENAME COLUMN "instance_id" TO "instanceid"');
        await queryRunner.query('ALTER TABLE "instancetrainer" RENAME COLUMN "trainer_id" TO "trainerid"');
        await queryRunner.query('ALTER TABLE "instancetrainer" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "instancetrainer" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');

        await queryRunner.query('ALTER TABLE "instancefacilitator" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "instancefacilitator" ADD COLUMN IF NOT EXISTS "name" character varying(256)');
        await queryRunner.query('ALTER TABLE "instancefacilitator" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');

    }
}
 

public async down(queryRunner: QueryRunner): Promise<any> {

}
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
