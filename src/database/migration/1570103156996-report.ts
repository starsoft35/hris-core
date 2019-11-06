import {MigrationInterface, QueryRunner} from "typeorm";

export class report1570103156996 implements MigrationInterface {

    
    public async up(queryRunner: QueryRunner): Promise<any> {
        let Report = await queryRunner.getTable('hris_report');

    if (Report){
        await queryRunner.query('ALTER TABLE "hris_report" RENAME TO "report"');
        await queryRunner.query('ALTER TABLE "report" RENAME COLUMN "id" TO "reportid"');
        await queryRunner.query('ALTER TABLE "report" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "parameters" text');        
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "createdby" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "uri" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "userid" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "description" text');

    }

    let reportTable = `CREATE TABLE public.reporttable
    (
        created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
        lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
        reporttableid integer NOT NULL DEFAULT nextval('reporttable_id_seq'::regclass),
        uid character varying(256) COLLATE pg_catalog."default" NOT NULL,
        code character varying(25) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
        name character varying(256) COLLATE pg_catalog."default" NOT NULL,
        description text COLLATE pg_catalog."default",
        lastupdatedby character varying COLLATE pg_catalog."default",
        publicaccess character varying(8) COLLATE pg_catalog."default",
        externalaccess boolean,
        measurecriteria character varying(255) COLLATE pg_catalog."default",
        regression boolean,
        cumulative boolean,
        sortorder integer,
        toplimit integer,
        rowtotals boolean,
        coltotals boolean,
        rowsubtotals boolean,
        colsubtotals boolean,
        hideemptyrows boolean,
        hideemptycolumns boolean,
        aggregationtype character varying(40) COLLATE pg_catalog."default",
        completedonly boolean,
        title character varying(255) COLLATE pg_catalog."default",
        subtitle character varying(255) COLLATE pg_catalog."default",
        hidetitle boolean,
        hidesubtitle boolean,
        digitgroupseparator character varying(40) COLLATE pg_catalog."default",
        displaydensity character varying(40) COLLATE pg_catalog."default",
        fontsize character varying(40) COLLATE pg_catalog."default",
        legenddisplaystyle character varying(40) COLLATE pg_catalog."default",
        legenddisplaystrategy character varying(40) COLLATE pg_catalog."default",
        numbertype character varying(40) COLLATE pg_catalog."default",
        showhierarchy boolean,
        showdimensionlabels boolean,
        skiprounding boolean,
        userid character varying(256) COLLATE pg_catalog."default",
        CONSTRAINT "PK_9d0758db50c75aa64a192e728bd" PRIMARY KEY (reporttableid),
        CONSTRAINT "FK_6ca5710b2f45272a4910c3c07a7" FOREIGN KEY (userid)
            REFERENCES public."user" (userid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    `
    await queryRunner.query(reportTable);

    let reportTableDimension = `CREATE TABLE public.reporttabledimension
    (
        reporttabledimensionid integer NOT NULL DEFAULT nextval('reporttabledimension_id_seq'::regclass),
        dimension character varying COLLATE pg_catalog."default" NOT NULL,
        layout character varying COLLATE pg_catalog."default" NOT NULL,
        reporttableid character varying(256) COLLATE pg_catalog."default",
        CONSTRAINT "PK_6b3166eb8a57015536612791c5a" PRIMARY KEY (id),
        CONSTRAINT "FK_9bf7bec5a45bea20166b484f492" FOREIGN KEY (reporttableid)
            REFERENCES public.reporttable (reporttableid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    `

    await queryRunner.query(reportTableDimension);

    let reportTableDimensionItem = `CREATE TABLE public.reporttabledimensionitem
    (
        reporttabledimensionitemid integer NOT NULL DEFAULT nextval('reporttabledimensionitem_id_seq'::regclass),
        dimensionitem character varying(11) COLLATE pg_catalog."default" NOT NULL,
        dimensionitemtype character varying(50) COLLATE pg_catalog."default" NOT NULL,
        reporttabledimensionid integer,
        CONSTRAINT "PK_98a1f18782b4a37389c331b652f" PRIMARY KEY (id),
        CONSTRAINT "FK_b4e84cffb16b751af912cefdbdd" FOREIGN KEY (reporttabledimensionid)
            REFERENCES public.reporttabledimension (reporttabledimensionid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;`

    await queryRunner.query(reportTableDimensionItem);
}
public async down(queryRunner: QueryRunner): Promise<any> {

}


}

