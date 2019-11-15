import {MigrationInterface, QueryRunner} from "typeorm";

export class organizationunit1570013088616 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        let organizationUnit = await queryRunner.getTable('hris_organisationunit');

    if (organizationUnit){
        await queryRunner.query('ALTER TABLE "hris_organisationunit" RENAME TO "organisationunit"');
        await queryRunner.query('ALTER TABLE "organisationunit" RENAME COLUMN "parent_id" TO "parentid"');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
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
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "contactperson" text');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "code" character varying(25)');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "phonenumber" text');
        await queryRunner.query('ALTER TABLE "organisationunit" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');
        await queryRunner.query('ALTER TABLE "organisationunit" RENAME COLUMN "longname" TO "name');  
        await queryRunner.query('ALTER TABLE "organisationunit" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying');
   
        await queryRunner.query('ALTER TABLE "hris_organisationunitlevel" RENAME TO "organisationunitlevel"');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "dataentrylevel" boolean');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "level" integer');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "name" character varying(256)');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "code" character varying(25)');
        await queryRunner.query('ALTER TABLE "organisationunitlevel" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying');

        await queryRunner.query('ALTER TABLE "hris_organisationunitgroup" RENAME TO "organisationunitgroup"');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" RENAME COLUMN "organisationunitgroupset_id" TO "organisationunitgroupsetid"');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "name" character varying(256)');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "code" character varying(25)');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "organisationunitgroup" ADD COLUMN IF NOT EXISTS "dhisuid" text');

        await queryRunner.query('ALTER TABLE "hris_organisationunitgroupset" RENAME TO "organisationunitgroupset"');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "compulsory" boolean');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "name" character varying(256)');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "dhisuid" text');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "code" character varying(25)');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)');
        await queryRunner.query('ALTER TABLE "organisationunitgroupset" ADD COLUMN IF NOT EXISTS "externalaccess" boolean'); 

        await queryRunner.query('ALTER TABLE "hris_organisationunitgroup_members" RENAME TO "organisationunitgroupmembers"');
        await queryRunner.query('ALTER TABLE "organisationunitgroupmembers" RENAME COLUMN "organisationunitgroup_id" TO "organisationunitgroupId"');
        await queryRunner.query('ALTER TABLE "organisationunitgroupmembers" RENAME COLUMN "organisationunit_id" TO "organisationunitId"');
    }

    let organisationunitCompleteness = await queryRunner.getTable('hris_organisationunitcompleteness');

    if (organisationunitCompleteness){
            await queryRunner.query('ALTER TABLE "hris_organisationunitcompleteness" RENAME TO "organisationunitcompleteness"');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" RENAME COLUMN "organisationunit_id" TO "organisationunitid"');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" RENAME COLUMN "form_id" TO "formid"');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" RENAME COLUMN "datecreated" TO "created"');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "expectation" integer');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "externalaccess" text');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "code" character varying(25)');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "name" character varying(256)');
            await queryRunner.query('ALTER TABLE "organisationunitcompleteness" ADD COLUMN IF NOT EXISTS "description" text');
    }

    let organisationUnitMembers = `CREATE TABLE public.organisationunitmembers
    (
        "userId" integer NOT NULL,
        "organisationunitId" integer NOT NULL,
        CONSTRAINT "PK_4c1bb7cd98866e76ec49e91a5b1" PRIMARY KEY ("userId", "organisationunitId"),
        CONSTRAINT "FK_9f8405fda0d56decd0f7e46d85d" FOREIGN KEY ("userId")
            REFERENCES public."user" (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE CASCADE
            NOT VALID,
        CONSTRAINT "FK_f54224b61c067df95828b544adb" FOREIGN KEY ("organisationunitId")
            REFERENCES public.organisationunit (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE CASCADE
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    
    ALTER TABLE public.organisationunitmembers
        OWNER to postgres;
    
    -- Index: IDX_9f8405fda0d56decd0f7e46d85
    
    -- DROP INDEX public."IDX_9f8405fda0d56decd0f7e46d85";
    
    CREATE INDEX "IDX_9f8405fda0d56decd0f7e46d85"
        ON public.organisationunitmembers USING btree
        ("userId")
        TABLESPACE pg_default;
    
    -- Index: IDX_f54224b61c067df95828b544ad
    
    -- DROP INDEX public."IDX_f54224b61c067df95828b544ad";
    
    CREATE INDEX "IDX_f54224b61c067df95828b544ad"
        ON public.organisationunitmembers USING btree
        ("organisationunitId")
        TABLESPACE pg_default;`;

        await queryRunner.query(organisationUnitMembers);
}

public async down(queryRunner: QueryRunner): Promise<any> {
}

}
