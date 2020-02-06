import { MigrationInterface, QueryRunner } from 'typeorm';

export class dashboard1570022532917 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let DashboardChart = await queryRunner.getTable('hris_dashboardchart');

    if (DashboardChart) {
      await queryRunner.query('DROP TABLE "hris_dashboardchart" CASCADE');
      await queryRunner.query(
        'DROP TABLE "hris_dashboardchart_formmembers" CASCADE',
      );
      await queryRunner.query(
        'DROP TABLE "hris_dashboardchart_organisationunitmembers" CASCADE',
      );
    }
    let reportTable = `
    CREATE SEQUENCE reporttable_id_seq;
    CREATE TABLE public.reporttable
    (
        created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
        lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
        id integer NOT NULL DEFAULT nextval('reporttable_id_seq'::regclass),
        uid character varying(256) COLLATE pg_catalog."default" NOT NULL,
        code character varying(25) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
        name character varying(256) COLLATE pg_catalog."default" NOT NULL,
        description text COLLATE pg_catalog."default",
        lastupdatedby character varying COLLATE pg_catalog."default",
        publicaccess character varying(8) COLLATE pg_catalog."default",
        externalaccess boolean,
        measurecriteria character varying(255) COLLATE pg_catalog."default",
        regression boolean,
        cumulative boolean,
        sortorder integer,
        toplimit integer,
        rowtotals boolean,
        coltotals boolean,
        rowsubtotals boolean,
        colsubtotals boolean,
        hideemptyrows boolean,
        hideemptycolumns boolean,
        aggregationtype character varying(40) COLLATE pg_catalog."default",
        completedonly boolean,
        title character varying(255) COLLATE pg_catalog."default",
        subtitle character varying(255) COLLATE pg_catalog."default",
        hidetitle boolean,
        hidesubtitle boolean,
        digitgroupseparator character varying(40) COLLATE pg_catalog."default",
        displaydensity character varying(40) COLLATE pg_catalog."default",
        fontsize character varying(40) COLLATE pg_catalog."default",
        legenddisplaystyle character varying(40) COLLATE pg_catalog."default",
        legenddisplaystrategy character varying(40) COLLATE pg_catalog."default",
        numbertype character varying(40) COLLATE pg_catalog."default",
        showhierarchy boolean,
        showdimensionlabels boolean,
        skiprounding boolean,
        userid integer,
        CONSTRAINT "PK_91158829194a80a7fcb08e0190e" PRIMARY KEY (id),
        CONSTRAINT "UQ_9d0758db50c75aa64a192e728bd" UNIQUE (uid)
    ,
        CONSTRAINT "FK_6ca5710b2f45272a4910c3c07a7" FOREIGN KEY (userid)
            REFERENCES public."user" (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    
    `;
    await queryRunner.query(reportTable);

    let reportTableDimension = `
    CREATE SEQUENCE reporttabledimension_id_seq;
    CREATE TABLE public.reporttabledimension
(
    id integer NOT NULL DEFAULT nextval('reporttabledimension_id_seq'::regclass),
    dimension character varying COLLATE pg_catalog."default" NOT NULL,
    layout character varying COLLATE pg_catalog."default" NOT NULL,
    reporttableid integer,
    CONSTRAINT "PK_6b3166eb8a57015536612791c5a" PRIMARY KEY (id),
    CONSTRAINT "FK_9bf7bec5a45bea20166b484f492" FOREIGN KEY (reporttableid)
        REFERENCES public.reporttable (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
    `;

    await queryRunner.query(reportTableDimension);

    let reportTableDimensionItem = `
    CREATE SEQUENCE reporttabledimensionitem_id_seq;
    CREATE TABLE public.reporttabledimensionitem
(
    id integer NOT NULL DEFAULT nextval('reporttabledimensionitem_id_seq'::regclass),
    dimensionitem character varying(11) COLLATE pg_catalog."default" NOT NULL,
    dimensionitemtype character varying(50) COLLATE pg_catalog."default" NOT NULL,
    reporttabledimensionid integer,
    CONSTRAINT "PK_98a1f18782b4a37389c331b652f" PRIMARY KEY (id),
    CONSTRAINT "FK_b4e84cffb16b751af912cefdbdd" FOREIGN KEY (reporttabledimensionid)
        REFERENCES public.reporttabledimension (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;`;

    await queryRunner.query(reportTableDimensionItem);

    let chart = `
    CREATE SEQUENCE chart_id_seq;
    CREATE TABLE public.chart
(
    created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
    lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
    id integer NOT NULL DEFAULT nextval('chart_id_seq'::regclass),
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
    userid integer,
    CONSTRAINT "PK_70bd8b947df4a5a1fe16bef1a59" PRIMARY KEY (id),
    CONSTRAINT "UQ_cf81cace5af0e9c23b5dc255304" UNIQUE (uid)
,
    CONSTRAINT "FK_427aec9bc5164130f6eae1d90a7" FOREIGN KEY (userid)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
    `;
    await queryRunner.query(chart);

    let chartDimension = `
    CREATE SEQUENCE chartdimension_id_seq;

    CREATE TABLE public.chartdimension
    (
        id integer NOT NULL DEFAULT nextval('chartdimension_id_seq'::regclass),
        dimension character varying COLLATE pg_catalog."default" NOT NULL,
        layout character varying COLLATE pg_catalog."default" NOT NULL,
        chartid integer,
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
    `;
    await queryRunner.query(chartDimension);

    let chartDimensionItem = `
    CREATE SEQUENCE chartdimensionitem_id_seq;
    CREATE TABLE public.chartdimensionitem
    (
        id integer NOT NULL DEFAULT nextval('chartdimensionitem_id_seq'::regclass),
        dimensionitem character varying(11) COLLATE pg_catalog."default" NOT NULL,
        dimensionitemtype character varying(50) COLLATE pg_catalog."default" NOT NULL,
        chartdimensionid integer,
        CONSTRAINT "PK_be530f7142d1fc5e1cbe425a7f3" PRIMARY KEY (id),
        CONSTRAINT "FK_837c993ae13873e8b286fab7793" FOREIGN KEY (chartdimensionid)
            REFERENCES public.chartdimension (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;    
    `;
    await queryRunner.query(chartDimensionItem);

    let createMap = `
    CREATE SEQUENCE map_id_seq;


    CREATE TABLE public.map
(
    created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
    lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
    id integer NOT NULL DEFAULT nextval('map_id_seq'::regclass),
    uid character varying(256) COLLATE pg_catalog."default" NOT NULL,
    code character varying(25) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    name character varying(256) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    lastupdatedby character varying COLLATE pg_catalog."default",
    publicaccess character varying(8) COLLATE pg_catalog."default",
    externalaccess boolean,
    longitude double precision,
    latitude double precision,
    zoom integer,
    basemap character varying(255) COLLATE pg_catalog."default",
    title character varying(255) COLLATE pg_catalog."default",
    userid integer,
    CONSTRAINT "PK_185bdd1ac34d7826920077327a8" PRIMARY KEY (id),
    CONSTRAINT "UQ_80d808c0af1437004dd9ea5ddbc" UNIQUE (uid)
,
    CONSTRAINT "FK_0be45f5a8308835c8e96811dd83" FOREIGN KEY (userid)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;  
    `;
    await queryRunner.query(createMap);

    let createMapView = `
    CREATE SEQUENCE mapview_id_seq;

    CREATE TABLE public.mapview
(
    created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
    lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
    id integer NOT NULL DEFAULT nextval('mapview_id_seq'::regclass),
    uid character varying(256) COLLATE pg_catalog."default" NOT NULL,
    code character varying(25) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    name character varying(256) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    lastupdatedby character varying COLLATE pg_catalog."default",
    publicaccess character varying(8) COLLATE pg_catalog."default",
    externalaccess boolean,
    layer character varying(255) COLLATE pg_catalog."default" NOT NULL,
    aggregationtype character varying(40) COLLATE pg_catalog."default",
    startdate timestamp without time zone,
    enddate timestamp without time zone,
    followup boolean,
    method integer,
    classes integer,
    colorlow character varying(255) COLLATE pg_catalog."default",
    colorhigh character varying(255) COLLATE pg_catalog."default",
    colorscale character varying(255) COLLATE pg_catalog."default",
    radiuslow integer,
    radiushigh integer,
    opacity double precision,
    arearadius integer,
    hidden boolean,
    labels boolean,
    labelfontsize character varying(255) COLLATE pg_catalog."default",
    labelfontweight character varying(255) COLLATE pg_catalog."default",
    labelfontstyle character varying(255) COLLATE pg_catalog."default",
    labelfontcolor character varying(255) COLLATE pg_catalog."default",
    eventclustering boolean,
    eventcoordinatefield character varying(255) COLLATE pg_catalog."default",
    eventpointcolor character varying(255) COLLATE pg_catalog."default",
    eventpointradius integer,
    config text COLLATE pg_catalog."default",
    styledataitem jsonb,
    "mapId" integer,
    CONSTRAINT "PK_e91eaab92bcedd1471fa3fcc9fa" PRIMARY KEY (id),
    CONSTRAINT "UQ_350d2769d0858f25d756f8acd7a" UNIQUE (uid)
,
    CONSTRAINT "FK_3bfa265eb6e792d0dbc3fe85c18" FOREIGN KEY ("mapId")
        REFERENCES public.map (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
`;

    await queryRunner.query(createMapView);

    let createMapViewDimension = `
    CREATE SEQUENCE mapviewdimension_id_seq;

    CREATE TABLE public.mapviewdimension
(
    id integer NOT NULL DEFAULT nextval('mapviewdimension_id_seq'::regclass),
    dimension character varying COLLATE pg_catalog."default" NOT NULL,
    layout character varying COLLATE pg_catalog."default" NOT NULL,
    mapviewid integer,
    CONSTRAINT "PK_a6a75a8c577fb666bc57be2c2d2" PRIMARY KEY (id),
    CONSTRAINT "FK_fe22d28d352c563f4edd3ebeaab" FOREIGN KEY (mapviewid)
        REFERENCES public.mapview (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
`;

    await queryRunner.query(createMapViewDimension);

    let createMapViewDimensionItem = `
    CREATE SEQUENCE mapviewdimensionitem_id_seq;

    CREATE TABLE public.mapviewdimensionitem
    (
        id integer NOT NULL DEFAULT nextval('mapviewdimensionitem_id_seq'::regclass),
        dimensionitem character varying(11) COLLATE pg_catalog."default" NOT NULL,
        dimensionitemtype character varying(50) COLLATE pg_catalog."default" NOT NULL,
        mapviewdimensionid integer,
        CONSTRAINT "PK_ec137cc12c33dd04597de0ce868" PRIMARY KEY (id),
        CONSTRAINT "FK_775abe7dfee476a58905ecfa774" FOREIGN KEY (mapviewdimensionid)
            REFERENCES public.mapviewdimension (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;`;

    await queryRunner.query(createMapViewDimensionItem);

    let createTable = `   
    CREATE SEQUENCE dashboard_id_seq;
    CREATE SEQUENCE dashboarditem_id_seq;

    CREATE TABLE public.dashboard
(
    created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
    lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
    id integer NOT NULL DEFAULT nextval('dashboard_id_seq'::regclass),
    uid character varying(256) COLLATE pg_catalog."default" NOT NULL,
    code character varying(25) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    name character varying(256) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    lastupdatedby character varying COLLATE pg_catalog."default",
    publicaccess character varying(8) COLLATE pg_catalog."default",
    externalaccess boolean,
    favorite boolean,
    userid integer,
    CONSTRAINT "PK_8904b99a9c07185947c5d70bfde" PRIMARY KEY (id),
    CONSTRAINT "UQ_bb9e0587e0266172504bf6b5271" UNIQUE (uid)
,
    CONSTRAINT "FK_737e17e1bc64698b29a6112cb1a" FOREIGN KEY (userid)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default
    `;
    await queryRunner.query(createTable);
    let createItem = `
    CREATE TABLE public.dashboarditem
    (
        created timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
        lastupdated timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP,
        id integer NOT NULL DEFAULT nextval('dashboarditem_id_seq'::regclass),
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
        dashboardid integer,
        CONSTRAINT "PK_67334f4a46e4b156982eebb2dc4" PRIMARY KEY (id),
        CONSTRAINT "UQ_68394f9b2c87727e2dd06ea8029" UNIQUE (uid)
    ,
        CONSTRAINT "FK_1f928172b909a9c9df65c380c11" FOREIGN KEY (dashboardid)
            REFERENCES public.dashboard (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;    
`;
    await queryRunner.query(createItem);

    let createItemChart = `
    CREATE TABLE public.dashboarditemchart
    (
        dashboarditemid integer NOT NULL,
        chartid integer,
        CONSTRAINT "PK_e9099ec36cad6a07a2594862d1b" PRIMARY KEY (dashboarditemid),
        CONSTRAINT "FK_2a4cf99c672492b9792703be5e9" FOREIGN KEY (chartid)
            REFERENCES public.chart (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID,
        CONSTRAINT "FK_e9099ec36cad6a07a2594862d1b" FOREIGN KEY (dashboarditemid)
            REFERENCES public.dashboarditem (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    `;
    await queryRunner.query(createItemChart);

    let createItemMap = `CREATE TABLE public.dashboarditemmap
    (
        dashboarditemid integer NOT NULL,
        mapid integer,
        CONSTRAINT "PK_79a3dd33b9a52cf8b4651974eaa" PRIMARY KEY (dashboarditemid),
        CONSTRAINT "FK_4104a0bf67cafe1f444c8fd7d00" FOREIGN KEY (mapid)
            REFERENCES public.map (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID,
        CONSTRAINT "FK_79a3dd33b9a52cf8b4651974eaa" FOREIGN KEY (dashboarditemid)
            REFERENCES public.dashboarditem (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;
    `;

    await queryRunner.query(createItemMap);

    let createReportTable = `CREATE TABLE public.dashboarditemreporttable
    (
        dashboarditemid integer NOT NULL,
        reporttableid integer,
        CONSTRAINT "PK_6b028d0bfeb86d4b163ace6dd88" PRIMARY KEY (dashboarditemid),
        CONSTRAINT "FK_1977ea4544bad81e1ec3ab0e4d7" FOREIGN KEY (reporttableid)
            REFERENCES public.reporttable (id) MATCH SIMPLE
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
    `;
    await queryRunner.query(createReportTable);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
