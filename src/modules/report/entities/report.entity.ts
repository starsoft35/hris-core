import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('report', { schema: 'public' })
export class Report extends EntityCoreProps {
  static plural = 'reports';

  @PrimaryGeneratedColumn()
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'uri',
  })
  uri: string;

  @Column('text', {
    nullable: false,
    name: 'parameters',
  })
  parameters: string;

  @Column('character varying', {
    nullable: true,
    length: 11,
    default: () => 'NULL::character varying',
    name: 'uid',
  })
  dhisuid: string | null;

  @Column('character varying', {
    nullable: true,
    name: 'name',
  })
  active: boolean | null;

  @Column('date', {
    nullable: true,
    name: 'created',
  })
  openingDate: string | null;

  @Column('date', {
    nullable: true,
    name: 'lastupdated',
  })
  lastupdated: string | null;
}


// "lastUpdated": "2013-03-20T19:09:10.769",
//       "href": "https://play.dhis2.org/2.33.0/api/reports/Kvg1AhYHM8Q",
//       "id": "Kvg1AhYHM8Q",
//       "created": "2012-11-13T14:49:45.007",
//       "name": "ANC: 1st Visit Cumulative Chart",
//       "designContent":
// "displayName": "ANC: 1st Visit Cumulative Chart",
// "publicAccess": "--------",
// "type": "JASPER_REPORT_TABLE",
// "externalAccess": true,
// "cacheStrategy": "RESPECT_SYSTEM_SETTING",
// "favorite": false,
// "access": {
//   "read": true,
//   "update": true,
//   "externalize": true,
//   "delete": true,
//   "write": true,
//   "manage": true
// },
