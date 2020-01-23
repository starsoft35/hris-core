import { MigrationInterface, QueryRunner } from 'typeorm';

export class Version3Refactoring1555771266128 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    //await queryRunner.query('ALTER TABLE hris_user" RENAME TO user');
    let helpTable = await queryRunner.getTable('hris_help_topic');

    if (helpTable) {
      await queryRunner.query(
        'DROP TABLE IF EXISTS "hris_help_topic_chapters"',
      );
      await queryRunner.query('DROP TABLE IF EXISTS "hris_help_topic"');
      await queryRunner.query('DROP TABLE IF EXISTS "hris_help_chapter"');
      await queryRunner.query('DROP TABLE IF EXISTS "ext_log_entries"');
      await queryRunner.query('DROP TABLE IF EXISTS "ext_translations"');
      await queryRunner.query('DROP TABLE IF EXISTS "_resource_all_fields"');
      await queryRunner.query(
        'DROP TABLE IF EXISTS "_resource_compulsory_fields"',
      );
      await queryRunner.query('DROP TABLE IF EXISTS "_temp"');
      await queryRunner.query('DROP TABLE IF EXISTS "education"');
      await queryRunner.query(
        'DROP TABLE IF EXISTS "hris_importexport_history"',
      );
      await queryRunner.query(
        'DROP TABLE IF EXISTS "hris_resourcetable_fieldmembers"',
      );
      await queryRunner.query('DROP TABLE IF EXISTS "hris_resourcetable"');
      await queryRunner.query('DROP TABLE IF EXISTS "hris_participants"');

      await queryRunner.query(
        'DROP TABLE IF EXISTS "hris_organisationunitstructure"',
      );
      await queryRunner.query('DROP TABLE IF EXISTS "mnh_staff"');
      await queryRunner.query(
        'DROP TABLE IF EXISTS "_resource_all_fields_temporary"',
      );
      await queryRunner.query(
        'DROP TABLE IF EXISTS "_resource_all_fields_temporary"',
      );

      await queryRunner.query(
        'ALTER TABLE "sqlview" ADD COLUMN "createdbyid" INTEGER',
      );
      await queryRunner.query(
        'ALTER TABLE "sqlview" ADD COLUMN "lastupdatedbyid" INTEGER',
      );
      await queryRunner.query(
        'ALTER TABLE "sqlview" RENAME COLUMN "title" TO "name"',
      );
      await queryRunner.query(
        'ALTER TABLE "sqlview" RENAME COLUMN "createdat" TO "created"',
      );
      await queryRunner.query(
        'ALTER TABLE "sqlview" RENAME COLUMN "updatedat" TO "lastupdated"',
      );
      await queryRunner.query(
        'ALTER TABLE "sqlview" RENAME COLUMN "title" TO "name"',
      );

      await queryRunner.query(
        'ALTER TABLE "sqlview" ADD COLUMN "uid" character varying(13)',
      );
      await queryRunner.query(
        'ALTER TABLE "sqlview" ADD CONSTRAINT "UQ_sqlView" UNIQUE (uid)',
      );
      await queryRunner.query('UPDATE "sqlview" SET uid=uid()');

      await queryRunner.query(
        `UPDATE sqlView
        set query = 'SELECT
        ou2.name "Region",
        ou.name "District",
        (
          SELECT
            COUNT(*)
          FROM record rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created >= date.date
        ) "New Records",
        (
          SELECT
            COUNT(*)
          FROM record rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created < date.date
            AND rec.lastupdated >= date.date
        ) "Updated Records",
        (
          SELECT
            COUNT(*)
          FROM hris_record_history rec_hist
          INNER JOIN record rec ON(rec_hist.record_id = rec.id)
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec_hist.lastupdated > date.date
        ) "Updated Record History",
        (
          SELECT
            COUNT(*)
          FROM traininginstance rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.district
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created >= date.date
        ) "Training Records"
      FROM organisationunit ou
      INNER JOIN (
          SELECT
            (now() - ''1 months'' :: interval) :: timestamp date
        ) as date ON(true)
      INNER JOIN _organisationunitstructure ous ON(ous.organisationunitid = ou.id)
      INNER JOIN organisationunitlevel oul ON(
          ous.level = oul.level
          AND oul.level = 4
        )
      INNER JOIN organisationunit ou2 ON(ou2.id = ous.idlevel3)
      WHERE
        ou2.parentid = 1161
      ORDER BY
        ou2.name,
        ou.name'
        where name = 'Updates in the Last Month';`,
      );
      await queryRunner.query(
        `UPDATE sqlView
        set query = 'SELECT
        ou2.name "Region",
        ou.name "District",
        (
          SELECT
            COUNT(*)
          FROM record rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created >= date.date
        ) "New Records",
        (
          SELECT
            COUNT(*)
          FROM record rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created < date.date
            AND rec.lastupdated >= date.date
        ) "Updated Records",
        (
          SELECT
            COUNT(*)
          FROM hris_record_history rec_hist
          INNER JOIN record rec ON(rec_hist.record_id = rec.id)
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec_hist.lastupdated > date.date
        ) "Updated Record History",
        (
          SELECT
            COUNT(*)
          FROM traininginstance rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.district
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created >= date.date
        ) "Training Records"
      FROM organisationunit ou
      INNER JOIN (
          SELECT
            (now() - ''3 months'' :: interval) :: timestamp date
        ) as date ON(true)
      INNER JOIN _organisationunitstructure ous ON(ous.organisationunitid = ou.id)
      INNER JOIN organisationunitlevel oul ON(
          ous.level = oul.level
          AND oul.level = 4
        )
      INNER JOIN organisationunit ou2 ON(ou2.id = ous.idlevel3)
      WHERE
        ou2.parentid = 1161
      ORDER BY
        ou2.name,
        ou.name'
        where name = 'Updates in the Last 3 Months';`,
      );
      await queryRunner.query(
        `UPDATE sqlView
        set query = 'SELECT
        ou2.name "Region",
        ou.name "District",
        (
          SELECT
            COUNT(*)
          FROM record rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created >= date.date
        ) "New Records",
        (
          SELECT
            COUNT(*)
          FROM record rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created < date.date
            AND rec.lastupdated >= date.date
        ) "Updated Records",
        (
          SELECT
            COUNT(*)
          FROM hris_record_history rec_hist
          INNER JOIN record rec ON(rec_hist.record_id = rec.id)
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec_hist.lastupdated > date.date
        ) "Updated Record History",
        (
          SELECT
            COUNT(*)
          FROM traininginstance rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.district
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created >= date.date
        ) "Training Records"
      FROM organisationunit ou
      INNER JOIN (
          SELECT
            (now() - ''6 months'' :: interval) :: timestamp date
        ) as date ON(true)
      INNER JOIN _organisationunitstructure ous ON(ous.organisationunitid = ou.id)
      INNER JOIN organisationunitlevel oul ON(
          ous.level = oul.level
          AND oul.level = 4
        )
      INNER JOIN organisationunit ou2 ON(ou2.id = ous.idlevel3)
      WHERE
        ou2.parentid = 1161
      ORDER BY
        ou2.name,
        ou.name'
        where name = 'Updates in the Last 6 Months';`,
      );

      await queryRunner.query(
        `UPDATE sqlView
        set query = 'SELECT
        ou2.name "Region",
        ou.name "District",
        (
          SELECT
            COUNT(*)
          FROM record rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created >= date.date
        ) "New Records",
        (
          SELECT
            COUNT(*)
          FROM record rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created < date.date
            AND rec.lastupdated >= date.date
        ) "Updated Records",
        (
          SELECT
            COUNT(*)
          FROM hris_record_history rec_hist
          INNER JOIN record rec ON(rec_hist.record_id = rec.id)
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec_hist.lastupdated > date.date
        ) "Updated Record History",
        (
          SELECT
            COUNT(*)
          FROM traininginstance rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.district
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created >= date.date
        ) "Training Records"
      FROM organisationunit ou
      INNER JOIN (
          SELECT
            (now() - ''12 months'' :: interval) :: timestamp date
        ) as date ON(true)
      INNER JOIN _organisationunitstructure ous ON(ous.organisationunitid = ou.id)
      INNER JOIN organisationunitlevel oul ON(
          ous.level = oul.id
          AND oul.level = 4
        )
      INNER JOIN organisationunit ou2 ON(ou2.id = ous.idlevel3)
      WHERE
        ou2.parentid = 1161
      ORDER BY
        ou2.name,
        ou.name'
        where name = 'Updates Made in the Past 12 Months';`,
      );

      await queryRunner.query(
        `UPDATE sqlView
        set query = 'SELECT
        ou2.name "Region",
        ou.name "District",
        (
            SELECT COUNT(*) FROM record rec
            INNER JOIN _organisationunitstructure ous ON(ous.organisationunitid = rec.organisationunitid
                    AND ou.id = ous.idlevel4
                )
            WHERE
                rec.created >= date.date
        ) "New Records",
        (
            SELECT
                COUNT(*)
            FROM
                record rec
                INNER JOIN _organisationunitstructure ous ON(
                    ous.organisationunitid = rec.organisationunitid
                    AND ou.id = ous.idlevel4
                )
            WHERE
                rec.created < date.date
                AND rec.lastupdated >= date.date
        ) "Edited Records",
        (
            SELECT
                COUNT(*)
            FROM
                hris_record_history rec_hist
                INNER JOIN record rec ON(rec_hist.record_id = rec.id)
                INNER JOIN _organisationunitstructure ous ON(
                    ous.organisationunitid = rec.organisationunitid
                    AND ou.id = ous.idlevel4
                )
            WHERE
                rec_hist.lastupdated > date.date
        ) "Updated Record History",
        (
            SELECT
                COUNT(*)
            FROM
                traininginstance rec
                INNER JOIN _organisationunitstructure ous ON(
                    ous.organisationunitid = rec.district
                    AND ou.id = ous.idlevel4
                )
            WHERE
                rec.created >= date.date
        ) "Training Records"
    FROM
        organisationunit ou
        INNER JOIN (
            SELECT
                (now() - ''9 months'' :: interval) :: timestamp date
        ) as date ON(true)
        INNER JOIN _organisationunitstructure ous ON(ous.organisationunitid = ou.id)
        INNER JOIN organisationunitlevel oul ON(
            ous.level = oul.id
            AND oul.level = 4
        )
        INNER JOIN organisationunit ou2 ON(ou2.id = ous.idlevel3)
    WHERE
        ou2.parentid = 1161
        AND 0 = (
            SELECT
                COUNT(*)
            FROM
                organisationunit
            WHERE
                parentid = ou.id
        )
    ORDER BY
        ou2.name,
        ou.name'
        where name = 'RRH Updates Made in the Past 9 Months';`,
      );

      await queryRunner.query(
        `UPDATE sqlView
        set query = 'SELECT
        ou2.name "Region",
        ou.name "District",
        (
            SELECT
                COUNT(*)
            FROM
                record rec
                INNER JOIN _organisationunitstructure ous ON(
                    ous.organisationunitid = rec.organisationunitid
                    AND ou.id = ous.idlevel4
                )
            WHERE
                rec.created >= date.date
        ) "New Records",
        (
            SELECT
                COUNT(*)
            FROM
                record rec
                INNER JOIN _organisationunitstructure ous ON(
                    ous.organisationunitid = rec.organisationunitid
                    AND ou.id = ous.idlevel4
                )
            WHERE
                rec.created < date.date
                AND rec.lastupdated >= date.date
        ) "Edited Records",
        (
            SELECT
                COUNT(*)
            FROM
                hris_record_history rec_hist
                INNER JOIN record rec ON(rec_hist.record_id = rec.id)
                INNER JOIN _organisationunitstructure ous ON(
                    ous.organisationunitid = rec.organisationunitid
                    AND ou.id = ous.idlevel4
                )
            WHERE
                rec_hist.lastupdated > date.date
        ) "Updated Record History",
        (
            SELECT
                COUNT(*)
            FROM
                traininginstance rec
                INNER JOIN _organisationunitstructure ous ON(
                    ous.organisationunitid = rec.district
                    AND ou.id = ous.idlevel4
                )
            WHERE
                rec.created >= date.date
        ) "Training Records"
    FROM
        organisationunit ou
        INNER JOIN (
            SELECT
                (now() - ''1 months'' :: interval) :: timestamp date
        ) as date ON(true)
        INNER JOIN _organisationunitstructure ous ON(ous.organisationunitid = ou.id)
        INNER JOIN organisationunitlevel oul ON(
            ous.level = oul.id
            AND oul.level = 4
        )
        INNER JOIN organisationunit ou2 ON(ou2.id = ous.idlevel3)
    WHERE
        ou2.parentid = 1161
        AND 0 = (
            SELECT
                COUNT(*)
            FROM
                organisationunit
            WHERE
                parentid = ou.id
        )
    ORDER BY
        ou2.name,
        ou.name'
        where name = 'RRH Updates Made in the Past 3 Months';`,
      );
      await queryRunner.query(
        `UPDATE sqlView
        set query = 'SELECT
        ou2.name "Region",
        ou.name "District",
        (
          SELECT
            COUNT(*)
          FROM record rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created >= date.date
        ) "New Records",
        (
          SELECT
            COUNT(*)
          FROM record rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created < date.date
            AND rec.lastupdated >= date.date
        ) "Edited Records",
        (
          SELECT
            COUNT(*)
          FROM hris_record_history rec_hist
          INNER JOIN record rec ON(rec_hist.record_id = rec.id)
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.organisationunitid
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec_hist.lastupdated > date.date
        ) "Updated Record History",
        (
          SELECT
            COUNT(*)
          FROM traininginstance rec
          INNER JOIN _organisationunitstructure ous ON(
              ous.organisationunitid = rec.district
              AND ou.id = ous.idlevel4
            )
          WHERE
            rec.created >= date.date
        ) "Training Records"
      FROM organisationunit ou
      INNER JOIN (
          SELECT
            (now() - ''1 month'' :: interval) :: timestamp date
        ) as date ON(true)
      INNER JOIN _organisationunitstructure ous ON(ous.organisationunitid = ou.id)
      INNER JOIN organisationunitlevel oul ON(
          ous.level = oul.id
          AND oul.level = 4
        )
      INNER JOIN organisationunit ou2 ON(ou2.id = ous.idlevel3)
      WHERE
        ou2.parentid = 1161
        AND 0 = (
          SELECT
            COUNT(*)
          FROM organisationunit
          WHERE
            parentid = ou.id
        )
      ORDER BY
        ou2.name,
        ou.name'
        where name = 'RRH Updates Made in the Past 1 Months';`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}


