import { MigrationInterface, QueryRunner } from 'typeorm';

export class indicatortargets1570135814729 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let Indicator = await queryRunner.getTable(
      'hris_indicator_targetfieldoption',
    );

    if (Indicator) {
      await queryRunner.query(
        'ALTER TABLE "hris_indicator_target" RENAME TO "indicatortarget"',
      );
      await queryRunner.query(
        'ALTER TABLE "indicatortarget" RENAME COLUMN "organisationunitgroup_id" TO "organisationunitgroupid"',
      );
      await queryRunner.query(
        'ALTER TABLE "indicatortarget" RENAME COLUMN "datecreated" TO "created"',
      );
      await queryRunner.query(
        'ALTER TABLE "indicatortarget" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone',
      );
      await queryRunner.query(
        'ALTER TABLE "indicatortarget" ADD COLUMN IF NOT EXISTS "name" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "indicatortarget" ADD COLUMN IF NOT EXISTS "uid" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "indicatortarget" ADD COLUMN IF NOT EXISTS "description" text',
      );
      await queryRunner.query(
        'ALTER TABLE "indicatortarget" ADD COLUMN IF NOT EXISTS "operator" text',
      );

      await queryRunner.query(
        'ALTER TABLE "hris_indicator_targetfieldoption" RENAME TO "indicatortargetfieldoption"',
      );
      await queryRunner.query(
        'ALTER TABLE "indicatortargetfieldoption" RENAME COLUMN "target_id" TO "targetid"',
      );
      await queryRunner.query(
        'ALTER TABLE "indicatortargetfieldoption" RENAME COLUMN "fieldoption_id" TO "fieldoptionid"',
      );
      await queryRunner.query(
        'ALTER TABLE "indicatortargetfieldoption" ADD COLUMN IF NOT EXISTS "value" integer',
      );
      await queryRunner.query(
        'ALTER TABLE "indicatortargetfieldoption" ADD COLUMN IF NOT EXISTS "maxvalue" integer',
      );
    }

    let createQuery =
      'CREATE TABLE indicator' +
      '(id integer NOT NULL,uid character varying(20) COLLATE pg_catalog."default",' +
      'code character varying(50) COLLATE pg_catalog."default",created timestamp without time zone,' +
      'lastupdated timestamp without time zone,name character varying(230) COLLATE pg_catalog."default" NOT NULL,' +
      'shortname character varying(255) COLLATE pg_catalog."default",description text COLLATE pg_catalog."default",' +
      'formid integer, expression text COLLATE pg_catalog."default",filter text COLLATE pg_catalog."default",' +
      'aggregationtype character varying(40) COLLATE pg_catalog."default",lastupdatedby integer,' +
      'analyticstype character varying(15) COLLATE pg_catalog."default" NOT NULL,CONSTRAINT indicator_pkey PRIMARY KEY(id),' +
      'CONSTRAINT fk_indicator_form FOREIGN KEY(formid) REFERENCES public.form(id) MATCH SIMPLE ' +
      'ON UPDATE NO ACTION ON DELETE NO ACTION)';
    await queryRunner.query(createQuery);
    await queryRunner.query(
      'INSERT INTO indicator(id, uid, created, lastupdated, name, shortname, description, formid, expression, filter, aggregationtype, analyticstype)' +
        "VALUES((SELECT COUNT(*) + 1 FROM indicator), uid(), now(), now(), 'Forecast Retirement', 'Forecast Retirement', 'Calculates the retirement', 5, 'COUNT(*)'," +
        "'${start_of_reporting_period}', 'SUM', 'RECORDS');",
    );
    await queryRunner.query(
      'INSERT INTO indicator(id, uid, created, lastupdated, name, shortname, description, formid, expression, filter, aggregationtype, analyticstype)' +
        "VALUES ((SELECT COUNT(*) + 1 FROM indicator), uid(), now(), now(), 'Number of Employees', 'Number of Employees', 'Calculates the number of Employees', 5, 'COUNT(*)'," +
        "'','SUM', 'RECORDS');",
    );

    let indicatorgroup = `
    
    CREATE TABLE public.indicatorgroup
(
    programindicatorgroupid integer NOT NULL,
    uid character varying(11) COLLATE pg_catalog."default" NOT NULL,
    code character varying(50) COLLATE pg_catalog."default",
    created timestamp without time zone NOT NULL,
    lastupdated timestamp without time zone NOT NULL,
    name character varying(230) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    CONSTRAINT "PK_8f12854ad59138fa04bc24a4d68" PRIMARY KEY (programindicatorgroupid),
    CONSTRAINT "UQ_067671025f330d102e996895c0d" UNIQUE (code)
,
    CONSTRAINT "UQ_1433e2b4f1d5a9fbad224151075" UNIQUE (uid)
,
    CONSTRAINT "UQ_6fcb816f39b2532f81e1482ab8d" UNIQUE (name)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.indicatorgroup
    OWNER to postgres;

-- Index: uk_2p9x16ryxtek0g6bqwd49et0c

-- DROP INDEX public.uk_2p9x16ryxtek0g6bqwd49et0c;

CREATE UNIQUE INDEX uk_2p9x16ryxtek0g6bqwd49et0c
    ON public.indicatorgroup USING btree
    (uid COLLATE pg_catalog."default")
    TABLESPACE pg_default;

-- Index: uk_7carnwjb5dtsk6i5dn43wy9ck

-- DROP INDEX public.uk_7carnwjb5dtsk6i5dn43wy9ck;

CREATE UNIQUE INDEX uk_7carnwjb5dtsk6i5dn43wy9ck
    ON public.indicatorgroup USING btree
    (name COLLATE pg_catalog."default")
    TABLESPACE pg_default;

-- Index: uk_f7wfef3jx1yl73stqs7b45ewb

-- DROP INDEX public.uk_f7wfef3jx1yl73stqs7b45ewb;

CREATE UNIQUE INDEX uk_f7wfef3jx1yl73stqs7b45ewb
    ON public.indicatorgroup USING btree
    (code COLLATE pg_catalog."default")
    TABLESPACE pg_default;`;

    await queryRunner.query(indicatorgroup);

    let indicatorGroupMembers = `CREATE TABLE public.indicatorgroupmembers
    (
        "indicatorgroupProgramindicatorgroupid" integer NOT NULL,
        "indicatorProgramindicatorid" integer NOT NULL,
        CONSTRAINT "PK_20eb8f32766ecf48a396f317258" PRIMARY KEY ("indicatorgroupProgramindicatorgroupid", "indicatorProgramindicatorid"),
        CONSTRAINT "FK_09f7942b622d9d952d7730db60c" FOREIGN KEY ("indicatorgroupProgramindicatorgroupid")
            REFERENCES public.indicatorgroup (programindicatorgroupid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE CASCADE
            NOT VALID,
        CONSTRAINT "FK_6a278bd2f0f26c9cc7ca45833f5" FOREIGN KEY ("indicatorProgramindicatorid")
            REFERENCES public.indicator (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE CASCADE
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    
    ALTER TABLE public.indicatorgroupmembers
        OWNER to postgres;
    
    -- Index: IDX_09f7942b622d9d952d7730db60
    
    -- DROP INDEX public."IDX_09f7942b622d9d952d7730db60";
    
    CREATE INDEX "IDX_09f7942b622d9d952d7730db60"
        ON public.indicatorgroupmembers USING btree
        ("indicatorgroupProgramindicatorgroupid")
        TABLESPACE pg_default;
    
    -- Index: IDX_6a278bd2f0f26c9cc7ca45833f
    
    -- DROP INDEX public."IDX_6a278bd2f0f26c9cc7ca45833f";
    
    CREATE INDEX "IDX_6a278bd2f0f26c9cc7ca45833f"
        ON public.indicatorgroupmembers USING btree
        ("indicatorProgramindicatorid")
        TABLESPACE pg_default;`;

    await queryRunner.query(indicatorGroupMembers);
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
