import { Column, Entity, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { hris_intergration_dhis_dataconnection } from "./hris_intergration_dhis_dataconnection";
import { hris_intergration_tiis_data_connection } from "./hris_intergration_tiis_data_connection";
import { hris_organisationunitcompleteness } from "./hris_organisationunitcompleteness";
import { hris_organisationunitstructure } from "./hris_organisationunitstructure";
import { hris_traininginstance } from "./hris_traininginstance";
import { User } from "./user";
import { hris_organisationunitgroup } from "./hris_organisationunitgroup";
import { hris_dashboardchart } from "./hris_dashboardchart";
@Entity("hris_organisationunit", { schema: "public" })
@Index("uniq_9394222277153098", ["code",], { unique: true })
@Index("uniq_939422227f0db905", ["dhisuid",], { unique: true })
@Index("organisationunits_with_one_parent_idx", ["longname", "parent_",], { unique: true })
@Index("idx_93942222727aca70", ["parent_",])
@Index("uniq_9394222264082763", ["shortname",], { unique: true })
@Index("uniq_93942222539b0606", ["uid",], { unique: true })
export class hris_organisationunit {
    @Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;
    @ManyToOne(type => hris_organisationunit, hris_organisationunit => hris_organisationunit.hris_organisationunits, { onDelete: 'CASCADE', })
    @JoinColumn({ name: 'parent_id' })
    parent_: hris_organisationunit | null;
    @Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    })
    uid: string;
    @Column("character varying", {
        nullable: true,
        length: 11,
        default: () => "NULL::character varying",
        name: "dhisuid"
    })
    dhisuid: string | null;
    @Column("character varying", {
        nullable: true,
        length: 25,
        default: () => "NULL::character varying",
        name: "code"
    })
    code: string | null;
    @Column("character varying", {
        nullable: false,
        length: 20,
        name: "shortname"
    })
    shortname: string;
    @Column("character varying", {
        nullable: false,
        length: 64,
        name: "longname"
    })
    longname: string;
    @Column("boolean", {
        nullable: true,
        name: "active"
    })
    active: boolean | null;
    @Column("date", {
        nullable: true,
        name: "openingdate"
    })
    openingdate: string | null;
    @Column("date", {
        nullable: true,
        name: "closingdate"
    })
    closingdate: string | null;
    @Column("character varying", {
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
        name: "geocode"
    })
    geocode: string | null;
    @Column("text", {
        nullable: true,
        name: "coordinates"
    })
    coordinates: string | null;
    @Column("character varying", {
        nullable: true,
        length: 20,
        default: () => "NULL::character varying",
        name: "featuretype"
    })
    featuretype: string | null;
    @Column("text", {
        nullable: true,
        name: "address"
    })
    address: string | null;
    @Column("character varying", {
        nullable: true,
        length: 150,
        default: () => "NULL::character varying",
        name: "email"
    })
    email: string | null;
    @Column("character varying", {
        nullable: true,
        length: 150,
        default: () => "NULL::character varying",
        name: "phonenumber"
    })
    phonenumber: string | null;
    @Column("character varying", {
        nullable: true,
        length: 150,
        default: () => "NULL::character varying",
        name: "contactperson"
    })
    contactperson: string | null;
    @Column("text", {
        nullable: true,
        name: "description"
    })
    description: string | null;
    @Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    })
    datecreated: Date;
    @Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    })
    lastupdated: Date | null;
    @OneToMany(type => hris_intergration_dhis_dataconnection, hris_intergration_dhis_dataconnection => hris_intergration_dhis_dataconnection.parent_organisationunit_)
    hris_intergration_dhis_dataconnections: hris_intergration_dhis_dataconnection[];
    @OneToMany(type => hris_intergration_tiis_data_connection, hris_intergration_tiis_data_connection => hris_intergration_tiis_data_connection.organisationunit_, { onDelete: 'CASCADE', })
    hris_intergration_tiis_data_connections: hris_intergration_tiis_data_connection[];
    @OneToMany(type => hris_organisationunit, hris_organisationunit => hris_organisationunit.parent_, { onDelete: 'CASCADE', })
    hris_organisationunits: hris_organisationunit[];
    @OneToMany(type => hris_organisationunitcompleteness, hris_organisationunitcompleteness => hris_organisationunitcompleteness.organisationunit_, { onDelete: 'CASCADE', })
    hris_organisationunitcompletenesss: hris_organisationunitcompleteness[];
    @OneToMany(type => hris_organisationunitstructure, hris_organisationunitstructure => hris_organisationunitstructure.level1_, { onDelete: 'CASCADE', })
    hris_organisationunitstructures: hris_organisationunitstructure[];
    @OneToMany(type => hris_organisationunitstructure, hris_organisationunitstructure => hris_organisationunitstructure.level2_, { onDelete: 'CASCADE', })
    hris_organisationunitstructures2: hris_organisationunitstructure[];
    @OneToMany(type => hris_organisationunitstructure, hris_organisationunitstructure => hris_organisationunitstructure.level3_, { onDelete: 'CASCADE', })
    hris_organisationunitstructures3: hris_organisationunitstructure[];
    @OneToMany(type => hris_organisationunitstructure, hris_organisationunitstructure => hris_organisationunitstructure.level4_, { onDelete: 'CASCADE', })
    hris_organisationunitstructures4: hris_organisationunitstructure[];
    @OneToMany(type => hris_organisationunitstructure, hris_organisationunitstructure => hris_organisationunitstructure.level5_, { onDelete: 'CASCADE', })
    hris_organisationunitstructures5: hris_organisationunitstructure[];
    @OneToMany(type => hris_organisationunitstructure, hris_organisationunitstructure => hris_organisationunitstructure.level6_, { onDelete: 'CASCADE', })
    hris_organisationunitstructures6: hris_organisationunitstructure[];
    @OneToOne(type => hris_organisationunitstructure, hris_organisationunitstructure => hris_organisationunitstructure.organisationunit_, { onDelete: 'CASCADE', })
    hris_organisationunitstructure: hris_organisationunitstructure | null;
    @OneToMany(type => hris_traininginstance, hris_traininginstance => hris_traininginstance.district, { onDelete: 'CASCADE', })
    hris_traininginstances: hris_traininginstance[];
    @OneToMany(type => hris_traininginstance, hris_traininginstance => hris_traininginstance.region, { onDelete: 'CASCADE', })
    hris_traininginstances2: hris_traininginstance[];
    @OneToMany(type => User, User => User.organisationunit_, { onDelete: 'CASCADE', })
    hris_users: User[];
    @ManyToMany(type => hris_organisationunitgroup, hris_organisationunitgroup => hris_organisationunitgroup.hris_organisationunits)
    hris_organisationunitgroups: hris_organisationunitgroup[];
    @ManyToMany(type => hris_dashboardchart, hris_dashboardchart => hris_dashboardchart.hris_organisationunits)
    hris_dashboardcharts: hris_dashboardchart[];
}
