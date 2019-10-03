import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { format, endOfMonth, startOfMonth, getDaysInMonth, endOfQuarter, startOfQuarter, differenceInDays,
    getDaysInYear, startOfYear, endOfWeek, startOfWeek, endOfYear} from 'date-fns';


@Injectable()
export class AnalyticsService{
    constructor(private connetion:Connection){

    }
    async generateAnalyticsTables(){
        let forms:any = await this.connetion.manager.query('SELECT formid,uid,title FROM form');
        console.log('Forms:', forms);
        for(const form of forms){
            await this.connetion.manager.query('DROP TABLE IF EXISTS _temp_resource_table_' + form.uid);
            let query = 'SELECT field.fieldid,field.uid,field.name FROM field INNER JOIN formfieldmembers USING(fieldid) INNER JOIN form ON(form.formid = formfieldmembers.formid AND form.formid =' + form.formid + ');';
            let fields = await this.connetion.manager.query(query);
            let additionalColumns = '';
            let additionalInsertColumns = '';
            let additionalQueries = '';
            fields.forEach((field, index)=> {
                additionalColumns += ',"' + field.uid + '" varchar';
                additionalInsertColumns += ',"' + field.uid + '"';
                additionalQueries += ' LEFT JOIN recordvalue r' + index + ' ON (r' + index + '.recordid = r.recordid AND r' + index + '.fieldid = ' + field.fieldid + ')';
            })
            await this.connetion.manager.query('CREATE TABLE _temp_resource_table_' + form.uid + '(' +
                'created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,' +
                'lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,' +
                //'recordid integer NOT NULL DEFAULT nextval(\'record_recordid_seq\':: regclass)(INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1),'+
                'uid character varying(13) COLLATE pg_catalog."default" NOT NULL,'+
                'instance character varying(64) COLLATE pg_catalog."default" NOT NULL,' +
                'ou character varying(13) NOT NULL,' +
                'formid integer NOT NULL' + additionalColumns +
                ',PRIMARY KEY(instance))');
            let insertQuery = 'INSERT INTO _temp_resource_table_' + form.uid + '(' +
                'created,lastupdated,uid,instance,ou,formid'
                + additionalInsertColumns + ')' +
                'SELECT r.created,r.lastupdated,r.uid,r.instance,ou.uid,r.formid' 
                //+ ((fields.length > 0)?',':'')+
                + fields.map((field, index) => (index ===0?',':'') +'r'+index+'.value').join(',') 
                + ' FROM record r INNER JOIN organisationunit ou USING(organisationunitid) ' + additionalQueries + ' WHERE r.formid=' + form.formid + ';';// SELECT COUNT(*) FROM _temp_resource_table_' + form.uid + ';';
            let results = await this.connetion.manager.query(insertQuery);
            results = await this.connetion.manager.query('DROP TABLE IF EXISTS _resource_table_' + form.uid +';ALTER TABLE _temp_resource_table_' + form.uid +' RENAME TO _resource_table_' + form.uid +';');
        }
        forms.forEach
        return forms;
    }
    async generateOrganisationUnitStructureTables() {
        await this.connetion.manager.query('DROP TABLE IF EXISTS _orgunitstructure');
        await this.connetion.manager.query('CREATE TABLE _orgunitstructure(' +
            'organisationunitid integer NOT NULL,' +
            'uid character(30) COLLATE pg_catalog."default", ' +
            'level integer, ' +
            'CONSTRAINT _orgunitstructure_temp_pkey PRIMARY KEY(organisationunitid)' +
            ')');
        let level = 1;
        let count: any;
        let countstructure: any;
        do{
            let INSERTFIELD = '';
            let FIELD = '';
            let WHERE = `oulevel${level} `;
            await this.connetion.manager.query('ALTER TABLE _orgunitstructure ADD COLUMN idlevel' + level + ' integer');
            await this.connetion.manager.query('ALTER TABLE _orgunitstructure ADD COLUMN uidlevel' + level + ' character(30) COLLATE pg_catalog."default"');
            await this.connetion.manager.query('ALTER TABLE _orgunitstructure ADD COLUMN namelevel' + level + ' text COLLATE pg_catalog."default"');
            for (let i = 1; i <= level; i++) {
                INSERTFIELD += `, idlevel${i},uidlevel${i},namelevel${i}`;
                FIELD += `, oulevel${i}.organisationunitid,oulevel${i}.uid,oulevel${i}.longname`;
                if (i == 1) {
                    if (i === level) {
                        WHERE += ' WHERE parentid IS NULL';
                    } else {
                        WHERE += ` INNER JOIN organisationunit oulevel${level - 1} ON(oulevel${level - (i - 1)}.parentid =oulevel${level - 1}.organisationunitid AND oulevel${level - 1}.organisationunitid IN (SELECT organisationunitid FROM _orgunitstructure WHERE level = ${level - 1}))`;
                    }
                } else if (i != level) {
                    WHERE += ` INNER JOIN organisationunit oulevel${level - i} ON(oulevel${level - (i - 1)}.parentid =oulevel${level - i}.organisationunitid)`;
                }
            }
            let query = 'INSERT INTO _orgunitstructure(' +
                'organisationunitid, uid, level' + INSERTFIELD +')' +
                ' SELECT oulevel' + level + '.organisationunitid, oulevel' + level + '.uid,' + level + FIELD + ' FROM organisationunit ' +
                WHERE +
                ';';
            await this.connetion.manager.query(query);
            countstructure = await this.connetion.manager.query('SELECT COUNT(*) FROM _orgunitstructure');
            count = await this.connetion.manager.query('SELECT COUNT(*) FROM organisationunit');
            level++;
        } while (count[0].count !== countstructure[0].count)
        return true;
    }
    async generatePeriodStructureTables() {
        await this.connetion.manager.query('DROP TABLE IF EXISTS _periodstructure');
        await this.connetion.manager.query('CREATE TABLE _periodstructure' +
            '(' +
            'iso character varying(15) COLLATE pg_catalog."default" NOT NULL,' +
            'daysno integer NOT NULL, ' +
            'startdate date NOT NULL, ' +
            'enddate date NOT NULL, ' +
            'CONSTRAINT _periodstructure_temp_pkey PRIMARY KEY(iso)' +
            ')');
        let query = "SELECT value FROM recordvalue INNER JOIN field f USING(fieldid) INNER JOIN fielddatatype dt ON(dt.fielddatatypeid = f.datatypeid AND dt.name = 'Date') GROUP BY value";
        console.log('Field Query:', query);
        let fields = await this.connetion.manager.query(query);
        console.log(fields[0].value, new Date(fields[0].value));
        for(let field of fields){
            let dateValue = Date.parse(field.value)
            if (!isNaN(dateValue)){
                let date = new Date(dateValue);
                await this.connetion.manager.query('INSERT INTO _periodstructure(iso, daysno, startdate, enddate)VALUES' +
                    //Monthly
                    '(\'' + date.getFullYear() + '' + format(date, "MM") + '\', ' + getDaysInMonth(date) + ', \'' + startOfMonth(date).toISOString() + '\', \'' + endOfMonth(date).toISOString() + '\'),' +
                    //Bi-Monthly
                    '(\'' + date.getFullYear() + '0' + Math.ceil(parseInt(format(date, "MM")) / 2) + 'B\', ' + getDaysInMonth(date) + ', \''
                    + (date.getMonth() % 2 === 0 ? startOfMonth(date).toISOString() : startOfMonth(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())).toISOString()) + '\', \''
                    + (date.getMonth() % 2 === 0 ? endOfMonth(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())).toISOString() : endOfMonth(date).toISOString()) + '\'),' +
                    //Quarterly
                    '(\'' + date.getFullYear() + 'Q' + format(date, "Q") + '\', ' + differenceInDays(endOfQuarter(date), startOfQuarter(date)) + ', \'' + startOfQuarter(date).toISOString() + '\', \'' + endOfQuarter(date).toISOString() + '\'),' +
                    //Yearly
                    '(\'' + date.getFullYear() + '\', ' + getDaysInYear(date) + ', \'' + startOfYear(date).toISOString() + '\', \'' + endOfYear(date).toISOString() + '\'),' +
                    //Weekly
                    '(\'' + date.getFullYear() + 'W' + format(date, "ww") + '\',7, \'' + startOfWeek(date).toISOString() + '\', \'' + endOfWeek(date).toISOString() + '\')' +
                    ' ON CONFLICT ON CONSTRAINT _periodstructure_temp_pkey DO NOTHING;'
                );
            }
        }
        /*let date = new Date();
        console.log('Format:', format(date, "'Today is a' Q"));
        console.log('Format:', format(date, "'Today is a' I"));
        await this.connetion.manager.query('INSERT INTO _periodstructure(iso, daysno, startdate, enddate)VALUES'+
        //Monthly
            '(\'' + date.getFullYear() + '' + format(date, "MM") + '\', ' + getDaysInMonth(date) + ', \'' + startOfMonth(date).toISOString() + '\', \'' + endOfMonth(date).toISOString()+ '\'),' +
        //Bi-Monthly
            '(\'' + date.getFullYear() + '0' + Math.ceil(parseInt(format(date, "MM")) / 2) + 'B\', ' + getDaysInMonth(date) + ', \'' 
            + (date.getMonth() % 2 === 0 ? startOfMonth(date).toISOString() : startOfMonth(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())).toISOString()) + '\', \'' 
            + (date.getMonth() % 2 === 0 ? endOfMonth(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())).toISOString() : endOfMonth(date).toISOString()) + '\'),' +
        //Quarterly
            '(\'' + date.getFullYear() + 'Q' + format(date, "Q") + '\', ' + differenceInDays(endOfQuarter(date), startOfQuarter(date)) + ', \'' + startOfQuarter(date).toISOString() + '\', \'' + endOfQuarter(date).toISOString() + '\'),' +
        //Yearly
            '(\'' + date.getFullYear() + '\', ' + getDaysInYear(date) + ', \'' + startOfYear(date).toISOString() + '\', \'' + endOfYear(date).toISOString() + '\'),' +
        //Weekly
            '(\'' + date.getFullYear() + 'W' + format(date, "ww") + '\',7, \'' + startOfWeek(date).toISOString() + '\', \'' + endOfWeek(date).toISOString() + '\')' +
            ' ON CONFLICT ON CONSTRAINT _periodstructure_temp_pkey DO NOTHING;'
        );*/
        return [];
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
