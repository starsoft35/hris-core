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
                'ou varchar NOT NULL,' +
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
            "width": 0 };
        let headers = await this.connetion.manager.query('SELECT columns.table_name,columns.column_name,'+
            'columns.data_type, columns.column_default, columns.is_nullable FROM information_schema.columns' +
            ' WHERE table_name = \'_resource_table_' + formid +'\'');
        analytics.headers = headers.map((header)=>{
            return {
                name:header.column_name,
                column: header.column_name,
                valueType: this.getGenericType(header.data_type),
            }
        });
        analytics.width = analytics.headers.length;
        let rows = await this.connetion.manager.query('SELECT * FROM _resource_table_' + formid +' data');
        analytics.height = rows.length;
        analytics.rows = rows.map((row) => {
            let newRow = [];
            analytics.headers.forEach((header,index) => {
                newRow[index] = row[header.name]
            })
            return newRow;
        });
        return analytics;
    }
    getGenericType(type){
        if (type === 'timestamp without time zone'){
            return 'DATETIME'
        } else if (type === 'character varying') {
            return 'TEXT'
        } else if (type === 'integer') {
            return 'INTEGER'
        }else{
            return type
        }
    }
}
