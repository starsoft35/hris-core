import { MigrationInterface, QueryRunner } from 'typeorm';

export class defaultdashaboards1580972628403 implements MigrationInterface {
  name = 'defaultdashaboards1580972628403';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    INSERT INTO dashboard(id, lastUpdated, href, uid, created, name, "displayName", publicAccess, externalAccess, "itemCount", favorite)
    VALUES('1', '2019-07-26', 'https://dhis.hisptz.org/dev/api/dashboards/tFPbgxRf1bc', 'tFPbgxRf1bc', '2016-02-01', 'Employment Status', 'Employment Status', '--------', false, 7, false)
    `);

    await queryRunner.query(`INSERT INTO dashboard(id, lastUpdated, href, uid, created, name, "displayName", publicAccess, externalAccess, "itemCount", favorite)
    VALUES('2', '2019-07-26', 'https://dhis.hisptz.org/dev/api/dashboards/tFPbgxRf1bc', 'tFPbgxRf1b1', '2016-02-01', 'History', 'History', '--------', false, 7, false)
    `);

    await queryRunner.query(`INSERT INTO dashboard(id, lastUpdated, href, uid, created, name, "displayName", publicAccess, externalAccess, "itemCount", favorite)
       VALUES('3', '2019-07-26T09:59:27.089', 'https://dhis.hisptz.org/dev/api/dashboards/tFPbgxRf1dc', 'tFPbgxRf1dc', '2016-02-01T12:56:49.152', 'Training', 'Training', '--------', true, 7, true)`);

    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2018-03-05T16:16:01.753', 'otxQlKW9WI1', 'https://dhis.hisptz.org/dev/api/dashboardItems/otxQlKW9WI1', '2016-02-03T02:53:42.874', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  1)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2018-08-03T14:25:37.031', 'zFnZNKX7cLJ', 'https://dhis.hisptz.org/dev/api/dashboardItems/zFnZNKX7cLJ', '2016-02-03T02:59:19.485', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  1)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2016-02-03T02:53:19.584', 'wZK5CdXVJKt', 'https://dhis.hisptz.org/dev/api/dashboardItems/wZK5CdXVJKt', '2016-02-03T02:53:42.874', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  1)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2017-03-29T08:50:35.044', 'bBitVEBVOu2', 'https://dhis.hisptz.org/dev/api/dashboardItems/bBitVEBVOu2', '2016-02-03T02:54:04.799', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  1)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2018-03-05T16:16:01.753', 'otxQlKW9WI1', 'https://dhis.hisptz.org/dev/api/dashboardItems/otxQlKW9WI1', '2016-02-03T02:53:42.874', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  2)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2016-02-03T02:53:19.584', 'wZK5CdXVJKt', 'https://dhis.hisptz.org/dev/api/dashboardItems/wZK5CdXVJKt', '2016-02-03T02:53:42.874', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  2)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2017-03-29T08:50:35.044', 'bBitVEBVOu2', 'https://dhis.hisptz.org/dev/api/dashboardItems/bBitVEBVOu2', '2016-02-03T02:54:04.799', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  2)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2016-11-08T12:39:16.084', 'RwvCPXYEM3J', 'https://dhis.hisptz.org/dev/api/dashboardItems/RwvCPXYEM3J', '2016-02-03T02:54:27.380', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  2)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2016-11-08T12:39:22.672', 'WkciCuVBM2m', 'https://dhis.hisptz.org/dev/api/dashboardItems/WkciCuVBM2m', '2016-02-03T02:56:32.641', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  2)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2017-03-26T21:45:11.340', 'T37G5hyPbHO', 'https://dhis.hisptz.org/dev/api/dashboardItems/T37G5hyPbHO', '2016-02-03T02:53:56.605', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  2)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2018-03-05T16:16:01.753', 'otxQlKW9WI1', 'https://dhis.hisptz.org/dev/api/dashboardItems/otxQlKW9WI1', '2016-02-03T02:53:42.874', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  3)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2016-11-08T12:38:42.990', 'wZK5CdXVJKt', 'https://dhis.hisptz.org/dev/api/dashboardItems/wZK5CdXVJKt', '2016-02-03T02:53:19.584', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  3)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2017-03-29T08:50:35.044', 'bBitVEBVOu2', 'https://dhis.hisptz.org/dev/api/dashboardItems/bBitVEBVOu2', '2016-02-03T02:54:04.799', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  3)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2016-11-08T12:39:16.084', 'RwvCPXYEM3J', 'https://dhis.hisptz.org/dev/api/dashboardItems/RwvCPXYEM3J', '2016-02-03T02:54:27.380', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  3)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
       VALUES('2016-11-08T12:39:22.672', 'WkciCuVBM2m', 'https://dhis.hisptz.org/dev/api/dashboardItems/WkciCuVBM2m', '2016-02-03T02:56:32.641', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  3)`);
    await queryRunner.query(`INSERT INTO dashboarditem(lastUpdated, uid, href, created, type, externalAccess, "contentCount", shape, "interpretationCount", "interpretationLikeCount", favorite, dashboardid)
      VALUES('2017-03-26T21:45:11.340', 'T37G5hyPbHO', 'https://dhis.hisptz.org/dev/api/dashboardItems/T37G5hyPbHO', '2016-02-03T02:53:56.605', 'CHART', false, 1, 'FULL_WIDTH', 0, 0, false,  3)`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
