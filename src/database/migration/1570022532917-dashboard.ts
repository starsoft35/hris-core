import {MigrationInterface, QueryRunner} from "typeorm";

export class dashboard1570022532917 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let DashboardChart = await queryRunner.getTable('hris_dashboardchart');

    if (DashboardChart){
        await queryRunner.query('DROP TABLE "hris_dashboardchart"');     
        await queryRunner.query('DROP TABLE "hris_dashboardchart_formmembers"');
        await queryRunner.query('DROP TABLE "hris_dashboardchart_organisationunitmembers"');
    }
    let createTable = `    
    CREATE TABLE public.dashboard
    (
        created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
        lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
        dashboardid integer NOT NULL DEFAULT nextval('dashboard_id_seq'::regclass),
        uid character varying(256) COLLATE pg_catalog."default" NOT NULL,
        code character varying(25) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
        name character varying(256) COLLATE pg_catalog."default" NOT NULL,
        description text COLLATE pg_catalog."default",
        lastupdatedby character varying COLLATE pg_catalog."default",
        publicaccess character varying(8) COLLATE pg_catalog."default",
        externalaccess boolean,
        favorites jsonb,
        userid character varying(256) COLLATE pg_catalog."default",
        CONSTRAINT "PK_bb9e0587e0266172504bf6b5271" PRIMARY KEY (dashboardid),
        CONSTRAINT "FK_737e17e1bc64698b29a6112cb1a" FOREIGN KEY (userid)
            REFERENCES public."user" (uid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    `
        await queryRunner.query(createTable);
