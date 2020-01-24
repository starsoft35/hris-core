import { Task } from '../entities/task.entity';
import { BackgroundProcess } from './base.process';
import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TaskService } from '../services/task.service';

@Injectable()
export class OrgUnitGenerator extends BackgroundProcess{
    constructor(private taskService: TaskService,private connetion:Connection){
        super(taskService);
    }
    async run(){
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
    }
}
