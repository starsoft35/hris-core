import {MigrationInterface, QueryRunner} from "typeorm";

export class training1570105584725 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        let Training = await queryRunner.getTable('hris_training_curriculums');

    if (Training){
        await queryRunner.query('ALTER TABLE "hris_training_curriculums" RENAME TO "trainingcurriculum"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" RENAME COLUMN "id" TO "trainingcurriculumid"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" RENAME COLUMN "section_id" TO "sectionid"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" RENAME COLUMN "unit_id" TO "unitid"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" RENAME COLUMN "lastupdated" TO "updatedAt"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" RENAME COLUMN "all_methods_selected" TO "allmethodsselected"');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "trainingcurriculum" ADD COLUMN IF NOT EXISTS "uid" text');
        
        await queryRunner.query('ALTER TABLE "hris_training_methods" RENAME TO "trainingmethod"');
        await queryRunner.query('ALTER TABLE "trainingmethod" RENAME COLUMN "id" TO "trainingmethodid"');
        await queryRunner.query('ALTER TABLE "trainingmethod" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "trainingmethod" RENAME COLUMN "lastupdated" TO "updatedAt"');
        await queryRunner.query('ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "trainingmethod" ADD COLUMN IF NOT EXISTS "uid" text');
       
        await queryRunner.query('ALTER TABLE "hris_training_sections" RENAME TO "trainingsections"');
        await queryRunner.query('ALTER TABLE "trainingsections" RENAME COLUMN "id" TO "trainingsectionsid"');
        await queryRunner.query('ALTER TABLE "trainingsections" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "trainingsections" RENAME COLUMN "lastupdated" TO "updatedAt"');
        await queryRunner.query('ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "trainingsections" ADD COLUMN IF NOT EXISTS "uid" text');

        await queryRunner.query('ALTER TABLE "hris_training_sponsors" RENAME TO "trainingsponsor"');
        await queryRunner.query('ALTER TABLE "trainingsponsor" RENAME COLUMN "id" TO "trainingsponsorid"');
        await queryRunner.query('ALTER TABLE "trainingsponsor" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "trainingsponsor" RENAME COLUMN "lastupdated" TO "updatedAt"');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "sponsorname" text');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "uid" text')
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "email" text');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "phone" text')
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "box" text')
        await queryRunner.query('ALTER TABLE "trainingsponsor" ADD COLUMN IF NOT EXISTS "description" text')

        await queryRunner.query('ALTER TABLE "hris_trainers" RENAME TO "trainingtrainer"');
        await queryRunner.query('ALTER TABLE "trainingtrainer" RENAME COLUMN "id" TO "trainingtrainerid"');
        await queryRunner.query('ALTER TABLE "trainingtrainer" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "trainingtrainer" RENAME COLUMN "lastupdated" TO "updatedAt"');
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

        await queryRunner.query('ALTER TABLE "hris_training_units" RENAME TO "trainingunit"');
        await queryRunner.query('ALTER TABLE "trainingunit" RENAME COLUMN "id" TO "trainingunitid"');
        await queryRunner.query('ALTER TABLE "trainingunit" RENAME COLUMN "section_id" TO "sectionid"');
        await queryRunner.query('ALTER TABLE "trainingunit" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "trainingunit" RENAME COLUMN "lastupdated" TO "updatedAt"');
        await queryRunner.query('ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "trainingunit" ADD COLUMN IF NOT EXISTS "uid" text');

        await queryRunner.query('ALTER TABLE "hris_training_venues" RENAME TO "trainingvenue"');
        await queryRunner.query('ALTER TABLE "trainingvenue" RENAME COLUMN "id" TO "trainingvenueid"');
        await queryRunner.query('ALTER TABLE "trainingvenue" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "trainingvenue" RENAME COLUMN "lastupdated" TO "updatedAt"');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "venuename" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "region" text');
        await queryRunner.query('ALTER TABLE "trainingvenue" ADD COLUMN IF NOT EXISTS "district" text');

        await queryRunner.query('ALTER TABLE "hris_curriculum_methods_members" RENAME TO "curriculummethodsmembers"');
        await queryRunner.query('ALTER TABLE "curriculummethodsmembers" RENAME COLUMN "curriculum_id" TO "curriculumid"');
        await queryRunner.query('ALTER TABLE "curriculummethodsmembers" RENAME COLUMN "method_id" TO "methodid"');

        await queryRunner.query('ALTER TABLE "hris_traininginstance" RENAME TO "traininginstance"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "id" TO "traininginstanceid"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "section_id" TO "sectionid"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "unit_id" TO "unitid"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "curriculum_id" TO "curriculumid"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "training_id" TO "trainingid"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "traininginstance" RENAME COLUMN "lastupdated" TO "updatedAt"');
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
        await queryRunner.query('ALTER TABLE "training" RENAME COLUMN "datecreated" TO "createdAt"');
        await queryRunner.query('ALTER TABLE "training" RENAME COLUMN "lastupdated" TO "updatedAt"');
        await queryRunner.query('ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "coursename" text');
        await queryRunner.query('ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "traininginstruction" text');
        await queryRunner.query('ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "trainingcategory" text');
        await queryRunner.query('ALTER TABLE "training" ADD COLUMN IF NOT EXISTS "curiculum" text');


 


    }
}
public async down(queryRunner: QueryRunner): Promise<any> {

}

}
     