let createItem = `
CREATE TABLE public.dashboarditem
(
    created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
    lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
    dashboarditemid integer NOT NULL DEFAULT nextval('dashboarditem_id_seq'::regclass),
    uid character varying(256) COLLATE pg_catalog."default" NOT NULL,
    code character varying(25) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    name character varying(256) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    lastupdatedby character varying COLLATE pg_catalog."default",
    publicaccess character varying(8) COLLATE pg_catalog."default",
    externalaccess boolean,
    appkey character varying(255) COLLATE pg_catalog."default",
    shape character varying(50) COLLATE pg_catalog."default",
    x integer,
    y integer,
    height integer,
    width integer,
    dashboardid character varying(256) COLLATE pg_catalog."default",
    CONSTRAINT "PK_68394f9b2c87727e2dd06ea8029" PRIMARY KEY (dashboarditemid),
    CONSTRAINT "FK_1f928172b909a9c9df65c380c11" FOREIGN KEY (dashboardid)
        REFERENCES public.dashboard (uid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
`
    await queryRunner.query(createItem);

    let createItemChart = `
    CREATE TABLE public.dashboarditemchart
    (
        dashboarditemid character varying(256) COLLATE pg_catalog."default" NOT NULL,
        chartid character varying(256) COLLATE pg_catalog."default",
        CONSTRAINT "PK_e9099ec36cad6a07a2594862d1b" PRIMARY KEY (dashboarditemid),
        CONSTRAINT "FK_2a4cf99c672492b9792703be5e9" FOREIGN KEY (chartid)
            REFERENCES public.chart (uid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID,
        CONSTRAINT "FK_e9099ec36cad6a07a2594862d1b" FOREIGN KEY (dashboarditemid)
            REFERENCES public.dashboarditem (uid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    `
    await queryRunner.query(createItemChart);

    let createItemMap = `CREATE TABLE public.dashboarditemmap
    (
        dashboarditemid character varying(256) COLLATE pg_catalog."default" NOT NULL,
        mapid character varying(256) COLLATE pg_catalog."default",
        CONSTRAINT "PK_79a3dd33b9a52cf8b4651974eaa" PRIMARY KEY (dashboarditemid),
        CONSTRAINT "FK_4104a0bf67cafe1f444c8fd7d00" FOREIGN KEY (mapid)
            REFERENCES public.map (uid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID,
        CONSTRAINT "FK_79a3dd33b9a52cf8b4651974eaa" FOREIGN KEY (dashboarditemid)
            REFERENCES public.dashboarditem (uid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    `

    await queryRunner.query(createItemMap);

    let createReportTable = `CREATE TABLE public.dashboarditemreporttable
    (
        dashboarditemid character varying(256) COLLATE pg_catalog."default" NOT NULL,
        reporttableid character varying(256) COLLATE pg_catalog."default",
        CONSTRAINT "PK_6b028d0bfeb86d4b163ace6dd88" PRIMARY KEY (dashboarditemid),
        CONSTRAINT "FK_1977ea4544bad81e1ec3ab0e4d7" FOREIGN KEY (reporttableid)
            REFERENCES public.reporttable (uid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID,
        CONSTRAINT "FK_6b028d0bfeb86d4b163ace6dd88" FOREIGN KEY (dashboarditemid)
            REFERENCES public.dashboarditem (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    
    `
    await queryRunner.query(createReportTable);

    let app = `CREATE TABLE public.app
    (
        created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
        lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
        appid integer NOT NULL DEFAULT nextval('app_id_seq'::regclass),
        uid character varying(256) COLLATE pg_catalog."default" NOT NULL,
        code character varying(25) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
        name character varying(256) COLLATE pg_catalog."default" NOT NULL,
        description text COLLATE pg_catalog."default",
        lastupdatedby character varying COLLATE pg_catalog."default",
        publicaccess character varying(8) COLLATE pg_catalog."default",
        externalaccess boolean,
        "shortName" character varying(50) COLLATE pg_catalog."default",
        version character varying(255) COLLATE pg_catalog."default" NOT NULL,
        launchpath character varying(255) COLLATE pg_catalog."default" NOT NULL,
        appicon character varying(128) COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT "PK_8c37a357a9e04230aa9d0bfa63b" PRIMARY KEY (appid)
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    `
    await queryRunner.query(app);

    let chart = `CREATE TABLE public.chart
    (
        created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
        lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
        chartid integer NOT NULL DEFAULT nextval('chart_id_seq'::regclass),
        uid character varying(256) COLLATE pg_catalog."default" NOT NULL,
        code character varying(25) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
        name character varying(256) COLLATE pg_catalog."default" NOT NULL,
        description text COLLATE pg_catalog."default",
        lastupdatedby character varying COLLATE pg_catalog."default",
        publicaccess character varying(8) COLLATE pg_catalog."default",
        externalaccess boolean,
        domainaxislabel character varying(255) COLLATE pg_catalog."default",
        rangeaxislabel character varying(255) COLLATE pg_catalog."default",
        type character varying(40) COLLATE pg_catalog."default" NOT NULL,
        series character varying(255) COLLATE pg_catalog."default",
        category character varying(255) COLLATE pg_catalog."default",
        hidelegend boolean,
        nospacebetweencolumns boolean,
        regressiontype character varying(40) COLLATE pg_catalog."default" NOT NULL,
        title character varying(255) COLLATE pg_catalog."default",
        subtitle character varying(255) COLLATE pg_catalog."default",
        hidetitle boolean,
        hidesubtitle boolean,
        targetlinevalue double precision,
        targetlinelabel character varying(255) COLLATE pg_catalog."default",
        baselinevalue double precision,
        baselinelabel character varying(255) COLLATE pg_catalog."default",
        aggregationtype character varying(40) COLLATE pg_catalog."default",
        completedonly boolean,
        showdata boolean,
        hideemptyrowitems character varying(40) COLLATE pg_catalog."default",
        percentstackedvalues boolean,
        cumulativevalues boolean,
        rangeaxismaxvalue double precision,
        rangeaxisminvalue double precision,
        rangeaxissteps integer,
        rangeaxisdecimals integer,
        legenddisplaystrategy character varying(40) COLLATE pg_catalog."default",
        sortorder integer,
        userid character varying(256) COLLATE pg_catalog."default",
        CONSTRAINT "PK_cf81cace5af0e9c23b5dc255304" PRIMARY KEY (chartid),
        CONSTRAINT "FK_427aec9bc5164130f6eae1d90a7" FOREIGN KEY (userid)
            REFERENCES public."user" (userid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    `
    await queryRunner.query(chart);
    
    let chartDimension = `CREATE TABLE public.chartdimension
    (
        chartdimensionid integer NOT NULL DEFAULT nextval('chartdimension_id_seq'::regclass),
        dimension character varying COLLATE pg_catalog."default" NOT NULL,
        layout character varying COLLATE pg_catalog."default" NOT NULL,
        chartid character varying(256) COLLATE pg_catalog."default",
        CONSTRAINT "PK_ddb519ec8c1b89b40783241ae88" PRIMARY KEY (id),
        CONSTRAINT "FK_1a2610f0c9f9434c97448f9711a" FOREIGN KEY (chartid)
            REFERENCES public.chart (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    `
    await queryRunner.query(chartDimension);

    let chartDimensionItem = `CREATE TABLE public.chartdimensionitem
    (
        chartdimensionitemid integer NOT NULL DEFAULT nextval('chartdimensionitem_id_seq'::regclass),
        dimensionitem character varying(11) COLLATE pg_catalog."default" NOT NULL,
        dimensionitemtype character varying(50) COLLATE pg_catalog."default" NOT NULL,
        chartdimensionid integer,
        CONSTRAINT "PK_be530f7142d1fc5e1cbe425a7f3" PRIMARY KEY (chartdimensionitemid),
        CONSTRAINT "FK_837c993ae13873e8b286fab7793" FOREIGN KEY (chartdimensionid)
            REFERENCES public.chartdimension (chartdimensionid) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    `
    await queryRunner.query(chartDimensionItem);
}

public async down(queryRunner: QueryRunner): Promise<any> {
}

}
