import {MigrationInterface, QueryRunner} from "typeorm";

export class training1570105584725 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        let Training = await queryRunner.getTable('hris_training_curriculums');

    if (Training){
        await queryRunner.query('ALTER TABLE "hris_training_curriculums" RENAME TO "trainingcurriculum"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" RENAME COLUMN "id" TO "trainingcurriculumid"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" RENAME COLUMN "section_id" TO "sectionid"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" RENAME COLUMN "unit_id" TO "unitid"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" RENAME COLUMN "all_methods_selected" TO "allmethodsselected"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "allmethodsselected" boolean');
        
        await queryRunner.query('ALTER TABLE "hris_training_methods" RENAME TO "trainingmethod"');
        await queryRunner.query('ALTER TABLE "trainingmethod" RENAME COLUMN "id" TO "trainingmethodid"');
        await queryRunner.query('ALTER TABLE "trainingmethod" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "description" text');
       
        await queryRunner.query('ALTER TABLE "hris_training_sections" RENAME TO "trainingsections"');
        await queryRunner.query('ALTER TABLE "trainingsections" RENAME COLUMN "id" TO "trainingsectionsid"');
        await queryRunner.query('ALTER TABLE "trainingsections" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "description" text');

        await queryRunner.query('ALTER TABLE "hris_training_sponsors" RENAME TO "trainingsponsor"');
        await queryRunner.query('ALTER TABLE "trainingsponsor" RENAME COLUMN "id" TO "trainingsponsorid"');
        await queryRunner.query('ALTER TABLE "trainingsponsor" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "sponsorname" text');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "uid" text')
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "email" text');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "phone" text')
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "box" text');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "code" text');

        await queryRunner.query('ALTER TABLE "hris_trainers" RENAME TO "trainingtrainer"');
        await queryRunner.query('ALTER TABLE "trainingtrainer" RENAME COLUMN "id" TO "trainingtrainerid"');
        await queryRunner.query('ALTER TABLE "trainingtrainer" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "firstname" text');
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "uid" text')
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "middlename" text');
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "lastname" text')
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "primaryjobresponsibility" text');
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "secondaryjobresponsibility" text')
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "profession" text')
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "currentjobtitle" text');
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "placeofwork" text')
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "organisationtype" text');
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "trainertype" text')
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "traineraffiliation" text')
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "experience" text')
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "highestlevelofqualification" text')
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "trainerlanguage" text')
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "trainingtrainer" ADD COLUMN IF NOT EXISTS "name" text');

        await queryRunner.query('ALTER TABLE "hris_training_units" RENAME TO "trainingunit"');
        await queryRunner.query('ALTER TABLE "trainingunit" RENAME COLUMN "id" TO "trainingunitid"');
        await queryRunner.query('ALTER TABLE "trainingunit" RENAME COLUMN "section_id" TO "sectionid"');
        await queryRunner.query('ALTER TABLE "trainingunit" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "code" text');
        

        await queryRunner.query('ALTER TABLE "hris_training_venues" RENAME TO "trainingvenue"');
        await queryRunner.query('ALTER TABLE "trainingvenue" RENAME COLUMN "id" TO "trainingvenueid"');
        await queryRunner.query('ALTER TABLE "trainingvenue" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "venuename" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "region" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "district" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "organisationunitid" text');      

        await queryRunner.query('ALTER TABLE "hris_curriculum_methods_members" RENAME TO "trainingcurriculummethodmember"');
        await queryRunner.query('ALTER TABLE "trainingcurriculummethodmember" RENAME COLUMN "curriculum_id" TO "trainingcurriculumid"');
        await queryRunner.query('ALTER TABLE "trainingcurriculummethodmember" RENAME COLUMN "method_id" TO "trainingmethodid"');

        await queryRunner.query('ALTER TABLE "hris_traininginstance" RENAME TO "traininginstance"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "id" TO "traininginstanceid"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "section_id" TO "sectionid"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "unit_id" TO "unitid"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "curriculum_id" TO "curriculumid"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "training_id" TO "trainingid"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "venuename" text');
        await queryRunner.query('ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "region" text');
        await queryRunner.query('ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "district" text');
        await queryRunner.query('ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "venue" text');
        await queryRunner.query('ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "sponsor" text');
        await queryRunner.query('ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "organiser" text');
        await queryRunner.query('ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "createdby" text');
        await queryRunner.query('ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "startdate" timestamp without time zone');
        await queryRunner.query('ALTER TABLE "traininginstance" ADD COLUMN IF NOT EXISTS "enddate" timestamp without time zone');  

        await queryRunner.query('ALTER TABLE "hris_traininginstance_methods" RENAME TO "traininginstancemethods"');
        await queryRunner.query('ALTER TABLE "traininginstancemethods" RENAME COLUMN "traininginstance_id" TO "traininginstanceid"');
        await queryRunner.query('ALTER TABLE "traininginstancemethods" RENAME COLUMN "method_id" TO "methodid"');


        await queryRunner.query('ALTER TABLE "hris_trainings" RENAME TO "training"');
        await queryRunner.query('ALTER TABLE "training" RENAME COLUMN "id" TO "trainingid"');
        await queryRunner.query('ALTER TABLE "training" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "coursename" text');
        await queryRunner.query('ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "traininginstruction" text');
        await queryRunner.query('ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "trainingcategory" text');
        await queryRunner.query('ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "curiculum" text'); 
    }

    let trainingSessionMethod = `CREATE TABLE public.trainingsessionmethods
    (
        "trainingsessionid" character varying(256) COLLATE pg_catalog."default" NOT NULL,
        "trainingmethodid" character varying(256) COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT "PK_41abdff34305f481cf47ecbdea2" PRIMARY KEY ("trainingsessionid", "trainingmethodid"),
        CONSTRAINT "FK_af6beeda56102e75386789a2df9" FOREIGN KEY ("trainingsessionid")
            REFERENCES public.trainingsession (trainingsessionid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE CASCADE
            NOT VALID,
        CONSTRAINT "FK_b00b6a95a0aef228e3aedad74e9" FOREIGN KEY ("trainingmethodid")
            REFERENCES public.trainingmethod (trainingmethodid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE CASCADE
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    
    CREATE INDEX "IDX_af6beeda56102e75386789a2df"
        ON public.trainingsessionmethods USING btree
        ("trainingsessionUid" COLLATE pg_catalog."default")
        TABLESPACE pg_default;
            
    CREATE INDEX "IDX_b00b6a95a0aef228e3aedad74e"
        ON public.trainingsessionmethods USING btree
        ("trainingmethodUid" COLLATE pg_catalog."default")
        TABLESPACE pg_default;`

        await queryRunner.query(trainingSessionMethod);

        let trainingSession = `CREATE TABLE public.trainingsession
        (
            created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
            lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
            trainingsessionid integer NOT NULL DEFAULT nextval('trainingsession_id_seq'::regclass),
            uid character varying(256) COLLATE pg_catalog."default" NOT NULL,
            code character varying(25) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
            name character varying(256) COLLATE pg_catalog."default" NOT NULL,
            description text COLLATE pg_catalog."default",
            lastupdatedby character varying COLLATE pg_catalog."default",
            publicaccess character varying(8) COLLATE pg_catalog."default",
            externalaccess boolean,
            startdate timestamp without time zone,
            enddate timestamp without time zone,
            sectionid character varying(256) COLLATE pg_catalog."default",
            organisationunitid character varying(256) COLLATE pg_catalog."default",
            venueid character varying(256) COLLATE pg_catalog."default",
            sponsorid character varying(256) COLLATE pg_catalog."default",
            unitid character varying(256) COLLATE pg_catalog."default",
            curriculumid character varying(256) COLLATE pg_catalog."default",
            organiserid character varying(256) COLLATE pg_catalog."default",
            CONSTRAINT "PK_740a23883e56d250a5b08f7bc66" PRIMARY KEY (trainingsessionid),
            CONSTRAINT "FK_14772fcc31e449bcfecb5be0d0e" FOREIGN KEY (curriculumid)
                REFERENCES public.trainingcurriculum (trainingcurriculumid) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE CASCADE
                NOT VALID,
            CONSTRAINT "FK_30778db1b27df56675edf72f9ad" FOREIGN KEY (sectionid)
                REFERENCES public.trainingsections (uid) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE CASCADE
                NOT VALID,
            CONSTRAINT "FK_7311b5eb1d2c11ea7f331dacb84" FOREIGN KEY (organisationunitid)
                REFERENCES public.organisationunit (uid) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE CASCADE
                NOT VALID,
            CONSTRAINT "FK_76aeeee775bf56bb981764dc25e" FOREIGN KEY (organiserid)
                REFERENCES public.trainingsponsor (uid) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE CASCADE
                NOT VALID,
            CONSTRAINT "FK_83ce766a8db4f37f18da08e0db4" FOREIGN KEY (sponsorid)
                REFERENCES public.trainingsponsor (uid) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE CASCADE
                NOT VALID,
            CONSTRAINT "FK_8cc245eeb7e85c31b83bb6b3955" FOREIGN KEY (venueid)
                REFERENCES public.trainingvenue (uid) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE CASCADE
                NOT VALID,
            CONSTRAINT "FK_db3070edc959ca56cda6610ea27" FOREIGN KEY (unitid)
                REFERENCES public.trainingunit (trainingunitid) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE CASCADE
                NOT VALID
        )
        WITH (
            OIDS = FALSE
        )
        TABLESPACE pg_default;
        `
        await queryRunner.query(trainingSession);
}
public async down(queryRunner: QueryRunner): Promise<any> {

}

}
     
