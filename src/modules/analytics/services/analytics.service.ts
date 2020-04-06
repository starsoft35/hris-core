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
import { getWhereConditions } from 'src/core/utilities';

@Injectable()
export class AnalyticsService {
  constructor(private connetion: Connection) {

  }
  sampleAnalytics = {
    "wo7ITisRXeE": { "headers": [{ "name": "dx", "column": "Data", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "pe", "column": "Period", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "ou", "column": "Organisation unit", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "value", "column": "Value", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }], "metaData": { "items": { "2010": { "name": "2010" }, "2011": { "name": "2011" }, "2012": { "name": "2012" }, "2013": { "name": "2013" }, "2014": { "name": "2014" }, "2015": { "name": "2015" }, "2016": { "name": "2016" }, "2017": { "name": "2017" }, "2018": { "name": "2018" }, "2019": { "name": "2019" }, "2020": { "name": "2020" }, "ou": { "name": "Organisation unit" }, "dx": { "name": "Data" }, "pe": { "name": "Period" }, "m0frOspS7JY": { "name": "MOH - Tanzania" }, "wo7ITisRXeE": { "name": "Number of employments" } }, "dimensions": { "dx": ["wo7ITisRXeE"], "pe": ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"], "ou": ["m0frOspS7JY"], "co": [] } }, "rows": [["wo7ITisRXeE", "2010", "m0frOspS7JY", "5275"], ["wo7ITisRXeE", "2011", "m0frOspS7JY", "3310"], ["wo7ITisRXeE", "2012", "m0frOspS7JY", "5031"], ["wo7ITisRXeE", "2013", "m0frOspS7JY", "5207"], ["wo7ITisRXeE", "2014", "m0frOspS7JY", "7437"], ["wo7ITisRXeE", "2015", "m0frOspS7JY", "7498"], ["wo7ITisRXeE", "2016", "m0frOspS7JY", "718"], ["wo7ITisRXeE", "2017", "m0frOspS7JY", "1975"], ["wo7ITisRXeE", "2018", "m0frOspS7JY", "5650"], ["wo7ITisRXeE", "2019", "m0frOspS7JY", "340"]], "width": 4, "height": 36 },
    "yKypqIROIO9": { "headers": [{ "name": "dx", "column": "Data", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "ou", "column": "Organisation unit", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "value", "column": "Value", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }], "metaData": { "items": { "2010": { "name": "2010" }, "2011": { "name": "2011" }, "2012": { "name": "2012" }, "2013": { "name": "2013" }, "2014": { "name": "2014" }, "2015": { "name": "2015" }, "2016": { "name": "2016" }, "2017": { "name": "2017" }, "2018": { "name": "2018" }, "2019": { "name": "2019" }, "2020": { "name": "2020" }, "ou": { "name": "Organisation unit" }, "dx": { "name": "Data" }, "pe": { "name": "Period" }, "m0frOspS7JY": { "name": "MOH - Tanzania" }, "yKypqIROIO3": { "name": "Female" }, "yKypqIROIO9": { "name": "Male" } }, "dimensions": { "dx": ["yKypqIROIO9", "yKypqIROIO3"], "pe": [], "ou": ["m0frOspS7JY"], "co": [] } }, "rows": [["yKypqIROIO9", "m0frOspS7JY", "5275"], ["yKypqIROIO3", "m0frOspS7JY", "3310"]], "width": 4, "height": 36 },
    "yKypqIROIO4": { "headers": [{ "name": "dx", "column": "Data", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "pe", "column": "Period", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "ou", "column": "Organisation unit", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "value", "column": "Value", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }], "metaData": { "items": { "2010": { "name": "20-24" }, "2011": { "name": "25-29" }, "2012": { "name": "30-34" }, "2013": { "name": "35-39" }, "2014": { "name": "40-44" }, "2015": { "name": "45-49" }, "2016": { "name": "50-54" }, "2017": { "name": "55-59" }, "2018": { "name": "60-64" }, "2019": { "name": "65-69" }, "2020": { "name": "70-74" }, "ou": { "name": "Organisation unit" }, "dx": { "name": "Data" }, "pe": { "name": "Period" }, "m0frOspS7JY": { "name": "MOH - Tanzania" }, "wo7ITisRXeE": { "name": "Number of employees by age" } }, "dimensions": { "dx": ["wo7ITisRXeE"], "pe": ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"], "ou": ["m0frOspS7JY"], "co": [] } }, "rows": [["wo7ITisRXeE", "2010", "m0frOspS7JY", "0"], ["wo7ITisRXeE", "2011", "m0frOspS7JY", "1188"], ["wo7ITisRXeE", "2012", "m0frOspS7JY", "13714"], ["wo7ITisRXeE", "2013", "m0frOspS7JY", "16401"], ["wo7ITisRXeE", "2014", "m0frOspS7JY", "10221"], ["wo7ITisRXeE", "2015", "m0frOspS7JY", "10841"], ["wo7ITisRXeE", "2016", "m0frOspS7JY", "9725"], ["wo7ITisRXeE", "2017", "m0frOspS7JY", "10320"], ["wo7ITisRXeE", "2018", "m0frOspS7JY", "9834"], ["wo7ITisRXeE", "2019", "m0frOspS7JY", "4076"]], "width": 4, "height": 36 },
    "any": { "headers": [{ "name": "dx", "column": "Data", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "pe", "column": "Period", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "ou", "column": "Organisation unit", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "value", "column": "Value", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }], "metaData": { "items": { "201907": { "name": "July 2019" }, "MqMQnGOqLuY": { "name": "KE" }, "201906": { "name": "June 2019" }, "201909": { "name": "September 2019" }, "201908": { "name": "August 2019" }, "201903": { "name": "March 2019" }, "201902": { "name": "February 2019" }, "yKypqIROIO9": { "name": "Watoto Waliopatiwa LLIN" }, "201905": { "name": "May 2019" }, "ou": { "name": "Organisation unit" }, "201904": { "name": "April 2019" }, "201910": { "name": "October 2019" }, "201901": { "name": "January 2019" }, "201912": { "name": "December 2019" }, "201911": { "name": "November 2019" }, "X0Me7ygpiUT": { "name": "ME" }, "dx": { "name": "Data" }, "pe": { "name": "Period" }, "Kl9MzjQI3ms": { "name": "Expected children Under 1 Year" }, "m0frOspS7JY": { "name": "MOH - Tanzania" }, "wo7ITisRXeE": { "name": "Measles/Rubella 1 doses given" } }, "dimensions": { "dx": ["Kl9MzjQI3ms", "wo7ITisRXeE", "yKypqIROIO9"], "pe": ["201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909", "201910", "201911", "201912"], "ou": ["m0frOspS7JY"], "co": ["MqMQnGOqLuY", "X0Me7ygpiUT"] } }, "rows": [["Kl9MzjQI3ms", "201901", "m0frOspS7JY", "2.36250253E7"], ["Kl9MzjQI3ms", "201902", "m0frOspS7JY", "2.6156278E7"], ["Kl9MzjQI3ms", "201903", "m0frOspS7JY", "2.36250253E7"], ["Kl9MzjQI3ms", "201904", "m0frOspS7JY", "2.44125262E7"], ["Kl9MzjQI3ms", "201905", "m0frOspS7JY", "2.36250253E7"], ["Kl9MzjQI3ms", "201906", "m0frOspS7JY", "2.44125262E7"], ["Kl9MzjQI3ms", "201907", "m0frOspS7JY", "2.36250253E7"], ["Kl9MzjQI3ms", "201908", "m0frOspS7JY", "2.36250253E7"], ["Kl9MzjQI3ms", "201909", "m0frOspS7JY", "2.44125262E7"], ["Kl9MzjQI3ms", "201910", "m0frOspS7JY", "2.36250253E7"], ["Kl9MzjQI3ms", "201911", "m0frOspS7JY", "2.44125262E7"], ["Kl9MzjQI3ms", "201912", "m0frOspS7JY", "2.36250253E7"], ["wo7ITisRXeE", "201901", "m0frOspS7JY", "172808.0"], ["wo7ITisRXeE", "201902", "m0frOspS7JY", "164532.0"], ["wo7ITisRXeE", "201903", "m0frOspS7JY", "171820.0"], ["wo7ITisRXeE", "201904", "m0frOspS7JY", "162847.0"], ["wo7ITisRXeE", "201905", "m0frOspS7JY", "181111.0"], ["wo7ITisRXeE", "201906", "m0frOspS7JY", "167957.0"], ["wo7ITisRXeE", "201907", "m0frOspS7JY", "177640.0"], ["wo7ITisRXeE", "201908", "m0frOspS7JY", "181368.0"], ["wo7ITisRXeE", "201909", "m0frOspS7JY", "177983.0"], ["wo7ITisRXeE", "201910", "m0frOspS7JY", "204312.0"], ["wo7ITisRXeE", "201911", "m0frOspS7JY", "155853.0"], ["wo7ITisRXeE", "201912", "m0frOspS7JY", "139938.0"], ["yKypqIROIO9", "201910", "m0frOspS7JY", "134130.0"], ["yKypqIROIO9", "201911", "m0frOspS7JY", "126009.0"], ["yKypqIROIO9", "201902", "m0frOspS7JY", "127274.0"], ["yKypqIROIO9", "201909", "m0frOspS7JY", "146883.0"], ["yKypqIROIO9", "201901", "m0frOspS7JY", "134887.0"], ["yKypqIROIO9", "201903", "m0frOspS7JY", "135008.0"], ["yKypqIROIO9", "201912", "m0frOspS7JY", "105449.0"], ["yKypqIROIO9", "201906", "m0frOspS7JY", "133842.0"], ["yKypqIROIO9", "201905", "m0frOspS7JY", "140172.0"], ["yKypqIROIO9", "201907", "m0frOspS7JY", "146057.0"], ["yKypqIROIO9", "201908", "m0frOspS7JY", "149497.0"], ["yKypqIROIO9", "201904", "m0frOspS7JY", "126747.0"]], "width": 4, "height": 36 }
  }
  async fetchAnalytics(dx: any, pe: any, ou: any, context: any) {
    console.log(dx, pe, ou, context);
    if (dx[0] !== '52893cd128bd2.wo7ITisRXeE') {
      return this.sampleAnalytics[dx] ? this.sampleAnalytics[dx] : this.sampleAnalytics['any'];
    } else {
      let analytics = { "headers": [{ "name": "dx", "column": "Data", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "pe", "column": "Period", "valueType": "TEXT", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "value", "column": "Value", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }, { "name": "numerator", "column": "Numerator", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }, { "name": "denominator", "column": "Denominator", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }, { "name": "factor", "column": "Factor", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }, { "name": "multiplier", "column": "Multiplier", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }, { "name": "divisor", "column": "Divisor", "valueType": "NUMBER", "type": "java.lang.Double", "hidden": false, "meta": false }], "rows": [], "height": 3, "width": 8 };
      for (let id of dx) {
        for (let orgUnit of ou) {
          for (let period of this.getISOPeriods(pe)) {
            let [formuid, indicatoruid] = id.split('.');
            let query = 'SELECT * FROM indicator WHERE uid =\'' + indicatoruid + '\';';
            let indicators = await this.connetion.manager.query(query);
            indicators = [
              {
                expression: "COUNT(*)",
                filter: "created>=startOfReportingPeriod AND created<=endOfReportingPeriod"
              }
            ]
            query = 'SELECT level FROM organisationunitlevel';
            let orglevels = await this.connetion.manager.query(query);
            let levelquery = orglevels.map(
              orglevel =>
                'ous.uidlevel' + orglevel.level + " = '" + orgUnit + "' AND data.ou=ous.uidlevel" + orglevel.level,
            );

            query =
              `SELECT ${indicators[0].expression} FROM _resource_table_${formuid} data
        INNER JOIN _organisationunitstructure ous ON((${levelquery.join(') OR (')})) 
        INNER JOIN _periodstructure pe ON(pe.iso='${period}') 
        WHERE ${indicators[0].filter.replace('startOfReportingPeriod', 'pe.startdate').replace('endOfReportingPeriod', 'pe.enddate')}`;
            //+ 'INNER JOIN _periodstructure pes ON(' + periodquery.join(' OR ') + ')';
            console.log(query);
            let result = await this.connetion.manager.query(query);
            analytics.rows.push([
              id,
              orgUnit,
              period,
              result[0].count
            ])
          }
        }
      }
      return analytics;
    }
  }
  getISOPeriods(periods) {
    let returnPeriods = [];
    periods.forEach((period) => {
      if (period === 'LAST_10_YEARS') {
        for (let i = (new Date()).getFullYear() - 10; i < (new Date()).getFullYear(); i++) {
          returnPeriods.push("" + i);
        }
      } else {
        returnPeriods.push(period);
      }
    })
    return returnPeriods;
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
      `SELECT field.uid,field.caption FROM field 
      INNER JOIN formfieldmember ON(formfieldmember.fieldid = field.id) 
      INNER JOIN form ON(form.id = formfieldmember.formid AND form.uid ='${formid}');`;
    console.log('Query:',query);
    let fields = await this.connetion.manager.query(query);
    fields.forEach(field => {
      //console.log(field);
      if (Object.keys(otherDimensions).indexOf(field.uid) > -1) {
        analytics.metaData.items[field.uid] = { name: field.caption };
      }
    });
    console.log('Here');
    // Dealing with headers
    let headers = await this.connetion.manager.query(
      'SELECT columns.table_name,columns.column_name,' +
      'columns.data_type, columns.column_default, columns.is_nullable FROM information_schema.columns' +
      " WHERE table_name = '_resource_table_" +
      formid +
      "'",
    );
    console.log('Here1');
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
      let whereCondition = getWhereConditions(p);
      console.log('whereCondition:', p, whereCondition);
      let [dx,operator,operand] = p.split(':');
      analytics.metaData.dimensions.pe.push(operand);
      if(operator == 'lt'){
        return `(data."${dx}" < pes.enddate AND pes.iso='${operand}')`;
      }
      return `(data."${dx}" BETWEEN pes.startdate AND pes.enddate AND pes.iso='${operand}')`;
    });
    //TODO improve performance for fetching alot of data
    query =
      `SELECT ${allowedColumns.map(column => 'data."' + column + '"')} FROM _resource_table_${formid} data
      INNER JOIN _organisationunitstructure ous ON(ous.uid = data.ou AND ${levelquery.join(' OR ')})
      INNER JOIN _periodstructure pes ON(${periodquery.join(' OR ')}) LIMIT 200000`;
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
  async getTrainingCoverageRecords(formid, ou, pe, otherDimensions) {
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
      `SELECT field.uid,field.caption FROM field 
      INNER JOIN formfieldmember ON(formfieldmember.fieldid = field.id) 
      INNER JOIN form ON(form.id = formfieldmember.formid AND form.uid ='${formid}');`;
    console.log('Query:',query);
    let fields = await this.connetion.manager.query(query);
    fields.forEach(field => {
      //console.log(field);
      if (Object.keys(otherDimensions).indexOf(field.uid) > -1) {
        analytics.metaData.items[field.uid] = { name: field.caption };
      }
    });
    console.log('Here');
    // Dealing with headers
    let headers = await this.connetion.manager.query(
      'SELECT columns.table_name,columns.column_name,' +
      'columns.data_type, columns.column_default, columns.is_nullable FROM information_schema.columns' +
      " WHERE table_name = '_resource_table_" +
      formid +
      "'",
    );
    console.log('Here1');
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
      let whereCondition = getWhereConditions(p);
      console.log('whereCondition:', p, whereCondition);
      let [dx,operator,operand] = p.split(':');
      analytics.metaData.dimensions.pe.push(operand);
      if(operator == 'lt'){
        return `(data."${dx}" < pes.enddate AND pes.iso='${operand}')`;
      }
      return `(data."${dx}" BETWEEN pes.startdate AND pes.enddate AND pes.iso='${operand}')`;
    });
    let groups = await this.connetion.manager.query('SELECT id,uid FROM organisationunitgroup');
    //TODO improve performance for fetching alot of data
    query =
      `SELECT ous.uid,
      ${orglevels.map(
        orglevel =>
          'ous.uidlevel' + orglevel.level + ", namelevel" + orglevel.level,
      ).join(', ')},
      ${groups.map(
        group =>
          'ous."' + group.uid + '"',
      ).join(', ')},
      COUNT(record.*) as providers FROM _organisationunitstructure ous
      LEFT JOIN record ON(record.organisationunitid=ous.organisationunitid)
      WHERE ${levelquery.join(' OR ')}
      GROUP BY ous.uid,${orglevels.map(
        orglevel =>
          'ous.uidlevel' + orglevel.level + ", namelevel" + orglevel.level,
      ).join(', ')}
      ,${groups.map(
        group =>
        'ous."' + group.uid + '"',
      ).join(', ')}`;
      analytics.headers = orglevels.map(
        orglevel =>{
          return {
            name:"namelevel" + orglevel.level
          }
        }
      );
      analytics.headers = analytics.headers.concat(groups.map(
        group =>
        {
          return {
            name:group.uid
          }
        }
      ));
      analytics.headers.push({
        name:'providers'
      })
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
      return 'DATETIME'
    } else if (type === 'character varying') {
      return 'TEXT'
    } else if (type === 'integer') {
      return 'INTEGER'
    } else {
      return type
    }
  }
}
