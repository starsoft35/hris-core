import { MigrationInterface, QueryRunner } from 'typeorm';

export class training1570105584725 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let Training = await queryRunner.getTable('hris_training_curriculums');

    if (Training) {
      await queryRunner.query(
        'ALTER TABLE "hris_training_curriculums" RENAME TO "trainingcurriculum"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" RENAME COLUMN "section_id" TO "sectionid"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" RENAME COLUMN "unit_id" TO "unitid"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" RENAME COLUMN "datecreated" TO "created"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" RENAME COLUMN "all_methods_selected" TO "allmethodsselected"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "name" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "uid" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "externalaccess" boolean',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "code" character varying(25)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "description" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "allmethodsselected" boolean',
      );

      await queryRunner.query(
        'ALTER TABLE "hris_training_methods" RENAME TO "trainingmethod"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingmethod" RENAME COLUMN "datecreated" TO "created"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "name" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "uid" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "externalaccess" boolean',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "code" character varying(25)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "description" text',
      );

      await queryRunner.query(
        'ALTER TABLE "hris_training_sections" RENAME TO "trainingsections"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsections" RENAME COLUMN "datecreated" TO "created"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "name" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "uid" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "externalaccess" boolean',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "code" character varying(25)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "description" text',
      );

      await queryRunner.query(
        'ALTER TABLE "hris_training_sponsors" RENAME TO "trainingsponsor"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" RENAME COLUMN "datecreated" TO "created"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "sponsorname" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "uid" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "email" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "phone" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "name" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "box" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "description" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "externalaccess" boolean',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "code" character varying(25)',
      );

      await queryRunner.query(
        'ALTER TABLE "hris_trainers" RENAME TO "trainingtrainer"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" RENAME COLUMN "datecreated" TO "created"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "firstname" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "uid" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "middlename" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "lastname" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "primaryjobresponsibility" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "secondaryjobresponsibility" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "profession" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "currentjobtitle" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "placeofwork" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "organisationtype" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "trainertype" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "traineraffiliation" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "experience" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "highestlevelofqualification" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "trainerlanguage" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "description" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "externalaccess" boolean',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "code" character varying(25)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "name" character varying(256)',
      );

      await queryRunner.query(
        'ALTER TABLE "hris_training_units" RENAME TO "trainingunit"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingunit" RENAME COLUMN "section_id" TO "sectionid"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingunit" RENAME COLUMN "datecreated" TO "created"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "name" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "uid" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "description" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "externalaccess" boolean',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "code" character varying(25)',
      );

      await queryRunner.query(
        'ALTER TABLE "hris_training_venues" RENAME TO "trainingvenue"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" RENAME COLUMN "datecreated" TO "created"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "name" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "uid" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "venuename" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "region" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "district" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "description" text',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "externalaccess" boolean',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "code" character varying(25)',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "organisationunitid" integer',
      );

      await queryRunner.query(
        'ALTER TABLE "hris_curriculum_methods_members" RENAME TO "trainingcurriculummethodmember"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculummethodmember" RENAME COLUMN "curriculum_id" TO "trainingcurriculumid"',
      );
      await queryRunner.query(
        'ALTER TABLE "trainingcurriculummethodmember" RENAME COLUMN "method_id" TO "trainingmethodId"',
      );

      await queryRunner.query(
        'ALTER TABLE "hris_traininginstance" RENAME TO "traininginstance"',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" RENAME COLUMN "section_id" TO "sectionid"',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" RENAME COLUMN "unit_id" TO "unitid"',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" RENAME COLUMN "curriculum_id" TO "curriculumid"',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" RENAME COLUMN "training_id" TO "trainingid"',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" RENAME COLUMN "datecreated" TO "created"',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "name" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "uid" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "venuename" text',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "region" text',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "district" text',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "venue" text',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "sponsor" text',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "organiser" text',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "createdby" text',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "startdate" timestamp without time zone',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "enddate" timestamp without time zone',
      );

      await queryRunner.query(
        'ALTER TABLE "hris_traininginstance_methods" RENAME TO "traininginstancemethods"',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstancemethods" RENAME COLUMN "traininginstance_id" TO "traininginstanceid"',
      );
      await queryRunner.query(
        'ALTER TABLE "traininginstancemethods" RENAME COLUMN "method_id" TO "methodid"',
      );

      await queryRunner.query(
        'ALTER TABLE "hris_trainings" RENAME TO "training"',
      );
      await queryRunner.query(
        'ALTER TABLE "training" RENAME COLUMN "datecreated" TO "created"',
      );
      await queryRunner.query(
        'ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone',
      );
      await queryRunner.query(
        'ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "uid" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "coursename" text',
      );
      await queryRunner.query(
        'ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "traininginstruction" text',
      );
      await queryRunner.query(
        'ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "trainingcategory" text',
      );
      await queryRunner.query(
        'ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "curiculum" text',
      );
    }

    let trainingSession = `

CREATE TABLE public.trainingsession
(
    created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
    lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
    id integer NOT NULL,
    uid character varying(13) COLLATE pg_catalog."default" NOT NULL,
    venue character varying(100) COLLATE pg_catalog."default",
    startdate timestamp without time zone,
    enddate timestamp without time zone,
    createdby character varying(100) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    trainingid integer,
    deliverymode character varying(20) COLLATE pg_catalog."default",
    name character varying(256) COLLATE pg_catalog."default",
    venuename text COLLATE pg_catalog."default",
    sectionid integer,
    region integer,
    district integer,
    sponsor integer,
    unitid integer,
    curriculumid integer,
    organiser integer,
    CONSTRAINT "PK_423a0626bc00cef44ca00be3be2" PRIMARY KEY (id),
    CONSTRAINT "FK_0d6bd3f9ab70340fc09e50ba659" FOREIGN KEY (district)
        REFERENCES public.organisationunit (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT "FK_14772fcc31e449bcfecb5be0d0e" FOREIGN KEY (curriculumid)
        REFERENCES public.trainingcurriculum (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT "FK_30778db1b27df56675edf72f9ad" FOREIGN KEY (sectionid)
        REFERENCES public.trainingsections (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT "FK_79c5033bfe5efe8614197de0b02" FOREIGN KEY (sponsor)
        REFERENCES public.trainingsponsor (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT "FK_8545abacaa6a4941338c695a1ed" FOREIGN KEY (region)
        REFERENCES public.organisationunit (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT "FK_c0ff43b75deb28787a428c441f1" FOREIGN KEY (organiser)
        REFERENCES public.trainingsponsor (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT "FK_db3070edc959ca56cda6610ea27" FOREIGN KEY (unitid)
        REFERENCES public.trainingunit (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE public.trainingsession
    OWNER to postgres;
    `;
    await queryRunner.query(trainingSession);

    let trainingSessionMethod = `CREATE TABLE public.trainingsessionmethods
    (
        "trainingsessionId" integer NOT NULL,
        "trainingmethodId" integer NOT NULL,
        CONSTRAINT "PK_442920ec880e8618e1194c1783e" PRIMARY KEY ("trainingsessionId", "trainingmethodId"),
        CONSTRAINT "FK_69ff46ede8e95be623bb4a0fddb" FOREIGN KEY ("trainingsessionId")
            REFERENCES public.trainingsession (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE CASCADE
            NOT VALID,
        CONSTRAINT "FK_c6cf5835d03868b97d74d0ad37b" FOREIGN KEY ("trainingmethodId")
            REFERENCES public.trainingmethod (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE CASCADE
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    
    ALTER TABLE public.trainingsessionmethods
        OWNER to postgres;
    
    -- Index: IDX_69ff46ede8e95be623bb4a0fdd
    
    -- DROP INDEX public."IDX_69ff46ede8e95be623bb4a0fdd";
    
    CREATE INDEX "IDX_69ff46ede8e95be623bb4a0fdd"
        ON public.trainingsessionmethods USING btree
        ("trainingsessionId")
        TABLESPACE pg_default;
    
    -- Index: IDX_c6cf5835d03868b97d74d0ad37
    
    -- DROP INDEX public."IDX_c6cf5835d03868b97d74d0ad37";
    
    CREATE INDEX "IDX_c6cf5835d03868b97d74d0ad37"
        ON public.trainingsessionmethods USING btree
        ("trainingmethodId")
        TABLESPACE pg_default;`;

    await queryRunner.query(trainingSessionMethod);
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
