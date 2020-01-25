import { Connection } from 'typeorm';

import { Task } from '../entities/task.entity';
import { BackgroundProcess } from './base.process';
import { TaskService } from '../services/task.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Analytics extends BackgroundProcess{
    constructor(taskService: TaskService,private connetion:Connection){
        super(taskService);
    }
    async run(){
      this.log({type:"INFO",message:"Started Running Analytics"});
        let forms: any = await this.connetion.manager.query(
            'SELECT id as formid,uid,title FROM form',
          );
          for (const form of forms) {
            console.log('Here');
            await this.connetion.manager.query(
              'DROP TABLE IF EXISTS _temp_resource_table_' + form.uid,
            );
            let query =
              'SELECT field.id as fieldid,field.uid,field.name,fdt.name as type FROM field ' +
              'INNER JOIN fielddatatype fdt ON(fdt.id = field."datatypeid") ' +
              'INNER JOIN formfieldmember ON(formfieldmember.fieldid = field.id) ' +
              'INNER JOIN form ON(form.id = formfieldmember.formid AND form.id =' +
              form.formid +
              ');';
            console.log('Here1');
            let fields = await this.connetion.manager.query(query);
            let additionalColumns = '';
            let additionalInsertColumns = '';
            let additionalQueries = '';
            fields.forEach((field, index) => {
              additionalColumns +=
                ',"' + field.uid + '" ' + this.getDatabaseType(field.type);
              additionalInsertColumns += ',"' + field.uid + '"';
              additionalQueries +=
                ' LEFT JOIN recordvalue r' +
                index +
                ' ON (r' +
                index +
                '.recordid = r.id AND r' +
                index +
                '.fieldid = ' +
                field.fieldid +
                ')';
            });
            await this.connetion.manager.query(
              'CREATE TABLE _temp_resource_table_' +
                form.uid +
                '(' +
                'created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,' +
                'lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,' +
                //'recordid integer NOT NULL DEFAULT nextval(\'record_recordid_seq\':: regclass)(INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1),'+
                'uid character varying(13) COLLATE pg_catalog."default" NOT NULL,' +
                'instance character varying(64) COLLATE pg_catalog."default" NOT NULL,' +
                'ou character varying(13) NOT NULL,' +
                'formid integer NOT NULL' +
                additionalColumns +
                ',PRIMARY KEY(instance))',
            );
            console.log('Here2');
            let insertQuery =
              'INSERT INTO _temp_resource_table_' +
              form.uid +
              '(' +
              'created,lastupdated,uid,instance,ou,formid' +
              additionalInsertColumns +
              ')' +
              'SELECT r.created,r.lastupdated,r.uid,r.instance,ou.uid,r.formid' +
              //+ ((fields.length > 0)?',':'')+
              fields
                .map((field, index) => {
                  let results = index === 0 ? ',' : '';
                  if (field.type === 'Date') {
                    //results += "TO_DATE(r" + index + ".value,'YYYY-MM-DD')";
                    results +=
                      'CASE ' +
                      'WHEN r' +
                      index +
                      ".value like '%/%/%' THEN " +
                      'TO_DATE(r' +
                      index +
                      ".value,'DD/MM/YYYY') " +
                      'ELSE TO_DATE(r' +
                      index +
                      ".value,'YYYY-MM-DD') " +
                      'END';
                  } else if (field.type === 'Integer') {
                    results +=
                      'CASE ' +
                      'WHEN REPLACE(REPLACE(r' +
                      index +
                      ".value, ',', '' ), '-', '' )  ~ '^(-?d+.d+)$|^(-?d+)$' THEN " +
                      'REPLACE(REPLACE(r' +
                      index +
                      ".value, ',', '' ), '-', '' )::INTEGER " +
                      'ELSE NULL ' +
                      'END';
                  } else if (field.type === 'Double') {
                    results +=
                      'CASE ' +
                      'WHEN REPLACE(REPLACE(r' +
                      index +
                      ".value, ',', '' ), '-', '' )  ~ '^(-?d+.d+)$|^(-?d+)$' THEN " +
                      'CAST (REPLACE(REPLACE(r' +
                      index +
                      ".value, ',', '' ), '-', '' ) AS DOUBLE PRECISION) " +
                      'ELSE NULL ' +
                      'END';
                  } else {
                    results += 'r' + index + '.value';
                  }
                  return results;
                })
                .join(',') +
              ' FROM record r INNER JOIN organisationunit ou ON(ou.id = r.organisationunitid) ' +
              additionalQueries +
              ' WHERE r.formid=' +
              form.formid +
              ';';
            await this.connetion.manager.query(insertQuery);
            console.log('Here3');
            await this.connetion.manager.query(
              'DROP TABLE IF EXISTS _resource_table_' +
                form.uid +
                ';ALTER TABLE _temp_resource_table_' +
                form.uid +
                ' RENAME TO _resource_table_' +
                form.uid +
                ';',
            );
          }
      this.log({type:"SUCCESS",message:"Analytics finished running successfully"});
    }
    getGenericType(type) {
      if (type === 'timestamp without time zone') {
        return 'DATETIME';
      } else if (type === 'character varying') {
        return 'TEXT';
      } else if (type === 'integer') {
        return 'INTEGER';
      } else {
        return type;
      }
    }
    getDatabaseType(type) {
      if (type === 'Date') {
        return 'timestamp(0) without time zone';
      } else if (type === 'Integer') {
        return 'integer';
      } else if (type === 'Double') {
        return 'DOUBLE PRECISION';
      } else {
        return 'varchar';
      }
    }
    async getProcessName(){
      return "Analytics";
    }
}
