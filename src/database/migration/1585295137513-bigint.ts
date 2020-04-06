import { MigrationInterface, QueryRunner } from 'typeorm';

export class bigint1585295137513 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
        ALTER TABLE app ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE chart ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE chart ALTER COLUMN userid TYPE BIGINT;
        ALTER TABLE chartdimension ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE chartdimension ALTER COLUMN chartid TYPE BIGINT;
        ALTER TABLE chartdimensionitem ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE chartdimensionitem ALTER COLUMN chartdimensionid TYPE BIGINT;
        ALTER TABLE dashboard ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE dashboard ALTER COLUMN userid TYPE BIGINT;
        ALTER TABLE dashboarditem ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE dashboarditem ALTER COLUMN dashboardid TYPE BIGINT;
        ALTER TABLE dashboarditem ALTER COLUMN chartid TYPE BIGINT;
        ALTER TABLE dashboarditemchart ALTER COLUMN chartid TYPE BIGINT;
        ALTER TABLE dashboarditemchart ALTER COLUMN dashboarditemid TYPE BIGINT;
        ALTER TABLE dashboarditemmap ALTER COLUMN dashboarditemid TYPE BIGINT;
        ALTER TABLE dashboarditemmap ALTER COLUMN mapid TYPE BIGINT;
        ALTER TABLE dashboarditemreporttable ALTER COLUMN dashboarditemid TYPE BIGINT;
        ALTER TABLE dashboarditemreporttable ALTER COLUMN reporttableid TYPE BIGINT;
        ALTER TABLE datastore ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE field ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE field ALTER COLUMN datatypeid TYPE BIGINT;
        ALTER TABLE field ALTER COLUMN fieldInputTypeId TYPE BIGINT;
        ALTER TABLE field ALTER COLUMN recordvalueid TYPE BIGINT;
        ALTER TABLE fielddatatype ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE fieldgroup ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE fieldgroupmembers ALTER COLUMN "fieldgroupid" TYPE BIGINT;
        ALTER TABLE fieldgroupmembers ALTER COLUMN "fieldid" TYPE BIGINT;
        ALTER TABLE fieldgroupset ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE fieldgroupsetmembers ALTER COLUMN fieldgroupsetId TYPE BIGINT;
        ALTER TABLE fieldgroupsetmembers ALTER COLUMN "fieldgroupid" TYPE BIGINT;
        ALTER TABLE fieldinputtype ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE fieldoption ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE fieldoption ALTER COLUMN "fieldid" TYPE BIGINT;
        ALTER TABLE fieldoptionchildren ALTER COLUMN parentFieldoptionId TYPE BIGINT;
        ALTER TABLE fieldoptionchildren ALTER COLUMN childFieldoptionId TYPE BIGINT;
        ALTER TABLE fieldoptionchildren ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE fieldoptiongroup ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE fieldoptiongroup ALTER COLUMN "fieldid" TYPE BIGINT;
        ALTER TABLE fieldoptiongroupmembers ALTER COLUMN fieldoptiongroupId TYPE BIGINT;
        ALTER TABLE fieldoptiongroupmembers ALTER COLUMN fieldoptionId TYPE BIGINT;
        ALTER TABLE fieldoptiongroupset ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE fieldoptiongroupsetmembers ALTER COLUMN fieldoptiongroupsetId TYPE BIGINT;
        ALTER TABLE fieldoptiongroupsetmembers ALTER COLUMN fieldoptiongroupId TYPE BIGINT;
        ALTER TABLE fieldoptionmerge ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE fieldoptionmerge ALTER COLUMN mergedFieldOptionId TYPE BIGINT;
        ALTER TABLE fieldoptionmerge ALTER COLUMN "fieldid" TYPE BIGINT;
        ALTER TABLE fieldrelation ALTER COLUMN parentFieldId TYPE BIGINT;
        ALTER TABLE fieldrelation ALTER COLUMN "childFieldId" TYPE BIGINT;
        ALTER TABLE form ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE formfieldmember ALTER COLUMN formid TYPE BIGINT;
        ALTER TABLE formfieldmember ALTER COLUMN fieldid TYPE BIGINT;
        ALTER TABLE formsection ALTER COLUMN formid TYPE BIGINT;
        ALTER TABLE formsection ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE formsectionfieldmember ALTER COLUMN formsectionid TYPE BIGINT;
        ALTER TABLE formsectionfieldmember ALTER COLUMN fieldid TYPE BIGINT;
        ALTER TABLE formuniquerecordfields ALTER COLUMN formId TYPE BIGINT;
        ALTER TABLE formuniquerecordfields ALTER COLUMN "fieldid" TYPE BIGINT;
        ALTER TABLE formvisiblefield ALTER COLUMN formid TYPE BIGINT;
        ALTER TABLE formvisiblefield ALTER COLUMN fieldid TYPE BIGINT;
        ALTER TABLE friendlyreport ALTER COLUMN id TYPE BIGINT;      
        ALTER TABLE friendlyreport ALTER COLUMN seriesid TYPE BIGINT;
        ALTER TABLE friendlyreportarithmeticfilter ALTER COLUMN friendlyreportid TYPE BIGINT;
        ALTER TABLE friendlyreportarithmeticfilter ALTER COLUMN arithmeticfilterid TYPE BIGINT;
        ALTER TABLE friendlyreportcategory ALTER COLUMN friendlyreportid TYPE BIGINT;
        ALTER TABLE friendlyreportcategory ALTER COLUMN fieldoptiongroupid TYPE BIGINT;
        ALTER TABLE friendlyreportrelationalfilter ALTER COLUMN friendlyreportid TYPE BIGINT;
        ALTER TABLE friendlyreportrelationalfilter ALTER COLUMN relationalfilterid TYPE BIGINT;
        ALTER TABLE indicator ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE indicator ALTER COLUMN formid TYPE BIGINT;
        ALTER TABLE indicatorgroup ALTER COLUMN programindicatorgroupid TYPE BIGINT;
        ALTER TABLE indicatorgroupmembers ALTER COLUMN "indicatorProgramindicatorid" TYPE BIGINT;
        ALTER TABLE indicatorgroupmembers ALTER COLUMN "indicatorgroupProgramindicatorgroupid" TYPE BIGINT;
        ALTER TABLE indicatortarget ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE indicatortarget ALTER COLUMN organisationunitgroupid TYPE BIGINT;
        ALTER TABLE indicatortargetfieldoption ALTER COLUMN targetid TYPE BIGINT;
        ALTER TABLE indicatortargetfieldoption ALTER COLUMN fieldoptionid TYPE BIGINT;
        ALTER TABLE sessionfacilitator ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE sessionfacilitator ALTER COLUMN sessionid TYPE BIGINT;
        ALTER TABLE sessionfacilitator ALTER COLUMN recordid TYPE BIGINT;
        ALTER TABLE sessionparticipant ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE sessionparticipant ALTER COLUMN sessionid TYPE BIGINT;
        ALTER TABLE sessionparticipant ALTER COLUMN recordid TYPE BIGINT;
        ALTER TABLE instancetrainer ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE instancetrainer ALTER COLUMN sessionid TYPE BIGINT;
        ALTER TABLE instancetrainer ALTER COLUMN trainerid TYPE BIGINT;
        ALTER TABLE intergrationdhisdataconnection ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE intergrationdhisdataconnection ALTER COLUMN parentorganisationunitid TYPE BIGINT;
        ALTER TABLE intergrationdhisdataelementfieldoptionrelation ALTER COLUMN dhisdataconnectionid TYPE BIGINT;
        ALTER TABLE intergrationdhisdataelementfieldoptionrelation ALTER COLUMN columnfieldoptiongroupid TYPE BIGINT;
        ALTER TABLE intergrationdhisdataelementfieldoptionrelation ALTER COLUMN rowfieldoptiongroupid TYPE BIGINT;
        ALTER TABLE intergrationdhisfieldoptiongroupsetmember ALTER COLUMN dhisdataconnectionid TYPE BIGINT;
        ALTER TABLE intergrationdhisfieldoptiongroupsetmember ALTER COLUMN fieldoptiongroupsetid TYPE BIGINT;
        ALTER TABLE intergrationtiisdataconnection ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE intergrationtiisdataconnection ALTER COLUMN organisationunitid TYPE BIGINT;
        ALTER TABLE intergrationtiisemployeefieldrelation ALTER COLUMN tiisdataconnectionid TYPE BIGINT;
        ALTER TABLE intergrationtiisemployeefieldrelation ALTER COLUMN fieldid TYPE BIGINT;
        ALTER TABLE leave ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE leave ALTER COLUMN recordid TYPE BIGINT;
        ALTER TABLE leave ALTER COLUMN leavetypeid TYPE BIGINT;
        ALTER TABLE leaverelative ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE leaverelative ALTER COLUMN leaveid TYPE BIGINT;
        ALTER TABLE leavetype ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE leavetype ALTER COLUMN fieldid TYPE BIGINT;
        ALTER TABLE map ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE map ALTER COLUMN userid TYPE BIGINT;
        ALTER TABLE mapview ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE mapview ALTER COLUMN "mapId" TYPE BIGINT;
        ALTER TABLE mapviewdimension ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE mapviewdimension ALTER COLUMN mapviewid TYPE BIGINT;
        ALTER TABLE mapviewdimensionitem ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE mapviewdimensionitem ALTER COLUMN mapviewdimensionid TYPE BIGINT;
        ALTER TABLE message ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE message ALTER COLUMN threadid TYPE BIGINT;
        ALTER TABLE message ALTER COLUMN userId TYPE BIGINT;
        ALTER TABLE messagemetadata ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE messagemetadata ALTER COLUMN messageid TYPE BIGINT;
        ALTER TABLE messagemetadata ALTER COLUMN participantid TYPE BIGINT;
        ALTER TABLE messagethread ALTER COLUMN createdbyid TYPE BIGINT;
        ALTER TABLE messagethread ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE messagethreadmetadata ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE messagethreadmetadata ALTER COLUMN threadid TYPE BIGINT;
        ALTER TABLE messagethreadmetadata ALTER COLUMN participantid TYPE BIGINT;
        ALTER TABLE organisationunit ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE organisationunit ALTER COLUMN parentid TYPE BIGINT;
        ALTER TABLE organisationunitcompleteness ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE organisationunitcompleteness ALTER COLUMN organisationunitid TYPE BIGINT;
        ALTER TABLE organisationunitcompleteness ALTER COLUMN formid TYPE BIGINT;
        ALTER TABLE organisationunitgroup ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE organisationunitgroup ALTER COLUMN organisationunitgroupsetid TYPE BIGINT;
        ALTER TABLE organisationunitgroupmembers ALTER COLUMN organisationunitgroupId TYPE BIGINT;
        ALTER TABLE organisationunitgroupmembers ALTER COLUMN organisationunitId TYPE BIGINT;
        ALTER TABLE organisationunitgroupset ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE organisationunitlevel ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE organisationunitmembers ALTER COLUMN userid TYPE BIGINT;
        ALTER TABLE organisationunitmembers ALTER COLUMN organisationunitid TYPE BIGINT;
        ALTER TABLE process ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE record ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE record ALTER COLUMN organisationunitid TYPE BIGINT;
        ALTER TABLE record ALTER COLUMN formid TYPE BIGINT;
        ALTER TABLE record ALTER COLUMN createdbyid TYPE BIGINT;
        ALTER TABLE record ALTER COLUMN value DROP NOT NULL;
        ALTER TABLE record ALTER COLUMN lastupdatedbyid TYPE BIGINT;
        ALTER TABLE recordvalue ALTER COLUMN recordid TYPE BIGINT;
        ALTER TABLE recordvalue ALTER COLUMN fieldid TYPE BIGINT;
        ALTER TABLE relationalfilter ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE relationalfilter ALTER COLUMN fieldid TYPE BIGINT;
        ALTER TABLE relationalfiltermember ALTER COLUMN relationalfilterid TYPE BIGINT;
        ALTER TABLE relationalfiltermember ALTER COLUMN fieldoptionid TYPE BIGINT;
        ALTER TABLE report ALTER COLUMN userid TYPE BIGINT;
        ALTER TABLE report ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE reportgroup ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE reportgroupmembers ALTER COLUMN reportgroupId TYPE BIGINT;
        ALTER TABLE reportgroupmembers ALTER COLUMN reportId TYPE BIGINT;
        ALTER TABLE reporttable ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE reporttable ALTER COLUMN userid TYPE BIGINT;
        ALTER TABLE reporttabledimension ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE reporttabledimension ALTER COLUMN reporttableid TYPE BIGINT;
        ALTER TABLE reporttabledimensionitem ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE reporttabledimensionitem ALTER COLUMN reporttabledimensionid TYPE BIGINT;
        ALTER TABLE schedule ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE schedule ALTER COLUMN processid TYPE BIGINT;
        ALTER TABLE systeminfo ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE systemsetting ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE task ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE training ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE trainingcurriculum ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE trainingcurriculum ALTER COLUMN sectionid TYPE BIGINT;
        ALTER TABLE trainingcurriculum ALTER COLUMN unitid TYPE BIGINT;
        ALTER TABLE trainingcurriculumtopicmember ALTER COLUMN trainingcurriculumid TYPE BIGINT;
        ALTER TABLE trainingcurriculumtopicmember ALTER COLUMN trainingtopicId TYPE BIGINT;
        ALTER TABLE trainingsession ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE trainingsession ALTER COLUMN sectionid TYPE BIGINT;
        ALTER TABLE trainingsession ALTER COLUMN unitid TYPE BIGINT;
        ALTER TABLE trainingsession ALTER COLUMN curriculumid TYPE BIGINT;
        ALTER TABLE trainingsession ALTER COLUMN trainingid TYPE BIGINT;
        ALTER TABLE trainingtopic ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE trainingsections ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE trainingsession ALTER COLUMN sponsor TYPE BIGINT;
        ALTER TABLE trainingsession ALTER COLUMN unitid TYPE BIGINT;
        ALTER TABLE trainingsession ALTER COLUMN curriculumid TYPE BIGINT;
        ALTER TABLE trainingsession ALTER COLUMN organiser TYPE BIGINT;
        ALTER TABLE trainingsponsor ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE trainingtrainer ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE trainingunit ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE trainingunit ALTER COLUMN sectionid TYPE BIGINT;
        ALTER TABLE trainingvenue ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE trainingvenue ALTER COLUMN organisationunitid TYPE BIGINT;
        ALTER TABLE "user" ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE "user" ALTER COLUMN organisationunitid TYPE BIGINT;
        ALTER TABLE "user" ALTER COLUMN createdbyId TYPE BIGINT;
        ALTER TABLE "user" ALTER COLUMN lastupdatedbyId TYPE BIGINT;
        ALTER TABLE "user" ALTER COLUMN userSettingsId TYPE BIGINT;
        ALTER TABLE userauthority ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE userauthoritymembers ALTER COLUMN userauthorityId TYPE BIGINT;
        ALTER TABLE userauthoritymembers ALTER COLUMN userroleId TYPE BIGINT;
        ALTER TABLE usergroup ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE usergroupmembers ALTER COLUMN userId TYPE BIGINT;
        ALTER TABLE usergroupmembers ALTER COLUMN usergroupId TYPE BIGINT;
        ALTER TABLE usermessagemembers ALTER COLUMN userId TYPE BIGINT;
        ALTER TABLE usermessagemembers ALTER COLUMN messageId TYPE BIGINT;
        ALTER TABLE userrole ALTER COLUMN createdbyId TYPE BIGINT;
        ALTER TABLE userrole ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE userrole ALTER COLUMN lastupdatedbyId TYPE BIGINT;
        ALTER TABLE userrolemembers ALTER COLUMN userId TYPE BIGINT;
        ALTER TABLE userrolemembers ALTER COLUMN userroleId TYPE BIGINT;
        ALTER TABLE usersetting ALTER COLUMN id TYPE BIGINT;
        ALTER TABLE validation ALTER COLUMN id TYPE BIGINT;
        CREATE SEQUENCE task_id_seq AS BIGINT OWNED BY task.id;
        ALTER TABLE task ALTER COLUMN id SET DEFAULT nextval('task_id_seq');
        CREATE SEQUENCE process_id_seq AS BIGINT OWNED BY process.id;
        ALTER TABLE process ALTER COLUMN id SET DEFAULT nextval('process_id_seq');
        CREATE SEQUENCE schedule_id_seq AS BIGINT OWNED BY schedule.id;
        ALTER TABLE schedule ALTER COLUMN id SET DEFAULT nextval('schedule_id_seq');
        ALTER TABLE trainingsession ADD COLUMN "deliverymode" text;

        CREATE TABLE participant(sessionid bigint, recordid bigint);
        CREATE TABLE facilitator(sessionid bigint, recordid bigint);


        ALTER TABLE participant ADD CONSTRAINT "FK_constraint_sessionid" FOREIGN KEY (sessionid)
        REFERENCES public.trainingsession (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE;
        ALTER TABLE facilitator ADD CONSTRAINT "FK_constraint_sessionid" FOREIGN KEY (sessionid)
        REFERENCES public.trainingsession (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE;

        ALTER TABLE participant ADD CONSTRAINT "FK_constraint_recordid" FOREIGN KEY (recordid)
        REFERENCES public.record (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE;
        ALTER TABLE facilitator ADD CONSTRAINT "FK_constraint_recordid" FOREIGN KEY (recordid)
        REFERENCES public.record (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE;

        INSERT INTO participant(sessionid, recordid)
        select sessionid,recordid from sessionparticipant
        INNER JOIN record ON(record.id=sessionparticipant.recordid) 
        INNER JOIN trainingsession ON(trainingsession.id = sessionparticipant.sessionid);

        INSERT INTO facilitator(sessionid, recordid)
        select sessionid,recordid from sessionparticipant
        INNER JOIN record ON(record.id=sessionparticipant.recordid) 
        INNER JOIN trainingsession ON(trainingsession.id = sessionparticipant.sessionid);
       
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}

