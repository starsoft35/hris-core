import { Injectable } from '@nestjs/common';
import { differenceInDays, endOfMonth, endOfQuarter, endOfWeek, endOfYear, format, getDaysInMonth, getDaysInYear, startOfMonth, startOfQuarter, startOfWeek, startOfYear } from 'date-fns';
import { Connection } from 'typeorm';
import { TaskService } from '../services/task.service';
import { BackgroundProcess } from './base.process';

@Injectable()
export class PeriodGenerator extends BackgroundProcess {
  constructor(taskService: TaskService,private connetion:Connection){
    super(taskService);
  }
  async run() {
    await this.connetion.manager.query('DROP TABLE IF EXISTS _periodstructure');
    await this.connetion.manager.query(
      `CREATE TABLE _periodstructure(
        iso character varying(15) COLLATE pg_catalog."default" NOT NULL,
        daysno integer NOT NULL,
        startdate timestamp NOT NULL,
        enddate timestamp NOT NULL,
        CONSTRAINT _periodstructure_temp_pkey PRIMARY KEY(iso)
      )`,
    );
    let query = `SELECT value FROM recordvalue 
      INNER JOIN field f ON(recordvalue.fieldid=f.id) 
      INNER JOIN fielddatatype dt ON(dt.id = f."dataTypeId" AND dt.name = 'Date') 
      GROUP BY value`;
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
  }
  async getProcessName(){
    return "Period Table";
  }
}
