import {MigrationInterface, QueryRunner} from "typeorm";

export class Indicator1570180231706 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let createQuery = 'CREATE TABLE indicator' +
            '(indicatorid integer NOT NULL,uid character varying(20) COLLATE pg_catalog."default",' +
                'code character varying(50) COLLATE pg_catalog."default",created timestamp without time zone,'+
                'lastupdated timestamp without time zone,name character varying(230) COLLATE pg_catalog."default" NOT NULL,' +
                'shortname character varying(255) COLLATE pg_catalog."default",description text COLLATE pg_catalog."default",' +
                'formid integer, expression text COLLATE pg_catalog."default",filter text COLLATE pg_catalog."default",'+
                'aggregationtype character varying(40) COLLATE pg_catalog."default",lastupdatedby integer,' +
                'analyticstype character varying(15) COLLATE pg_catalog."default" NOT NULL,CONSTRAINT indicator_pkey PRIMARY KEY(indicatorid),' +
                'CONSTRAINT fk_indicator_form FOREIGN KEY(formid) REFERENCES public.form(formid) MATCH SIMPLE '+
                'ON UPDATE NO ACTION ON DELETE NO ACTION)';
        await queryRunner.query(createQuery);
        await queryRunner.query("INSERT INTO indicator(indicatorid, uid, created, lastupdated, name, shortname, description, formid, expression, filter, aggregationtype, analyticstype)" +
            "VALUES((SELECT COUNT(*) + 1 FROM indicator), uid(), now(), now(), 'Forecast Retirement', 'Forecast Retirement', 'Calculates the retirement', 5, 'COUNT(*)'," +
            "'${start_of_reporting_period}', 'SUM', 'RECORDS');");
        await queryRunner.query("INSERT INTO indicator(indicatorid, uid, created, lastupdated, name, shortname, description, formid, expression, filter, aggregationtype, analyticstype)" +
            "VALUES ((SELECT COUNT(*) + 1 FROM indicator), uid(), now(), now(), 'Number of Employees', 'Number of Employees', 'Calculates the number of Employees', 5, 'COUNT(*)'," +
            "'','SUM', 'RECORDS');");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
