// import {MigrationInterface, QueryRunner} from "typeorm";

// export class message1570092892299 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<any> {
//     let Message = await queryRunner.getTable('hris_message_metadata');

//     if (Message){
//         await queryRunner.query('ALTER TABLE "hris_message_metadata" RENAME TO "messagemetadata"');
//         await queryRunner.query('ALTER TABLE "messagemetadata" RENAME COLUMN "message_id" TO "messageId"');
//         await queryRunner.query('ALTER TABLE "messagemetadata" RENAME COLUMN "participant_id" TO "participantId"');
//         await queryRunner.query('ALTER TABLE "messagemetadata" RENAME COLUMN "is_read" TO "isread"');
//         await queryRunner.query('ALTER TABLE "messagemetadata" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
//         await queryRunner.query('ALTER TABLE "messagemetadata" ADD COLUMN IF NOT EXISTS "code" character varying(25)');
//         await queryRunner.query('ALTER TABLE "messagemetadata" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying');
//         await queryRunner.query('ALTER TABLE "messagemetadata" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)');
//         await queryRunner.query('ALTER TABLE "messagemetadata" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
//         await queryRunner.query('ALTER TABLE "messagemetadata" ADD COLUMN IF NOT EXISTS  "created" text');
//         await queryRunner.query('ALTER TABLE "messagemetadata" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');
//         await queryRunner.query('ALTER TABLE "messagemetadata" ADD COLUMN IF NOT EXISTS "name" character varying(256)');
//         await queryRunner.query('ALTER TABLE "messagemetadata" ADD COLUMN IF NOT EXISTS "description" text');

//         await queryRunner.query('ALTER TABLE "hris_message_thread_metadata" RENAME TO "messagethreadmetadata"');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" RENAME COLUMN "thread_id" TO "threadId"');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" RENAME COLUMN "participant_id" TO "participantId"');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" RENAME COLUMN "is_deleted" TO "isdeleted"');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" RENAME COLUMN "last_participant_message_date" TO "lastparticipantmessagedate"');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" RENAME COLUMN "last_message_date" TO "lastmessagedate"');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" RENAME COLUMN "datecreated" TO "created"');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" ADD COLUMN IF NOT EXISTS "code" character varying(25)');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" ADD COLUMN IF NOT EXISTS "name" character varying(256)');
//         await queryRunner.query('ALTER TABLE "messagethreadmetadata" ADD COLUMN IF NOT EXISTS "description" text');
        
//         await queryRunner.query('ALTER TABLE "hris_message_thread" RENAME TO "messagethread"');
//         await queryRunner.query('ALTER TABLE "messagethread" RENAME COLUMN "createdby_id" TO "createdbyId"');
//         await queryRunner.query('ALTER TABLE "messagethread" RENAME COLUMN "createdat" TO "created"');
//         await queryRunner.query('ALTER TABLE "messagethread" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');
//         await queryRunner.query('ALTER TABLE "messagethread" ADD COLUMN IF NOT EXISTS "subject" text');
//         await queryRunner.query('ALTER TABLE "messagethread" ADD COLUMN IF NOT EXISTS "isspam" boolean'); 
//         await queryRunner.query('ALTER TABLE "messagethread" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
//         await queryRunner.query('ALTER TABLE "messagethread" DROP COLUMN "datecreated"'); 
//         await queryRunner.query('ALTER TABLE "messagethread" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying');
//         await queryRunner.query('ALTER TABLE "messagethread" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)');
//         await queryRunner.query('ALTER TABLE "messagethread" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
//         await queryRunner.query('ALTER TABLE "messagethread" ADD COLUMN IF NOT EXISTS "code" character varying(25)');
//         await queryRunner.query('ALTER TABLE "messagethread" ADD COLUMN IF NOT EXISTS "name" character varying(256)');
//         await queryRunner.query('ALTER TABLE "messagethread" ADD COLUMN IF NOT EXISTS "description" text');

//         await queryRunner.query('ALTER TABLE "hris_message" RENAME TO "message"');
//         await queryRunner.query('ALTER TABLE "message" RENAME COLUMN "thread_id" TO "threadId"');
//         await queryRunner.query('ALTER TABLE "message" RENAME COLUMN "user_id" TO "userId"');
//         await queryRunner.query('ALTER TABLE "message" RENAME COLUMN "created_at" TO "created"');
//         await queryRunner.query('ALTER TABLE "message" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');
//         await queryRunner.query('ALTER TABLE "message" ADD COLUMN IF NOT EXISTS "body" text');
//         await queryRunner.query('ALTER TABLE "message" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
//         await queryRunner.query('ALTER TABLE "message" DROP COLUMN "datecreated"'); 
//         await queryRunner.query('ALTER TABLE "message" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying');
//         await queryRunner.query('ALTER TABLE "message" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)');
//         await queryRunner.query('ALTER TABLE "message" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
//         await queryRunner.query('ALTER TABLE "message" ADD COLUMN IF NOT EXISTS "code" character varying(25)');
//         await queryRunner.query('ALTER TABLE "message" ADD COLUMN IF NOT EXISTS "name" character varying(256)');
//         await queryRunner.query('ALTER TABLE "message" ADD COLUMN IF NOT EXISTS "description" text');

//     }
// }
// public async down(queryRunner: QueryRunner): Promise<any> {

// }
// }
    