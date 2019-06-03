import {MigrationInterface, QueryRunner} from "typeorm";

export class UserVersion3Refactoring1555771266128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        //await queryRunner.query('ALTER TABLE hris_user" RENAME TO user');
        let userTable = await queryRunner.getTable('hris_user');

        if (userTable){
            await queryRunner.query('ALTER TABLE "hris_user" RENAME TO "user"');

            await queryRunner.query('ALTER TABLE "user" ADD COLUMN "createdbyid" INTEGER');
            await queryRunner.query('ALTER TABLE "user" ADD CONSTRAINT "fk_user_createdby" FOREIGN KEY("createdbyid") REFERENCES "user"');
            await queryRunner.query('ALTER TABLE "user" ADD COLUMN "lastupdatedbyid" INTEGER');
            await queryRunner.query('ALTER TABLE "user" ADD CONSTRAINT "fk_user_lastupdatedby" FOREIGN KEY("lastupdatedbyid") REFERENCES "user"');

            await queryRunner.query('ALTER TABLE "user" RENAME COLUMN id TO "userid"');
            await queryRunner.query('ALTER TABLE "user" RENAME COLUMN "organisationunit_id" TO "organisationunitid"');
            await queryRunner.query('ALTER TABLE "user" RENAME COLUMN "last_login" TO "lastlogin"');
            await queryRunner.query('ALTER TABLE "user" RENAME COLUMN "confirmation_token" TO "token"');
            await queryRunner.query('ALTER TABLE "user" RENAME COLUMN "datecreated" TO "created"');

            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "username_canonical"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "salt"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "password"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "locked"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "expired"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "expires_at"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "password_requested_at"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "credentials_expired"');
            await queryRunner.query('ALTER TABLE "user" DROP COLUMN "credentials_expire_at"');

            await queryRunner.query('ALTER TABLE "hris_user_group" RENAME TO "userrole"');
            await queryRunner.query('ALTER TABLE "userrole" RENAME COLUMN id TO "userroleid"');
            await queryRunner.query('ALTER TABLE "userrole" RENAME COLUMN "datecreated" TO "created"');
            await queryRunner.query('ALTER TABLE "userrole" ADD COLUMN "createdbyid" INTEGER');
            await queryRunner.query('ALTER TABLE "userrole" ADD CONSTRAINT "fk_userrole_createdby" FOREIGN KEY("createdbyid") REFERENCES "user"');
            await queryRunner.query('ALTER TABLE "userrole" ADD COLUMN "lastupdatedbyid" INTEGER');
            await queryRunner.query('ALTER TABLE "userrole" ADD CONSTRAINT "fk_userrole_lastupdatedby" FOREIGN KEY("lastupdatedbyid") REFERENCES "user"');

            await queryRunner.query('ALTER TABLE "hris_user_group_members" RENAME TO "userrolegroupmembers"');
            await queryRunner.query('ALTER TABLE "userrolegroupmembers" RENAME COLUMN group_id TO "userroleid"');
            await queryRunner.query('ALTER TABLE "userrolegroupmembers" RENAME COLUMN user_id TO "userid"');
            //await queryRunner.query('ALTER TABLE GOOD ALTER COLUMN "id" RENAME TO userid;');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
