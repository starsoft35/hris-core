import { MigrationInterface, QueryRunner } from 'typeorm';
import { RecordValue } from '../../modules/record/entities/record-value.entity';

export class RecordRefactoring1555771266129 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let userTable = await queryRunner.getTable('hris_record');

    if (userTable) {
      await queryRunner.query('DROP TABLE "record"');
      await queryRunner.query('ALTER TABLE "hris_record" RENAME TO "record"');
      

      await queryRunner.query('ALTER TABLE "record" ADD COLUMN "createdbyid" INTEGER');
      await queryRunner.query('ALTER TABLE "record" ADD CONSTRAINT "fk_record_createdby" FOREIGN KEY("createdbyid") REFERENCES "user"');
      await queryRunner.query('ALTER TABLE "record" ADD COLUMN "lastupdatedbyid" INTEGER');
      await queryRunner.query('ALTER TABLE "record" ADD CONSTRAINT "fk_record_lastupdatedby" FOREIGN KEY("lastupdatedbyid") REFERENCES "user"');

      await queryRunner.query('ALTER TABLE "record" RENAME COLUMN id TO "recordid"');
      await queryRunner.query('ALTER TABLE "record" RENAME COLUMN "organisationunit_id" TO "organisationunitid"');
      await queryRunner.query('ALTER TABLE "record" RENAME COLUMN "form_id" TO "formid"');
      await queryRunner.query('ALTER TABLE "record" RENAME COLUMN "datecreated" TO "created"');

      await queryRunner.query('ALTER TABLE "record" DROP COLUMN "complete"');
      await queryRunner.query('ALTER TABLE "record" DROP COLUMN "correct"');
      await queryRunner.query('ALTER TABLE "record" DROP COLUMN "hashistory"');
      await queryRunner.query('ALTER TABLE "record" DROP COLUMN "hastraining"');
      await queryRunner.query('UPDATE "record" r SET createdbyid=u.userid, lastupdatedbyid=u.userid FROM "user" u WHERE r.username = u.username');
      await queryRunner.query('ALTER TABLE "record" DROP COLUMN "username"');
      //await queryRunner.query('ALTER TABLE GOOD ALTER COLUMN "id" RENAME TO userid;');

      let query = 'CREATE TABLE public.recordvalue(' +
        'created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,' +
        'lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,' +
        "recordvalueid BIGSERIAL NOT NULL," +
        'value text COLLATE pg_catalog."default" NOT NULL,' +
        'startdate timestamp without time zone,' +
        'enddate timestamp without time zone,' +
        'comment character varying(255) COLLATE pg_catalog."default" DEFAULT NULL:: character varying,' +
        'entitledpayment character varying(255) COLLATE pg_catalog."default" DEFAULT NULL:: character varying,' +
        'recordid integer,' +
        'CONSTRAINT "PK_7eee1d43a341d7d9081f4653f75" PRIMARY KEY(recordvalueid),' +
        'CONSTRAINT "FK_6c8389b754538fff362120945f2" FOREIGN KEY(recordid)' +
        'REFERENCES public.record(recordid) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE CASCADE)';
      console.log(query);
      await queryRunner.query(query);

      const results = await queryRunner.manager.query(
        'SELECT * FROM record',
      );
      const fields = await queryRunner.manager.query('SELECT * FROM hris_field');
      const fieldsObject = {};

      fields.forEach(field => {
        fieldsObject[field.uid] = field.id;
      });

      const fieldOptions = await queryRunner.manager.query('SELECT * FROM hris_fieldoption');
      const fieldOptionsObject = {};

      fieldOptions.forEach(field => {
        fieldOptionsObject[field.uid] = field.value;
      });

      let newObjects = [];
      results.forEach(data => {
        let jsonData = JSON.parse(data.value);
        Object.keys(jsonData).forEach(key => {
          let value = "";
          if (jsonData[key]) {
            if (jsonData[key].date){
              value = jsonData[key].date;
            } else {
              if (fieldOptionsObject[jsonData[key]]) {
                value = fieldOptionsObject[jsonData[key]];
              } else {
                value = jsonData[key];
              }
            }
          }
          newObjects.push({
            field: fieldsObject[key],
            value: value,
          });
        });
      });
      //await queryRunner.manager.save(RecordValue, newObjects);
      await this.updateData(queryRunner, newObjects);
      
    }
  }

  async updateData(queryRunner, data){
    let batch = 30000;
    if(data.length > 0){
      console.log(data.length);
      await queryRunner.manager.save(RecordValue, data.splice(0,batch));
      await this.updateData(queryRunner, data);
    }
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}


