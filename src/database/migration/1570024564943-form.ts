import {MigrationInterface, QueryRunner} from "typeorm";

export class form1570024564943 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let form = await queryRunner.getTable('hris_form');

    if (form){
        await queryRunner.query('ALTER TABLE "hris_form" RENAME TO "form"');
        await queryRunner.query('ALTER TABLE "form" RENAME COLUMN "id" TO "formid"');
        await queryRunner.query('ALTER TABLE "form" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "form" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "form" ADD COLUMN IF NOT EXISTS "title" text');
        await queryRunner.query('ALTER TABLE "form" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "form" ADD COLUMN IF NOT EXISTS "hypertext" text'); 
        await queryRunner.query('ALTER TABLE "form" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "form" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "form" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "form" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "form" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "form" ADD COLUMN IF NOT EXISTS "code" text');
       
        await queryRunner.query('ALTER TABLE "hris_formsection_fieldmembers" RENAME TO "formsectionfieldmember"');
        await queryRunner.query('ALTER TABLE "formsectionfieldmember" RENAME COLUMN "formsection_id" TO "formsectionid"');
        await queryRunner.query('ALTER TABLE "formsectionfieldmember" RENAME COLUMN "field_id" TO "fieldid"');
        await queryRunner.query('ALTER TABLE "formsectionfieldmember" ADD COLUMN IF NOT EXISTS "sort" integer');

        await queryRunner.query('ALTER TABLE "hris_form_uniquerecordfields" RENAME TO "formuniquerecordfields"');
        await queryRunner.query('ALTER TABLE "formuniquerecordfields" RENAME COLUMN "form_id" TO "formid"');
        await queryRunner.query('ALTER TABLE "formuniquerecordfields" RENAME COLUMN "field_id" TO "fieldid"');

        await queryRunner.query('ALTER TABLE "hris_form_visiblefields" RENAME TO "formvisiblefield"');
        await queryRunner.query('ALTER TABLE "formvisiblefield" RENAME COLUMN "form_id" TO "formid"');
        await queryRunner.query('ALTER TABLE "formvisiblefield" RENAME COLUMN "field_id" TO "fieldid"');
        await queryRunner.query('ALTER TABLE "formvisiblefield" ADD COLUMN IF NOT EXISTS "sort" integer');

        await queryRunner.query('ALTER TABLE "hris_formsection" RENAME TO "formsection"');
        await queryRunner.query('ALTER TABLE "formsection" RENAME COLUMN "id" TO "formsectionid"');
        await queryRunner.query('ALTER TABLE "formsection" RENAME COLUMN "form_id" TO "formid"');
        await queryRunner.query('ALTER TABLE "formsection" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "formsection" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "formsection" ADD COLUMN IF NOT EXISTS "sort" integer');
        await queryRunner.query('ALTER TABLE "formsection" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "formsection" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "formsection" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "formsection" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "formsection" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "formsection" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "formsection" ADD COLUMN IF NOT EXISTS "description" text');

        await queryRunner.query('ALTER TABLE "hris_field_relation" RENAME TO "fieldrelation"');
        await queryRunner.query('ALTER TABLE "fieldrelation" RENAME COLUMN "parent_field" TO "parentfield"');
        await queryRunner.query('ALTER TABLE "fieldrelation" RENAME COLUMN "child_field" TO "childfield"');
        await queryRunner.query('ALTER TABLE "fieldrelation" ADD COLUMN IF NOT EXISTS "sort" integer');

        await queryRunner.query('ALTER TABLE "hris_form_fieldmembers" RENAME TO "formfieldmember"');
        await queryRunner.query('ALTER TABLE "formfieldmember" RENAME COLUMN "form_id" TO "formid"');
        await queryRunner.query('ALTER TABLE "formfieldmember" RENAME COLUMN "field_id" TO "fieldid"');
        await queryRunner.query('ALTER TABLE "formfieldmember" ADD COLUMN IF NOT EXISTS "sort" integer');

        await queryRunner.query('ALTER TABLE "hris_fieldoption" RENAME TO "fieldoption"');
        await queryRunner.query('ALTER TABLE "fieldoption" RENAME COLUMN "id" TO "fieldoptionid"');
        await queryRunner.query('ALTER TABLE "fieldoption" RENAME COLUMN "field_id" TO "fieldid"');
        await queryRunner.query('ALTER TABLE "fieldoption" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "value" text');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "sort" integer');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "hastraining" boolean');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "skipinreport" boolean');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "skipInReport" boolean');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "hasTraining" boolean');
        await queryRunner.query('ALTER TABLE "fieldoption" ADD COLUMN IF NOT EXISTS "fieldUid" text');

        await queryRunner.query('ALTER TABLE "hris_fieldoptionmerge" RENAME TO "fieldoptionmerge"');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" RENAME COLUMN "id" TO "fieldoptionmergeid"');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" RENAME COLUMN "mergedfieldoption_id" TO "mergedfieldoptionid"');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "removedfieldoptionvalue" text');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "removedfieldoptionuid" text');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "lastupdateby" text');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "removedFieldOptionValue" text');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "removedFieldOptionUid" text');
        await queryRunner.query('ALTER TABLE "fieldoptionmerge" ADD COLUMN IF NOT EXISTS "fieldUid" text');

        await queryRunner.query('ALTER TABLE "hris_fieldoptiongroupset" RENAME TO "fieldoptiongroupset"');
        await queryRunner.query('ALTER TABLE "fieldoptiongroupset" RENAME COLUMN "id" TO "fieldoptiongroupsetid"');
        await queryRunner.query('ALTER TABLE "fieldoptiongroupset" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "fieldoptiongroupset" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "fieldoptiongroupset" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "fieldoptiongroupset" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "fieldoptiongroupset" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "fieldoptiongroupset" ADD COLUMN IF NOT EXISTS "code" text');

        await queryRunner.query('ALTER TABLE "hris_fieldoptiongroup" RENAME TO "fieldoptiongroup"');
        await queryRunner.query('ALTER TABLE "fieldoptiongroup" RENAME COLUMN "id" TO "fieldoptiongroupid"');
        await queryRunner.query('ALTER TABLE "fieldoptiongroup" RENAME COLUMN "field_id" TO "fieldid"');
        await queryRunner.query('ALTER TABLE "fieldoptiongroup" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "fieldoptiongroup" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "fieldoptiongroup" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "fieldoptiongroup" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "fieldoptiongroup" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "fieldoptiongroup" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "fieldoptiongroup" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "fieldoptiongroup" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" ADD COLUMN IF NOT EXISTS "code" text');

        await queryRunner.query('ALTER TABLE "hris_fieldoption_children" RENAME TO "fieldoptionchildren"');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" RENAME COLUMN "parent_fieldoption" TO "parentfieldoption"');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" RENAME COLUMN "child_fieldoption" TO "childfieldoption"');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" ADD COLUMN IF NOT EXISTS "parentFieldOptionUid" text');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" ADD COLUMN IF NOT EXISTS "childFieldOptionUid" text');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "fieldoptionchildren" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        
        await queryRunner.query('ALTER TABLE "hris_field_inputtype" RENAME TO "fieldinputtype"');
        await queryRunner.query('ALTER TABLE "fieldinputtype" RENAME COLUMN "id" TO "fieldinputtypeid"');
        await queryRunner.query('ALTER TABLE "fieldinputtype" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "fieldinputtynamepe" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "fieldinputtype" ADD COLUMN IF NOT EXISTS "htmltag" text');
        await queryRunner.query('ALTER TABLE "fieldinputtype" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "fieldinputtype" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "fieldinputtype" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "fieldinputtype" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "fieldinputtype" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "fieldinputtype" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "fieldinputtype" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');

        await queryRunner.query('ALTER TABLE "hris_fieldgroupset" RENAME TO "fieldgroupset"');
        await queryRunner.query('ALTER TABLE "fieldgroupset" RENAME COLUMN "id" TO "fieldgroupsetid"');
        await queryRunner.query('ALTER TABLE "fieldgroupset" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "fieldgroupset" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "fieldgroupset" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "fieldgroupset" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "fieldgroupset" ADD COLUMN IF NOT EXISTS "htmltag" text');
        await queryRunner.query('ALTER TABLE "fieldgroupset" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "fieldgroupset" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "fieldgroupset" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "fieldgroupset" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "fieldgroupset" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');

        await queryRunner.query('ALTER TABLE "hris_field_datatype" RENAME TO "fielddatatype"');
        await queryRunner.query('ALTER TABLE "fielddatatype" RENAME COLUMN "id" TO "fielddatatypeid"');
        await queryRunner.query('ALTER TABLE "fielddatatype" RENAME COLUMN "datecreated" TO "created"');
        await queryRunner.query('ALTER TABLE "fielddatatype" ADD COLUMN IF NOT EXISTS "lastupdated" text');
        await queryRunner.query('ALTER TABLE "fielddatatype" ADD COLUMN IF NOT EXISTS "description" text');
        await queryRunner.query('ALTER TABLE "fielddatatype" ADD COLUMN IF NOT EXISTS "name" text');
        await queryRunner.query('ALTER TABLE "fielddatatype" ADD COLUMN IF NOT EXISTS "uid" text');
        await queryRunner.query('ALTER TABLE "fielddatatype" ADD COLUMN IF NOT EXISTS "code" text');
        await queryRunner.query('ALTER TABLE "fielddatatype" ADD COLUMN IF NOT EXISTS "lastupdatedby" text');
        await queryRunner.query('ALTER TABLE "fielddatatype" ADD COLUMN IF NOT EXISTS "publicaccess" text');
        await queryRunner.query('ALTER TABLE "fielddatatype" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');

        await queryRunner.query('ALTER TABLE "hris_fieldgroup_members" RENAME TO "fieldgroupmembers"');
        await queryRunner.query('ALTER TABLE "fieldgroupmembers" RENAME COLUMN "fieldgroup_id" TO "fieldgroupid"');
        await queryRunner.query('ALTER TABLE "fieldgroupmembers" RENAME COLUMN "field_id" TO "fieldid"');

        await queryRunner.query('ALTER TABLE "hris_fieldgroupset_members" RENAME TO "fieldgroupsetmembers"');
        await queryRunner.query('ALTER TABLE "fieldgroupsetmembers" RENAME COLUMN "fieldgroupset_id" TO "fieldgroupsetid"');
        await queryRunner.query('ALTER TABLE "fieldgroupsetmembers" RENAME COLUMN "fieldgroup_id" TO "fieldgroupid"');

        await queryRunner.query('ALTER TABLE "hris_fieldoptiongroup_members" RENAME TO "fieldoptiongroupmembers"');
        await queryRunner.query('ALTER TABLE "fieldoptiongroupmembers" RENAME COLUMN "fieldoptiongroup_id" TO "fieldoptiongroupid"');
        await queryRunner.query('ALTER TABLE "fieldoptiongroupmembers" RENAME COLUMN "fieldoption_id" TO "fieldoptionid"'); 
        
        await queryRunner.query('ALTER TABLE "hris_fieldoptiongroupset_members" RENAME TO "fieldoptiongroupsetmembers"');
        await queryRunner.query('ALTER TABLE "fieldoptiongroupsetmembers" RENAME COLUMN "fieldoptiongroupset_id" TO "fieldoptiongroupsetid"');
        await queryRunner.query('ALTER TABLE "fieldoptiongroupsetmembers" RENAME COLUMN "fieldoptiongroup_id" TO "fieldoptiongroupid"');  

        

 
    }
}

                                          
public async down(queryRunner: QueryRunner): Promise<any> {
}

}
