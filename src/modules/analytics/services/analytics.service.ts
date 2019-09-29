import { Injectable } from '@nestjs/common';
import { BaseEntity, DeleteResult, Repository, UpdateResult, FindConditions, Connection } from 'typeorm';


@Injectable()
export class AnalyticsService{
    constructor(private connetion:Connection){

    }
    async generateAnalyticsTables(){
        let forms:any = await this.connetion.manager.query('SELECT formid,uid,title FROM form');
        console.log('Forms:', forms);
        for(const form of forms){
            await this.connetion.manager.query('DROP TABLE IF EXISTS _temp_resource_table_' + form.uid);
            let fields = await this.connetion.manager.query('SELECT field.uid FROM field INNER JOIN formfieldmember USING(fieldid) INNER JOIN form ON(form.formid = formfieldmember.fieldid AND form.formid =\'' +form.formid+ '\');');
            let additionalColumns = '';
            let additionalInsertColumns = '';
            let additionalQueries = '';
            fields.forEach((field, index)=> {
                additionalColumns += ',"' + field.uid + '" varchar';
                additionalInsertColumns += ',"' + field.uid + '"';
                additionalQueries += ' LEFT JOIN recordvalue r' + index + ' ON (r' + index + '.recordid = r.recordid)';
            })
            await this.connetion.manager.query('CREATE TABLE _temp_resource_table_' + form.uid + '(' +
                'created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,' +
                'lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,' +
                //'recordid integer NOT NULL DEFAULT nextval(\'record_recordid_seq\':: regclass)(INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1),'+
                'uid character varying(13) COLLATE pg_catalog."default" NOT NULL,'+
                'instance character varying(64) COLLATE pg_catalog."default" NOT NULL,' +
                'organisationunitid integer NOT NULL,' +
                'formid integer NOT NULL' + additionalColumns +
                ',PRIMARY KEY(instance))');
            console.log('Created Form Table for:', form.uid);
            let insertQuery = 'INSERT INTO _temp_resource_table_' + form.uid + '(' +
                'created,lastupdated,uid,instance,organisationunitid,formid'
                + additionalInsertColumns + ')' +
                'SELECT r.created,r.lastupdated,r.uid,r.instance,r.organisationunitid,r.formid,' 
                + fields.map((field,index)=>'r'+index+'.value').join(',') 
                + ' FROM record r ' + additionalQueries;
            console.log('Insert Query:', insertQuery);
            let results = await this.connetion.manager.query(insertQuery);
            console.log(results);
            results = await this.connetion.manager.query('DROP TABLE IF EXISTS _resource_table_' + form.uid +';ALTER TABLE _temp_resource_table_' + form.uid +' RENAME TO _resource_table_' + form.uid +';');
            console.log(results);
        }
        forms.forEach
        return forms;
    }
    async generateOrganisationUnitStructureTables() {
        let forms: any = await this.connetion.manager.query('SELECT formid,uid,title FROM form');
        console.log('Forms:', forms);
        for (const form of forms) {
            await this.connetion.manager.query('DROP TABLE IF EXISTS _temp_resource_table_' + form.uid);
            let fields = await this.connetion.manager.query('SELECT field.uid FROM field INNER JOIN formfieldmember USING(fieldid) INNER JOIN form ON(form.formid = formfieldmember.fieldid AND form.formid =\'' + form.formid + '\');');
            let additionalColumns = '';
            let additionalInsertColumns = '';
            let additionalQueries = '';
            fields.forEach((field, index) => {
                additionalColumns += ',"' + field.uid + '" varchar';
                additionalInsertColumns += ',"' + field.uid + '"';
                additionalQueries += ' LEFT JOIN recordvalue r' + index + ' ON (r' + index + '.recordid = r.recordid)';
            })
            await this.connetion.manager.query('CREATE TABLE _temp_resource_table_' + form.uid + '(' +
                'created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,' +
                'lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,' +
                //'recordid integer NOT NULL DEFAULT nextval(\'record_recordid_seq\':: regclass)(INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1),'+
                'uid character varying(13) COLLATE pg_catalog."default" NOT NULL,' +
                'instance character varying(64) COLLATE pg_catalog."default" NOT NULL,' +
                'organisationunitid integer NOT NULL,' +
                'formid integer NOT NULL' + additionalColumns +
                ',PRIMARY KEY(instance))');
            console.log('Created Form Table for:', form.uid);
            let insertQuery = 'INSERT INTO _temp_resource_table_' + form.uid + '(' +
                'created,lastupdated,uid,instance,organisationunitid,formid'
                + additionalInsertColumns + ')' +
                'SELECT r.created,r.lastupdated,r.uid,r.instance,r.organisationunitid,r.formid,'
                + fields.map((field, index) => 'r' + index + '.value').join(',')
                + ' FROM record r ' + additionalQueries;
            console.log('Insert Query:', insertQuery);
            let results = await this.connetion.manager.query(insertQuery);
            console.log(results);
            results = await this.connetion.manager.query('DROP TABLE IF EXISTS _resource_table_' + form.uid + ';ALTER TABLE _temp_resource_table_' + form.uid + ' RENAME TO _resource_table_' + form.uid + ';');
            console.log(results);
        }
        forms.forEach
        return forms;
    }
    async getAnalyticsRecords(formid){
        let analytics =  { "headers": 
        [
            { "name": "psi", "column": "Event", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, 
            { "name": "ps", "column": "Program stage", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, 
            { "name": "eventdate", "column": "Event date", "valueType": "DATE", "type": "java.util.Date", "hidden": false, "meta": true }, 
            { "name": "longitude", "column": "Longitude", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": true }, 
            { "name": "latitude", "column": "Latitude", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": true }, 
            { "name": "ouname", "column": "Organisation unit name", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, 
            { "name": "oucode", "column": "Organisation unit code", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, 
            { "name": "ou", "column": "Organisation unit", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, 
            { "name": "JDaH0BmEXvj", "column": "Infant Mortality Rate", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": true }], 
            "metaData": { "pager": { "page": 1, "total": 0, "pageSize": 100, "pageCount": 1 }, 
            "items": { "ou": { "name": "Organisation unit" }, "mlDzRw3ibhE": { "name": "Single-Event Death Registry" }, 
            "m0frOspS7JY": { "name": "MOH - Tanzania" }, "JDaH0BmEXvj": { "name": "Infant Mortality Rate" }, 
            "Mvc0jfU9Ua2": { "name": "Death Registry" } }, 
            "dimensions": { "pe": [], "ou": ["m0frOspS7JY"], "JDaH0BmEXvj": [] } }, 
            "rows": [], 
            "height": 0, 
            "width": 0 }
        return await this.connetion.manager.query('SELECT * FROM _resource_table_' + formid)
    }
}
