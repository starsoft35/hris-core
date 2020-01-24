import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import {
  format,
  endOfMonth,
  startOfMonth,
  getDaysInMonth,
  endOfQuarter,
  startOfQuarter,
  differenceInDays,
  getDaysInYear,
  startOfYear,
  endOfWeek,
  startOfWeek,
  endOfYear,
} from 'date-fns';

@Injectable()
export class AnalyticsService{
    constructor(private connetion:Connection){

    }
    sampleAnalytics = {
        "wo7ITisRXeE":{"headers":[{"name":"dx","column":"Data","valueType":"TEXT","type":"java.lang.String","hidden":false,"meta":true},{"name":"pe","column":"Period","valueType":"TEXT","type":"java.lang.String","hidden":false,"meta":true},{"name":"ou","column":"Organisation unit","valueType":"TEXT","type":"java.lang.String","hidden":false,"meta":true},{"name":"value","column":"Value","valueType":"NUMBER","type":"java.lang.Double","hidden":false,"meta":false}],"metaData":{"items":{"2010":{"name":"2010"},"2011":{"name":"2011"},"2012":{"name":"2012"},"2013":{"name":"2013"},"2014":{"name":"2014"},"2015":{"name":"2015"},"2016":{"name":"2016"},"2017":{"name":"2017"},"2018":{"name":"2018"},"2019":{"name":"2019"},"2020":{"name":"2020"},"ou":{"name":"Organisation unit"},"dx":{"name":"Data"},"pe":{"name":"Period"},"m0frOspS7JY":{"name":"MOH - Tanzania"},"wo7ITisRXeE":{"name":"Number of employments"}},"dimensions":{"dx":["wo7ITisRXeE"],"pe":["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"],"ou":["m0frOspS7JY"],"co":[]}},"rows":[["wo7ITisRXeE","2010","m0frOspS7JY","5275"],["wo7ITisRXeE","2011","m0frOspS7JY","3310"],["wo7ITisRXeE","2012","m0frOspS7JY","5031"],["wo7ITisRXeE","2013","m0frOspS7JY","5207"],["wo7ITisRXeE","2014","m0frOspS7JY","7437"],["wo7ITisRXeE","2015","m0frOspS7JY","7498"],["wo7ITisRXeE","2016","m0frOspS7JY","718"],["wo7ITisRXeE","2017","m0frOspS7JY","1975"],["wo7ITisRXeE","2018","m0frOspS7JY","5650"],["wo7ITisRXeE","2019","m0frOspS7JY","340"]],"width":4,"height":36},
        "yKypqIROIO9":{"headers":[{"name":"dx","column":"Data","valueType":"TEXT","type":"java.lang.String","hidden":false,"meta":true},{"name":"ou","column":"Organisation unit","valueType":"TEXT","type":"java.lang.String","hidden":false,"meta":true},{"name":"value","column":"Value","valueType":"NUMBER","type":"java.lang.Double","hidden":false,"meta":false}],"metaData":{"items":{"2010":{"name":"2010"},"2011":{"name":"2011"},"2012":{"name":"2012"},"2013":{"name":"2013"},"2014":{"name":"2014"},"2015":{"name":"2015"},"2016":{"name":"2016"},"2017":{"name":"2017"},"2018":{"name":"2018"},"2019":{"name":"2019"},"2020":{"name":"2020"},"ou":{"name":"Organisation unit"},"dx":{"name":"Data"},"pe":{"name":"Period"},"m0frOspS7JY":{"name":"MOH - Tanzania"},"yKypqIROIO3":{"name":"Female"},"yKypqIROIO9":{"name":"Male"}},"dimensions":{"dx":["yKypqIROIO9","yKypqIROIO3"],"pe":[],"ou":["m0frOspS7JY"],"co":[]}},"rows":[["yKypqIROIO9","m0frOspS7JY","5275"],["yKypqIROIO3","m0frOspS7JY","3310"]],"width":4,"height":36},
        "yKypqIROIO4":{"headers":[{"name":"dx","column":"Data","valueType":"TEXT","type":"java.lang.String","hidden":false,"meta":true},{"name":"pe","column":"Period","valueType":"TEXT","type":"java.lang.String","hidden":false,"meta":true},{"name":"ou","column":"Organisation unit","valueType":"TEXT","type":"java.lang.String","hidden":false,"meta":true},{"name":"value","column":"Value","valueType":"NUMBER","type":"java.lang.Double","hidden":false,"meta":false}],"metaData":{"items":{"2010":{"name":"20-24"},"2011":{"name":"25-29"},"2012":{"name":"30-34"},"2013":{"name":"35-39"},"2014":{"name":"40-44"},"2015":{"name":"45-49"},"2016":{"name":"50-54"},"2017":{"name":"55-59"},"2018":{"name":"60-64"},"2019":{"name":"65-69"},"2020":{"name":"70-74"},"ou":{"name":"Organisation unit"},"dx":{"name":"Data"},"pe":{"name":"Period"},"m0frOspS7JY":{"name":"MOH - Tanzania"},"wo7ITisRXeE":{"name":"Number of employments"}},"dimensions":{"dx":["wo7ITisRXeE"],"pe":["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"],"ou":["m0frOspS7JY"],"co":[]}},"rows":[["wo7ITisRXeE","2010","m0frOspS7JY","0"],["wo7ITisRXeE","2011","m0frOspS7JY","1188"],["wo7ITisRXeE","2012","m0frOspS7JY","13714"],["wo7ITisRXeE","2013","m0frOspS7JY","16401"],["wo7ITisRXeE","2014","m0frOspS7JY","10221"],["wo7ITisRXeE","2015","m0frOspS7JY","10841"],["wo7ITisRXeE","2016","m0frOspS7JY","9725"],["wo7ITisRXeE","2017","m0frOspS7JY","10320"],["wo7ITisRXeE","2018","m0frOspS7JY","9834"],["wo7ITisRXeE","2019","m0frOspS7JY","4076"]],"width":4,"height":36},
        "any":{"headers":[{"name":"dx","column":"Data","valueType":"TEXT","type":"java.lang.String","hidden":false,"meta":true},{"name":"pe","column":"Period","valueType":"TEXT","type":"java.lang.String","hidden":false,"meta":true},{"name":"ou","column":"Organisation unit","valueType":"TEXT","type":"java.lang.String","hidden":false,"meta":true},{"name":"value","column":"Value","valueType":"NUMBER","type":"java.lang.Double","hidden":false,"meta":false}],"metaData":{"items":{"201907":{"name":"July 2019"},"MqMQnGOqLuY":{"name":"KE"},"201906":{"name":"June 2019"},"201909":{"name":"September 2019"},"201908":{"name":"August 2019"},"201903":{"name":"March 2019"},"201902":{"name":"February 2019"},"yKypqIROIO9":{"name":"Watoto Waliopatiwa LLIN"},"201905":{"name":"May 2019"},"ou":{"name":"Organisation unit"},"201904":{"name":"April 2019"},"201910":{"name":"October 2019"},"201901":{"name":"January 2019"},"201912":{"name":"December 2019"},"201911":{"name":"November 2019"},"X0Me7ygpiUT":{"name":"ME"},"dx":{"name":"Data"},"pe":{"name":"Period"},"Kl9MzjQI3ms":{"name":"Expected children Under 1 Year"},"m0frOspS7JY":{"name":"MOH - Tanzania"},"wo7ITisRXeE":{"name":"Measles/Rubella 1 doses given"}},"dimensions":{"dx":["Kl9MzjQI3ms","wo7ITisRXeE","yKypqIROIO9"],"pe":["201901","201902","201903","201904","201905","201906","201907","201908","201909","201910","201911","201912"],"ou":["m0frOspS7JY"],"co":["MqMQnGOqLuY","X0Me7ygpiUT"]}},"rows":[["Kl9MzjQI3ms","201901","m0frOspS7JY","2.36250253E7"],["Kl9MzjQI3ms","201902","m0frOspS7JY","2.6156278E7"],["Kl9MzjQI3ms","201903","m0frOspS7JY","2.36250253E7"],["Kl9MzjQI3ms","201904","m0frOspS7JY","2.44125262E7"],["Kl9MzjQI3ms","201905","m0frOspS7JY","2.36250253E7"],["Kl9MzjQI3ms","201906","m0frOspS7JY","2.44125262E7"],["Kl9MzjQI3ms","201907","m0frOspS7JY","2.36250253E7"],["Kl9MzjQI3ms","201908","m0frOspS7JY","2.36250253E7"],["Kl9MzjQI3ms","201909","m0frOspS7JY","2.44125262E7"],["Kl9MzjQI3ms","201910","m0frOspS7JY","2.36250253E7"],["Kl9MzjQI3ms","201911","m0frOspS7JY","2.44125262E7"],["Kl9MzjQI3ms","201912","m0frOspS7JY","2.36250253E7"],["wo7ITisRXeE","201901","m0frOspS7JY","172808.0"],["wo7ITisRXeE","201902","m0frOspS7JY","164532.0"],["wo7ITisRXeE","201903","m0frOspS7JY","171820.0"],["wo7ITisRXeE","201904","m0frOspS7JY","162847.0"],["wo7ITisRXeE","201905","m0frOspS7JY","181111.0"],["wo7ITisRXeE","201906","m0frOspS7JY","167957.0"],["wo7ITisRXeE","201907","m0frOspS7JY","177640.0"],["wo7ITisRXeE","201908","m0frOspS7JY","181368.0"],["wo7ITisRXeE","201909","m0frOspS7JY","177983.0"],["wo7ITisRXeE","201910","m0frOspS7JY","204312.0"],["wo7ITisRXeE","201911","m0frOspS7JY","155853.0"],["wo7ITisRXeE","201912","m0frOspS7JY","139938.0"],["yKypqIROIO9","201910","m0frOspS7JY","134130.0"],["yKypqIROIO9","201911","m0frOspS7JY","126009.0"],["yKypqIROIO9","201902","m0frOspS7JY","127274.0"],["yKypqIROIO9","201909","m0frOspS7JY","146883.0"],["yKypqIROIO9","201901","m0frOspS7JY","134887.0"],["yKypqIROIO9","201903","m0frOspS7JY","135008.0"],["yKypqIROIO9","201912","m0frOspS7JY","105449.0"],["yKypqIROIO9","201906","m0frOspS7JY","133842.0"],["yKypqIROIO9","201905","m0frOspS7JY","140172.0"],["yKypqIROIO9","201907","m0frOspS7JY","146057.0"],["yKypqIROIO9","201908","m0frOspS7JY","149497.0"],["yKypqIROIO9","201904","m0frOspS7JY","126747.0"]],"width":4,"height":36}
    }
    async fetchAnalytics(dx: any, pe: any, ou: any) {
        return this.sampleAnalytics[dx]?this.sampleAnalytics[dx]:this.sampleAnalytics['any'];
        console.log(dx, pe, ou);
        let analytics = { "headers": [{ "name": "dx", "column": "Data", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "pe", "column": "Period", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "value", "column": "Value", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }, { "name": "numerator", "column": "Numerator", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }, { "name": "denominator", "column": "Denominator", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }, { "name": "factor", "column": "Factor", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }, { "name": "multiplier", "column": "Multiplier", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }, { "name": "divisor", "column": "Divisor", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }], "rows": [["tZB19wNXPl1", "201811", "23706.0", "", "", "", "", ""], ["tZB19wNXPl1", "201812", "23706.0", "", "", "", "", ""], ["tZB19wNXPl1", "201810", "23706.0", "", "", "", "", ""]], "height": 3, "width": 8 };
        for (let id of dx){
            let [formuid, indicatoruid] = id.split('.');
            let query = 'SELECT * FROM indicator WHERE uid =\'' + indicatoruid + '\';';
            let indicators = await this.connetion.manager.query(query);

            query = 'SELECT level FROM organisationunitlevel';

      query = 'SELECT level FROM organisationunitlevel';
      let orglevels = await this.connetion.manager.query(query);
      let levelquery = orglevels.map(
        orglevel =>
          'ous.uidlevel' + orglevel.level + " IN ('" + ou.join("','") + "')",
      );

      query =
        'SELECT ' +
        indicators[0].expression +
        ' FROM _resource_table_' +
        formuid +
        ' data ' +
        'INNER JOIN _organisationunitstructure ous ON(ous.uid = data.ou AND (' +
        levelquery.join(' OR ') +
        ')) ';
      //+ 'INNER JOIN _periodstructure pes ON(' + periodquery.join(' OR ') + ')';
      console.log(query);
      return await this.connetion.manager.query(query);
    }
    throw new Error('Method not implemented.');
  }
  async generateAnalyticsTables() {
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
        'INNER JOIN fielddatatype fdt ON(fdt.id = field."dataTypeId") ' +
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
    return true;
  }
  async generateOrganisationUnitStructureTables() {
    await this.connetion.manager.query(
      'DROP TABLE IF EXISTS _organisationunitstructure',
    );
    await this.connetion.manager.query(
      'CREATE TABLE _organisationunitstructure(' +
        'organisationunitid integer NOT NULL,' +
        'uid character(30) COLLATE pg_catalog."default", ' +
        'level integer, ' +
        'CONSTRAINT _organisationunitstructure_temp_pkey PRIMARY KEY(organisationunitid)' +
        // 'created character(30)' +
        ')',
    );
    let level = 1;
    let count: any;
    let countstructure: any;
    do {
      let INSERTFIELD = '';
      let FIELD = '';
      let WHERE = `oulevel${level} `;
      await this.connetion.manager.query(
        'ALTER TABLE _organisationunitstructure ADD COLUMN idlevel' +
          level +
          ' integer',
      );
      await this.connetion.manager.query(
        'ALTER TABLE _organisationunitstructure ADD COLUMN uidlevel' +
          level +
          ' character(30) COLLATE pg_catalog."default"',
      );
      await this.connetion.manager.query(
        'ALTER TABLE _organisationunitstructure ADD COLUMN namelevel' +
          level +
          ' text COLLATE pg_catalog."default"',
      );
      for (let i = 1; i <= level; i++) {
        INSERTFIELD += `, idlevel${i},uidlevel${i},namelevel${i}`;
        FIELD += `, oulevel${i}.id as organisationunitid,oulevel${i}.uid,oulevel${i}.name`;
        if (i == 1) {
          if (i === level) {
            WHERE += ' WHERE parentid IS NULL';
          } else {
            WHERE += ` INNER JOIN organisationunit oulevel${level -
              1} ON(oulevel${level - (i - 1)}.parentid =oulevel${level -
              1}.id AND oulevel${level -
              1}.id IN (SELECT organisationunitid FROM _organisationunitstructure WHERE level = ${level -
              1}))`;
          }
        } else if (i != level) {
          WHERE += ` INNER JOIN organisationunit oulevel${level -
            i} ON(oulevel${level - (i - 1)}.parentid =oulevel${level - i}.id)`;
        }
      }
      let query =
        'INSERT INTO _organisationunitstructure(' +
        'organisationunitid, uid, level' +
        INSERTFIELD +
        ')' +
        ' SELECT oulevel' +
        level +
        '.id as organisationunitid, oulevel' +
        level +
        '.uid,' +
        level +
        FIELD +
        ' FROM organisationunit ' +
        WHERE +
        ';';
      console.log('Query:', query);
      await this.connetion.manager.query(query);
      countstructure = await this.connetion.manager.query(
        'SELECT COUNT(*) FROM _organisationunitstructure',
      );
      count = await this.connetion.manager.query(
        'SELECT COUNT(*) FROM organisationunit',
      );
      level++;
    } while (count[0].count !== countstructure[0].count);
    return true;
  }
  async generatePeriodStructureTables() {
    await this.connetion.manager.query('DROP TABLE IF EXISTS _periodstructure');
    await this.connetion.manager.query(
      'CREATE TABLE _periodstructure' +
        '(' +
        'iso character varying(15) COLLATE pg_catalog."default" NOT NULL,' +
        'daysno integer NOT NULL, ' +
        'startdate date NOT NULL, ' +
        'enddate date NOT NULL, ' +
        'CONSTRAINT _periodstructure_temp_pkey PRIMARY KEY(iso)' +
        ')',
    );
    let query = `SELECT value FROM recordvalue INNER JOIN field f ON(recordvalue.fieldid=f.id) INNER JOIN fielddatatype dt ON(dt.id = f."dataTypeId" AND dt.name = 'Date') GROUP BY value`;
    console.log('Field Query:', query);
    let fields = await this.connetion.manager.query(query);
    console.log(fields[0].value, new Date(fields[0].value));
    for (let field of fields) {
      let dateValue = Date.parse(field.value);
      if (!isNaN(dateValue)) {
        let date = new Date(dateValue);
        await this.connetion.manager.query(
          'INSERT INTO _periodstructure(iso, daysno, startdate, enddate)VALUES' +
            //Monthly
            "('" +
            date.getFullYear() +
            '' +
            format(date, 'MM') +
            "', " +
            getDaysInMonth(date) +
            ", '" +
            startOfMonth(date).toISOString() +
            "', '" +
            endOfMonth(date).toISOString() +
            "')," +
            //Bi-Monthly
            "('" +
            date.getFullYear() +
            '0' +
            Math.ceil(parseInt(format(date, 'MM')) / 2) +
            "B', " +
            getDaysInMonth(date) +
            ", '" +
            (date.getMonth() % 2 === 0
              ? startOfMonth(date).toISOString()
              : startOfMonth(
                  new Date(
                    date.getFullYear(),
                    date.getMonth() - 1,
                    date.getDate(),
                  ),
                ).toISOString()) +
            "', '" +
            (date.getMonth() % 2 === 0
              ? endOfMonth(
                  new Date(
                    date.getFullYear(),
                    date.getMonth() + 1,
                    date.getDate(),
                  ),
                ).toISOString()
              : endOfMonth(date).toISOString()) +
            "')," +
            //Quarterly
            "('" +
            date.getFullYear() +
            'Q' +
            format(date, 'Q') +
            "', " +
            differenceInDays(endOfQuarter(date), startOfQuarter(date)) +
            ", '" +
            startOfQuarter(date).toISOString() +
            "', '" +
            endOfQuarter(date).toISOString() +
            "')," +
            //Yearly
            "('" +
            date.getFullYear() +
            "', " +
            getDaysInYear(date) +
            ", '" +
            startOfYear(date).toISOString() +
            "', '" +
            endOfYear(date).toISOString() +
            "')," +
            //Weekly
            "('" +
            date.getFullYear() +
            'W' +
            format(date, 'ww') +
            "',7, '" +
            startOfWeek(date).toISOString() +
            "', '" +
            endOfWeek(date).toISOString() +
            "')" +
            ' ON CONFLICT ON CONSTRAINT _periodstructure_temp_pkey DO NOTHING;',
        );
      }
    }
    return [];
  }
  async getAnalyticsRecords(formid, ou, pe, otherDimensions) {
    let analytics = {
      headers: [],
      metaData: {
        items: {
          ou: { name: 'Organisation unit' },
          pe: { name: 'Period' },
        },
        dimensions: { pe: [], ou: [] },
      },
      rows: [],
      height: 0,
      width: 0,
    };
    let query =
      "SELECT field.uid,field.caption FROM field INNER JOIN formfieldmembers USING(fieldid) INNER JOIN form ON(form.formid = formfieldmembers.formid AND form.uid ='" +
      formid +
      "');";
    let fields = await this.connetion.manager.query(query);
    fields.forEach(field => {
      //console.log(field);
      if (Object.keys(otherDimensions).indexOf(field.uid) > -1) {
        analytics.metaData.items[field.uid] = { name: field.caption };
      }
    });
    // Dealing with headers
    let headers = await this.connetion.manager.query(
      'SELECT columns.table_name,columns.column_name,' +
        'columns.data_type, columns.column_default, columns.is_nullable FROM information_schema.columns' +
        " WHERE table_name = '_resource_table_" +
        formid +
        "'",
    );
    let allowedColumns = ['uid', 'ou'].concat(Object.keys(otherDimensions));
    analytics.headers = headers
      .filter(header => {
        return allowedColumns.indexOf(header.column_name) > -1;
      })
      .map(header => {
        return {
          name: header.column_name,
          column: header.column_name,
          valueType: this.getGenericType(header.data_type),
        };
      });
    analytics.width = analytics.headers.length;

    query = 'SELECT level FROM organisationunitlevel';
    let orglevels = await this.connetion.manager.query(query);
    let levelquery = orglevels.map(
      orglevel =>
        'ous.uidlevel' + orglevel.level + " IN ('" + ou.join("','") + "')",
    );

    let periodquery = pe.map(p => {
      let split = p.split('-');
      analytics.metaData.dimensions.pe.push(split[1]);
      return (
        '(data."' +
        split[0] +
        '"  BETWEEN pes.startdate AND pes.enddate AND pes.iso=\'' +
        split[1] +
        "')"
      );
    });
    query =
      'SELECT ' +
      allowedColumns.map(column => 'data."' + column + '"') +
      ' FROM _resource_table_' +
      formid +
      ' data ' +
      'INNER JOIN _organisationunitstructure ous ON(ous.uid = data.ou AND ' +
      levelquery.join(' OR ') +
      ') ' +
      'INNER JOIN _periodstructure pes ON(' +
      periodquery.join(' OR ') +
      ')';
    console.log(query);
    let rows = await this.connetion.manager.query(query);
    analytics.height = rows.length;
    analytics.rows = rows.map(row => {
      let newRow = [];
      analytics.headers.forEach((header, index) => {
        newRow[index] = row[header.name];
      });
      return newRow;
    });
    query =
      'SELECT ou.uid,ou.name FROM  organisationunit ou WHERE (' +
      ou.map(o => "ou.uid = '" + o + "'").join(' OR ') +
      ') ';
    console.log(query);
    let organisationunits = await this.connetion.manager.query(query);
    organisationunits.forEach(orgUnit => {
      analytics.metaData.items[orgUnit.uid] = orgUnit.name;
      analytics.metaData.dimensions.ou.push(orgUnit.uid);
    });
    console.log('organisationunits:', organisationunits);
    return analytics;
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
}
