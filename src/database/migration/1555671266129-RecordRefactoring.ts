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

      await queryRunner.query('ALTER TABLE "record" RENAME COLUMN "organisationunit_id" TO "organisationunitid"');
      await queryRunner.query('ALTER TABLE "record" RENAME COLUMN "form_id" TO "formid"');
      await queryRunner.query('ALTER TABLE "record" RENAME COLUMN "datecreated" TO "created"');

      await queryRunner.query('ALTER TABLE "record" DROP COLUMN "complete"');
      await queryRunner.query('ALTER TABLE "record" DROP COLUMN "correct"');
      await queryRunner.query('ALTER TABLE "record" DROP COLUMN "hashistory"');
      await queryRunner.query('ALTER TABLE "record" DROP COLUMN "hastraining"');
      await queryRunner.query('UPDATE "record" r SET createdbyid=u.id, lastupdatedbyid=u.id FROM "user" u WHERE r.username = u.username');
      await queryRunner.query('ALTER TABLE "record" DROP COLUMN "username"');

    //   let FieldGroup = await queryRunner.getTable('hris_field');

    // if (FieldGroup){
        // await queryRunner.query('ALTER TABLE "hris_field" RENAME TO "field"');
        // await queryRunner.query('ALTER TABLE "field" RENAME COLUMN "datatype_id" TO "datatypeId"');
        // await queryRunner.query('ALTER TABLE "field" RENAME COLUMN "inputtype_id" TO "fieldInputTypeId"');
        // await queryRunner.query('ALTER TABLE "field" RENAME COLUMN "datecreated" TO "created"');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "name" character varying(256)');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "code" character varying(25)');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "description" text');        
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "caption" text');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "iscalculated" boolean');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "compulsory" boolean');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "isunique" boolean');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "fieldrelation" boolean');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "calculatedexpression" text');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "hashistory" boolean');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "skipinreport" boolean');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "hastarget" boolean');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "hasoptions" boolean');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS publicaccess character varying(8)');
        // await queryRunner.query('ALTER TABLE "field" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');
       
        // await queryRunner.query('ALTER TABLE "hris_fieldgroup" RENAME TO "fieldgroup"');
        // await queryRunner.query('ALTER TABLE "fieldgroup" RENAME COLUMN "datecreated" TO "created"');
        // await queryRunner.query('ALTER TABLE "fieldgroup" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone');
        // await queryRunner.query('ALTER TABLE "fieldgroup" ADD COLUMN IF NOT EXISTS "name" character varying(256)');
        // await queryRunner.query('ALTER TABLE "fieldgroup" ADD COLUMN IF NOT EXISTS "description" text'); 
        // await queryRunner.query('ALTER TABLE "fieldgroup" ADD COLUMN IF NOT EXISTS "uid" character varying(256)');
        // await queryRunner.query('ALTER TABLE "fieldgroup" ADD COLUMN IF NOT EXISTS "code" character varying(25)');
        // await queryRunner.query('ALTER TABLE "fieldgroup" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying');
        // await queryRunner.query('ALTER TABLE "fieldgroup" ADD COLUMN IF NOT EXISTS publicaccess character varying(8)');
        // await queryRunner.query('ALTER TABLE "fieldgroup" ADD COLUMN IF NOT EXISTS "externalaccess" boolean');       

    // }
      //await queryRunner.query('ALTER TABLE GOOD ALTER COLUMN "id" RENAME TO userid;');
      let query = `
      CREATE SEQUENCE recordvalue_id_seq;
      CREATE TABLE public.recordvalue
      (
          created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
          lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
          id integer NOT NULL DEFAULT nextval('recordvalue_id_seq'::regclass),
          uid character varying(256) COLLATE pg_catalog."default" NOT NULL,
          value text COLLATE pg_catalog."default" NOT NULL,
          startdate timestamp without time zone NOT NULL,
          enddate timestamp without time zone,
          comment character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
          entitledpayment character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
          recordid integer,
          fieldid integer,
          CONSTRAINT "PK_48de036b3fc57e83d516a50964c" PRIMARY KEY (id),
          CONSTRAINT "FK_6c8389b754538fff362120945f2" FOREIGN KEY (recordid)
              REFERENCES public.record (id) MATCH SIMPLE
              ON UPDATE NO ACTION
              ON DELETE CASCADE
              NOT VALID
      )
      WITH (
          OIDS = FALSE
      )
      TABLESPACE pg_default;`;

      await queryRunner.query(query);

      const results = await queryRunner.manager.query(
        "SELECT * FROM record",
      );
      const fields = await queryRunner.manager.query('SELECT * FROM field');
      const fieldsObject = {};

      fields.forEach((field) => {
        fieldsObject[field.uid] = field.id;
      });

      const fieldOptions = await queryRunner.manager.query('SELECT * FROM fieldoption');
      const fieldOptionsObject = {};

      fieldOptions.forEach((field) => {
        fieldOptionsObject[field.uid] = field.value;
      }); 

      let newObjects = [];
      results.forEach((data) => {
        // console.log(data);
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
            fieldid: fieldsObject[key],
            value: value,
            recordid: data.recordid
          });
        });
      });
      //await queryRunner.manager.save(RecordValue, newObjects);
      await this.updateData(queryRunner, newObjects);
      
    }
  }

  async updateData(queryRunner: QueryRunner, data: any[]){
    let batch = 20;
    /*console.log(data[0]);
    let query = "INSERT INTO public.recordvalue(created, lastupdated, value, recordid, fieldid) VALUES"
    query += `(now(),now(),'${data[0].value}',${data[0].recordid},${data[0].fieldid ?data[0].fieldid:null})`;
    await queryRunner.manager.query(query);
    return;*/
    do{
      // console.log(data.length);
      let query = "INSERT INTO public.recordvalue(created, lastupdated, value, recordid, fieldid)VALUES";
      let index = 0;
      data.splice(0, batch).forEach((recordValue: { value: any; fieldid: string; recordid: string; })=>{
        let value = recordValue.value;
        if(typeof value !== 'string'){
          if (typeof value === 'number'){
            value = '' + value;
          } else if (typeof value === 'boolean') {
            value = '' + value;
          } else if(typeof value === 'object'){
            if(value){
              if(Object.keys(value).length === 0){
                value = null;
              }else{
                console.log('Error Value Object:', value);
                process.exit();
              }
            }
          }else {
            console.log('Error Value Object:', typeof value, value);
            process.exit();
          }
        } else {
          value = value.split("'").join("''")
        }
        if (recordValue.fieldid && value){
          if (index > 0) {
            query += ',';
          }
          query += "(now(),now(),'" + value + "'," + recordValue.recordid + "," + recordValue.fieldid + ")";
          index++;
        }
      })
      await queryRunner.manager.query(query);
      console.log('Finished Batch');
    } while (data.length > 0)
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
