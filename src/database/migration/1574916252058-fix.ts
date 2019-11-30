import { MigrationInterface, QueryRunner } from 'typeorm';

export class fix1574916252058 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        let fixes = `
    ALTER TABLE public."user" OWNER TO postgres;
    CREATE SEQUENCE user_id_seq AS integer OWNED BY "user".id;
    ALTER TABLE public."user" ALTER COLUMN id SET DEFAULT nextval('user_id_seq');
    ALTER TABLE public."user" ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "userrole" OWNER TO "postgres";
    CREATE SEQUENCE userrole_id_seq AS integer OWNED BY userrole.id;
    ALTER TABLE userrole ALTER COLUMN id SET DEFAULT nextval('userrole_id_seq');
    ALTER TABLE userrole ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE form OWNER TO "postgres";
    CREATE SEQUENCE form_id_seq AS integer OWNED BY form.id;
    ALTER TABLE form ALTER COLUMN  id SET DEFAULT nextval('form_id_seq');
    ALTER TABLE form ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "fieldoption" OWNER TO "postgres";
    CREATE SEQUENCE fieldoption_id_seq AS integer OWNED BY fieldoption.id;
    ALTER TABLE fieldoption ALTER COLUMN  id SET DEFAULT nextval('fieldoption_id_seq');
    ALTER TABLE fieldoption ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "fieldoptionmerge" OWNER TO "postgres";
    CREATE SEQUENCE fieldoptionmerge_id_seq AS integer OWNED BY fieldoptionmerge.id;
    ALTER TABLE fieldoptionmerge ALTER COLUMN  id SET DEFAULT nextval('fieldoptionmerge_id_seq');
    ALTER TABLE fieldoptionmerge ALTER COLUMN created SET DEFAULT NOW();
    
    ALTER TABLE "fieldoptiongroupset" OWNER TO "postgres";
    CREATE SEQUENCE fieldoptiongroupset_id_seq AS integer OWNED BY fieldoptiongroupset.id;
    ALTER TABLE fieldoptiongroupset ALTER COLUMN  id SET DEFAULT nextval('fieldoptiongroupset_id_seq');
    ALTER TABLE fieldoptiongroupset ALTER COLUMN created SET DEFAULT NOW();
    
    ALTER TABLE "fielddatatype" OWNER TO "postgres";
    CREATE SEQUENCE fielddatatype_id_seq AS integer OWNED BY fielddatatype.id;
    ALTER TABLE fielddatatype ALTER COLUMN  id SET DEFAULT nextval('fielddatatype_id_seq');
    ALTER TABLE fielddatatype ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "fieldgroup" OWNER TO "postgres";
    CREATE SEQUENCE fieldgroup_id_seq AS integer OWNED BY fieldgroup.id;
    ALTER TABLE fieldgroup ALTER COLUMN  id SET DEFAULT nextval('fieldgroup_id_seq');
    ALTER TABLE fieldgroup ALTER COLUMN created SET DEFAULT NOW();


    ALTER TABLE "field" OWNER TO "postgres";
    CREATE SEQUENCE field_id_seq AS integer OWNED BY field.id;
    ALTER TABLE field ALTER COLUMN  id SET DEFAULT nextval('field_id_seq');
    ALTER TABLE field ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "fieldinputtype" OWNER TO "postgres";
    CREATE SEQUENCE fieldinputtype_id_seq AS integer OWNED BY fieldinputtype.id;
    ALTER TABLE fieldinputtype ALTER COLUMN  id SET DEFAULT nextval('fieldinputtype_id_seq');
    ALTER TABLE fieldinputtype ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "fieldoptionchildren" OWNER TO "postgres";
    CREATE SEQUENCE fieldoptionchildren_id_seq AS integer OWNED BY fieldoptionchildren.id;
    ALTER TABLE fieldoptionchildren ALTER COLUMN  id SET DEFAULT nextval('fieldoptionchildren_id_seq');
    ALTER TABLE fieldoptionchildren ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "fieldoptiongroup" OWNER TO "postgres";
    CREATE SEQUENCE fieldoptiongroup_id_seq AS integer OWNED BY fieldoptiongroup.id;
    ALTER TABLE fieldoptiongroup ALTER COLUMN  id SET DEFAULT nextval('fieldoptiongroup_id_seq');
    ALTER TABLE fieldoptiongroup ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "friendlyreport" OWNER TO "postgres";
    CREATE SEQUENCE friendlyreport_id_seq AS integer OWNED BY friendlyreport.id;
    ALTER TABLE friendlyreport ALTER COLUMN  id SET DEFAULT nextval('friendlyreport_id_seq');
    ALTER TABLE friendlyreport ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "indicator" OWNER TO "postgres";
    CREATE SEQUENCE indicator_id_seq AS integer OWNED BY indicator.id;
    ALTER TABLE indicator ALTER COLUMN  id SET DEFAULT nextval('indicator_id_seq');
    ALTER TABLE indicator ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "indicatortarget" OWNER TO "postgres";
    CREATE SEQUENCE indicatortarget_id_seq AS integer OWNED BY indicatortarget.id;
    ALTER TABLE indicatortarget ALTER COLUMN  id SET DEFAULT nextval('indicatortarget_id_seq');
    ALTER TABLE indicatortarget ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "instancefacilitator" OWNER TO "postgres";
    CREATE SEQUENCE instancefacilitator_id_seq AS integer OWNED BY instancefacilitator.id;
    ALTER TABLE instancefacilitator ALTER COLUMN  id SET DEFAULT nextval('instancefacilitator_id_seq');
    ALTER TABLE instancefacilitator ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "instancerecord" OWNER TO "postgres";
    CREATE SEQUENCE instancerecord_id_seq AS integer OWNED BY instancerecord.id;
    ALTER TABLE instancerecord ALTER COLUMN  id SET DEFAULT nextval('instancerecord_id_seq');

    ALTER TABLE "instancetrainer" OWNER TO "postgres";
    CREATE SEQUENCE instancetrainer_id_seq AS integer OWNED BY instancetrainer.id;
    ALTER TABLE instancetrainer ALTER COLUMN  id SET DEFAULT nextval('instancetrainer_id_seq');
    ALTER TABLE instancetrainer ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "intergrationdhisdataconnection" OWNER TO "postgres";
    CREATE SEQUENCE intergrationdhisdataconnection_id_seq AS integer OWNED BY intergrationdhisdataconnection.id;
    ALTER TABLE intergrationdhisdataconnection ALTER COLUMN  id SET DEFAULT nextval('intergrationdhisdataconnection_id_seq');
    ALTER TABLE intergrationdhisdataconnection ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "intergrationtiisdataconnection" OWNER TO "postgres";
    CREATE SEQUENCE intergrationtiisdataconnection_id_seq AS integer OWNED BY intergrationtiisdataconnection.id;
    ALTER TABLE intergrationtiisdataconnection ALTER COLUMN  id SET DEFAULT nextval('intergrationtiisdataconnection_id_seq');
    ALTER TABLE intergrationtiisdataconnection ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "message" OWNER TO "postgres";
    CREATE SEQUENCE message_id_seq AS integer OWNED BY message.id;
    ALTER TABLE message ALTER COLUMN  id SET DEFAULT nextval('message_id_seq');
    ALTER TABLE message ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "messagemetadata" OWNER TO "postgres";
    CREATE SEQUENCE messagemetadata_id_seq AS integer OWNED BY messagemetadata.id;
    ALTER TABLE messagemetadata ALTER COLUMN  id SET DEFAULT nextval('messagemetadata_id_seq');
    ALTER TABLE messagemetadata ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "messagethreadmetadata" OWNER TO "postgres";
    CREATE SEQUENCE messagethreadmetadata_id_seq AS integer OWNED BY messagethreadmetadata.id;
    ALTER TABLE messagethreadmetadata ALTER COLUMN  id SET DEFAULT nextval('messagethreadmetadata_id_seq');
    ALTER TABLE messagethreadmetadata ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "messagethread" OWNER TO "postgres";
    CREATE SEQUENCE messagethread_id_seq AS integer OWNED BY messagethread.id;
    ALTER TABLE messagethread ALTER COLUMN  id SET DEFAULT nextval('messagethread_id_seq');
    ALTER TABLE messagethread ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "organisationunit" OWNER TO "postgres";
    CREATE SEQUENCE organisationunit_id_seq AS integer OWNED BY organisationunit.id;
    ALTER TABLE organisationunit ALTER COLUMN  id SET DEFAULT nextval('organisationunit_id_seq');
    ALTER TABLE organisationunit ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "organisationunitcompleteness" OWNER TO "postgres";
    CREATE SEQUENCE organisationunitcompleteness_id_seq AS integer OWNED BY organisationunitcompleteness.id;
    ALTER TABLE organisationunitcompleteness ALTER COLUMN  id SET DEFAULT nextval('organisationunitcompleteness_id_seq');
    ALTER TABLE organisationunitcompleteness ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "organisationunitgroup" OWNER TO "postgres";
    CREATE SEQUENCE organisationunitgroup_id_seq AS integer OWNED BY organisationunitgroup.id;
    ALTER TABLE organisationunitgroup ALTER COLUMN  id SET DEFAULT nextval('organisationunitgroup_id_seq');
    ALTER TABLE organisationunitgroup ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "organisationunitgroupset" OWNER TO "postgres";
    CREATE SEQUENCE organisationunitgroupset_id_seq AS integer OWNED BY organisationunitgroupset.id;
    ALTER TABLE organisationunitgroupset ALTER COLUMN  id SET DEFAULT nextval('organisationunitgroupset_id_seq');
    ALTER TABLE organisationunitgroupset ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "organisationunitlevel" OWNER TO "postgres";
    CREATE SEQUENCE organisationunitlevel_id_seq AS integer OWNED BY organisationunitlevel.id;
    ALTER TABLE organisationunitlevel ALTER COLUMN  id SET DEFAULT nextval('organisationunitlevel_id_seq');
    ALTER TABLE organisationunitlevel ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "record" OWNER TO "postgres";
    CREATE SEQUENCE record_id_seq AS integer OWNED BY record.id;
    ALTER TABLE record ALTER COLUMN  id SET DEFAULT nextval('record_id_seq');
    ALTER TABLE record ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "sqlview" OWNER TO "postgres";
    ALTER TABLE sqlview ALTER COLUMN  id SET DEFAULT nextval('sqlview_id_seq');
    ALTER TABLE sqlview ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "training" OWNER TO "postgres";
    CREATE SEQUENCE training_id_seq AS integer OWNED BY training.id;
    ALTER TABLE training ALTER COLUMN  id SET DEFAULT nextval('training_id_seq');
    ALTER TABLE training ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "trainingcurriculum" OWNER TO "postgres";
    CREATE SEQUENCE trainingcurriculum_id_seq AS integer OWNED BY trainingcurriculum.id;
    ALTER TABLE trainingcurriculum ALTER COLUMN  id SET DEFAULT nextval('trainingcurriculum_id_seq');
    ALTER TABLE trainingcurriculum ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "traininginstance" OWNER TO "postgres";
    CREATE SEQUENCE traininginstance_id_seq AS integer OWNED BY traininginstance.id;
    ALTER TABLE traininginstance ALTER COLUMN  id SET DEFAULT nextval('traininginstance_id_seq');
    ALTER TABLE traininginstance ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "trainingmethod" OWNER TO "postgres";
    CREATE SEQUENCE trainingmethod_id_seq AS integer OWNED BY trainingmethod.id;
    ALTER TABLE trainingmethod ALTER COLUMN  id SET DEFAULT nextval('trainingmethod_id_seq');
    ALTER TABLE trainingmethod ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "trainingsections" OWNER TO "postgres";
    CREATE SEQUENCE trainingsections_id_seq AS integer OWNED BY trainingsections.id;
    ALTER TABLE trainingsections ALTER COLUMN  id SET DEFAULT nextval('trainingsections_id_seq');
    ALTER TABLE trainingsections ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "trainingsponsor" OWNER TO "postgres";
    CREATE SEQUENCE trainingsponsor_id_seq AS integer OWNED BY trainingsponsor.id;
    ALTER TABLE trainingsponsor ALTER COLUMN  id SET DEFAULT nextval('trainingsponsor_id_seq');
    ALTER TABLE trainingsponsor ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "trainingtrainer" OWNER TO "postgres";
    CREATE SEQUENCE trainingtrainer_id_seq AS integer OWNED BY trainingtrainer.id;
    ALTER TABLE trainingtrainer ALTER COLUMN  id SET DEFAULT nextval('trainingtrainer_id_seq');
    ALTER TABLE trainingtrainer ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "trainingunit" OWNER TO "postgres";
    CREATE SEQUENCE trainingunit_id_seq AS integer OWNED BY trainingunit.id;
    ALTER TABLE trainingunit ALTER COLUMN  id SET DEFAULT nextval('trainingunit_id_seq');
    ALTER TABLE trainingunit ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "trainingvenue" OWNER TO "postgres";
    CREATE SEQUENCE trainingvenue_id_seq AS integer OWNED BY trainingvenue.id;
    ALTER TABLE trainingvenue ALTER COLUMN  id SET DEFAULT nextval('trainingvenue_id_seq');
    ALTER TABLE trainingvenue ALTER COLUMN created SET DEFAULT NOW();

    ALTER TABLE "userauthority" OWNER TO "postgres";
    ALTER TABLE userauthority ALTER COLUMN  id SET DEFAULT nextval('userauthority_id_seq');
    ALTER TABLE userauthority ALTER COLUMN created SET DEFAULT NOW();


    ALTER TABLE "validation" OWNER TO "postgres";
    CREATE SEQUENCE validation_id_seq AS integer OWNED BY validation.id;
    ALTER TABLE validation ALTER COLUMN  id SET DEFAULT nextval('validation_id_seq');
    ALTER TABLE validation ALTER COLUMN created SET DEFAULT NOW();




    `;
    await queryRunner.query(fixes);
    }

public async down(queryRunner: QueryRunner): Promise<any> { }
}

