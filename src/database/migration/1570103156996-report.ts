import { MigrationInterface, QueryRunner } from 'typeorm';

export class report1570103156996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let Report = await queryRunner.getTable('hris_report');

    if (Report) {
      await queryRunner.query('ALTER TABLE "hris_report" RENAME TO "report"');
      await queryRunner.query(
        'ALTER TABLE "report" RENAME COLUMN "datecreated" TO "created"',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "lastupdated" timestamp without time zone',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "name" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "uid" character varying(256)',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "parameters" text',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "createdby" text',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "uri" text',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "userid" text',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "lastupdatedby" character varying',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "publicaccess" character varying(8)',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "externalaccess" boolean',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "code" character varying(25)',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "description" text',
      );
      await queryRunner.query(
        'ALTER TABLE "report" ADD COLUMN IF NOT EXISTS "html" text',
      );
      await queryRunner.query('UPDATE "report" SET uid=uid()');
      await queryRunner.query(' ALTER TABLE "report" OWNER TO "postgres"');
      await queryRunner.query(
        'CREATE SEQUENCE report_id_seq AS integer OWNED BY report.id',
      );
      await queryRunner.query(
        `ALTER TABLE report ALTER COLUMN  id SET DEFAULT nextval('report_id_seq')`,
      );
      await queryRunner.query(
        'ALTER TABLE report ALTER COLUMN created SET DEFAULT LOCALTIMESTAMP',
      );
      await queryRunner.query(`INSERT INTO report(uid, name, uri, parameters, html)
        VALUES (uid(), 'Completeness Report', '/reports/organisationunit/completeness/generate/redirect', 'organisationunit=9272', '<table
          class="records_list dataTable table table-striped table-bordered table-hover no-footer"
          cellpadding="0"
          cellspacing="0"
          border="0"
          id="DataTables_Table_0"
          role="grid"
          aria-describedby="DataTables_Table_0_info"
          style="width: 939px;"
        >
          <thead>
            <tr role="row">
              <th
                rowspan="2"
                class="sorting_asc"
                tabindex="0"
                aria-controls="DataTables_Table_0"
                colspan="1"
                aria-sort="ascending"
                aria-label="Sn: activate to sort column ascending"
                style="width: 24px;"
              >
                Sn
              </th>
              <th
                rowspan="2"
                class="sorting"
                tabindex="0"
                aria-controls="DataTables_Table_0"
                colspan="1"
                aria-label="Organisationunit: activate to sort column ascending"
                style="width: 518px;"
              >
                Organisationunit
              </th>
              <th colspan="3" rowspan="1">Sponsorship Application Form</th>
            </tr>
        
            <tr role="row">
              <th
                class="sorting"
                tabindex="0"
                aria-controls="DataTables_Table_0"
                rowspan="1"
                colspan="1"
                aria-label="Entered Records: activate to sort column ascending"
                style="width: 113px;"
              >
                Entered Records
              </th>
              <th
                class="sorting"
                tabindex="0"
                aria-controls="DataTables_Table_0"
                rowspan="1"
                colspan="1"
                aria-label="Expected Records: activate to sort column ascending"
                style="width: 123px;"
              >
                Expected Records
              </th>
              <th
                class="sorting"
                tabindex="0"
                aria-controls="DataTables_Table_0"
                rowspan="1"
                colspan="1"
                aria-label="Percentage: activate to sort column ascending"
                style="width: 76px;"
              >
                Percentage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" class="odd">
              <td class="sorting_1">1</td>
              <td>
                <a
                  href="/reports/organisationunit/completeness/generate/redirect?organisationunit=9272&amp;forms=9"
                >
                  Regions &gt; Geita Region
                </a>
              </td>
              <td>0</td>
              <td class="dblclick" id="id_9272_9" title="Doubleclick to edit...">-</td>
              <td>-</td>
            </tr>
            <tr role="row" class="even">
              <td class="sorting_1">2</td>
              <td>
                <a
                  href="/reports/organisationunit/completeness/generate/redirect?organisationunit=12464&amp;forms=9"
                >
                  Referral Hospitals &gt; Bugando Referral Hospital
                </a>
              </td>
              <td>0</td>
              <td class="dblclick" id="id_12464_9" title="Doubleclick to edit...">-</td>
              <td>-</td>
            </tr>
            <tr role="row" class="odd">
              <td class="sorting_1">3</td>
              <td>
                <a
                  href="/reports/organisationunit/completeness/generate/redirect?organisationunit=12462&amp;forms=9"
                >
                  Referral Hospitals &gt; Mbeya Referral Hospital
                </a>
              </td>
              <td>0</td>
              <td class="dblclick" id="id_12462_9" title="Doubleclick to edit...">-</td>
              <td>-</td>
            </tr>
            <tr role="row" class="even">
              <td class="sorting_1">4</td>
              <td>
                <a
                  href="/reports/organisationunit/completeness/generate/redirect?organisationunit=12605&amp;forms=9"
                >
                  Health Training Institutions &gt; Newala Son
                </a>
              </td>
              <td>0</td>
              <td class="dblclick" id="id_12605_9" title="Doubleclick to edit...">-</td>
              <td>-</td>
            </tr>
            <tr role="row" class="odd">
              <td class="sorting_1">5</td>
              <td>
                <a
                  href="/reports/organisationunit/completeness/generate/redirect?organisationunit=13979&amp;forms=9"
                >
                  Regions &gt; Songwe Region
                </a>
              </td>
              <td>0</td>
              <td class="dblclick" id="id_13979_9" title="Doubleclick to edit...">-</td>
              <td>-</td>
            </tr>
            <tr role="row" class="even">
              <td class="sorting_1">6</td>
              <td>
                <a
                  href="/reports/organisationunit/completeness/generate/redirect?organisationunit=12560&amp;forms=9"
                >
                  Health Training Institutions &gt; Kcmc So Mo Radiology
                </a>
              </td>
              <td>0</td>
              <td class="dblclick" id="id_12560_9" title="Doubleclick to edit...">-</td>
              <td>-</td>
            </tr>
            <tr role="row" class="odd">
              <td class="sorting_1">7</td>
              <td>
                <a
                  href="/reports/organisationunit/completeness/generate/redirect?organisationunit=12630&amp;forms=9"
                >
                  Health Training Institutions &gt; Vctc -muheza
                </a>
              </td>
              <td>0</td>
              <td class="dblclick" id="id_12630_9" title="Doubleclick to edit...">-</td>
              <td>-</td>
            </tr>
            <tr role="row" class="even">
              <td class="sorting_1">8</td>
              <td>
                <a
                  href="/reports/organisationunit/completeness/generate/redirect?organisationunit=12686&amp;forms=9"
                >
                  Referral Hospitals &gt; Kibong''oto Tb Hospital
                </a>
              </td>
              <td>0</td>
              <td class="dblclick" id="id_12686_9" title="Doubleclick to edit...">-</td>
              <td>-</td>
            </tr>
            <tr role="row" class="odd">
              <td class="sorting_1">9</td>
              <td>
                <a
                  href="/reports/organisationunit/completeness/generate/redirect?organisationunit=14186&amp;forms=9"
                >
                  MOHCDGEC Departments &gt; Pharmacy Department
                </a>
              </td>
              <td>0</td>
              <td class="dblclick" id="id_14186_9" title="Doubleclick to edit...">-</td>
              <td>-</td>
            </tr>
            <tr role="row" class="even">
              <td class="sorting_1">10</td>
              <td>
                <a
                  href="/reports/organisationunit/completeness/generate/redirect?organisationunit=14189&amp;forms=9"
                >
                  MOHCDGEC Agencies &gt; National Aids Control Program
                </a>
              </td>
              <td>0</td>
              <td class="dblclick" id="id_14189_9" title="Doubleclick to edit...">-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        ')
        
        `);

      await queryRunner.query(`INSERT INTO report(uid, name, uri, parameters, html)
        VALUES (uid(), 'Orgunit By Groupset', '/reports/organisationunit/groupset/organisationunitgroup', 'organisationunit=9272', '<table
        class="records_list dataTable table table-striped table-bordered table-hover no-footer"
        cellpadding="0"
        cellspacing="0"
        border="0"
        id="DataTables_Table_0"
        role="grid"
        aria-describedby="DataTables_Table_0_info"
      >
        <thead>
          <tr role="row">
            <th
              class="sorting_asc"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-sort="ascending"
              aria-label="No.: activate to sort column ascending"
              style="width: 97px;"
            >
              No.
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-label="Organisationunit Group: activate to sort column ascending"
              style="width: 482px;"
            >
              Organisationunit Group
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-label="Total Facilities: activate to sort column ascending"
              style="width: 309px;"
            >
              Total Facilities
            </th>
          </tr>
        </thead>
        <tbody>
          <tr role="row" class="odd">
            <td class="sorting_1">1</td>
            <td>
              <a
                href="/reports/organisationunit/groupset/organisationunitgroup?organisationunit=1156&amp;organisationunitGroup=7"
                >Army</a
              >
            </td>
            <td>139</td>
          </tr>
          <tr role="row" class="even">
            <td class="sorting_1">2</td>
            <td>
              <a
                href="/reports/organisationunit/groupset/organisationunitgroup?organisationunit=1156&amp;organisationunitGroup=6"
                >Faith Based Facilities</a
              >
            </td>
            <td>934</td>
          </tr>
          <tr role="row" class="odd">
            <td class="sorting_1">3</td>
            <td>
              <a
                href="/reports/organisationunit/groupset/organisationunitgroup?organisationunit=1156&amp;organisationunitGroup=8"
                >Institution</a
              >
            </td>
            <td>112</td>
          </tr>
          <tr role="row" class="even">
            <td class="sorting_1">4</td>
            <td>
              <a
                href="/reports/organisationunit/groupset/organisationunitgroup?organisationunit=1156&amp;organisationunitGroup=4"
                >Private Facilities</a
              >
            </td>
            <td>1141</td>
          </tr>
          <tr role="row" class="odd">
            <td class="sorting_1">5</td>
            <td>
              <a
                href="/reports/organisationunit/groupset/organisationunitgroup?organisationunit=1156&amp;organisationunitGroup=5"
                >Public Facilities</a
              >
            </td>
            <td>5404</td>
          </tr>
          <tr role="row" class="even">
            <td class="sorting_1">6</td>
            <td>
              <a
                href="/reports/organisationunit/groupset/organisationunitgroup?organisationunit=1156&amp;organisationunitGroup=15"
                >Public Administration</a
              >
            </td>
            <td>155</td>
          </tr>
          <tr role="row" class="odd">
            <td class="sorting_1">7</td>
            <td>Total Count</td>
            <td>7885</td>
          </tr>
        </tbody>
      </table>'
	)  
        `);

      await queryRunner.query(`INSERT INTO report(uid, name, uri, parameters, html)
        VALUES (uid(), 'Orgunit By Groupset', '/reports/organisationunit/groupset/organisationunitgroup', 'organisationunit=9272', '<table
        class="records_list dataTable table table-striped table-bordered table-hover no-footer"
        cellpadding="0"
        cellspacing="0"
        border="0"
        id="DataTables_Table_0"
        role="grid"
        aria-describedby="DataTables_Table_0_info"
      >
        <thead>
          <tr role="row">
            <th
              class="sorting_asc"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-sort="ascending"
              aria-label="No.: activate to sort column ascending"
              style="width: 97px;"
            >
              No.
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-label="Organisationunit Group: activate to sort column ascending"
              style="width: 482px;"
            >
              Organisationunit Group
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-label="Total Facilities: activate to sort column ascending"
              style="width: 309px;"
            >
              Total Facilities
            </th>
          </tr>
        </thead>
        <tbody>
          <tr role="row" class="odd">
            <td class="sorting_1">1</td>
            <td>
              <a
                href="/reports/organisationunit/groupset/organisationunitgroup?organisationunit=1156&amp;organisationunitGroup=7"
                >Army</a
              >
            </td>
            <td>139</td>
          </tr>
          <tr role="row" class="even">
            <td class="sorting_1">2</td>
            <td>
              <a
                href="/reports/organisationunit/groupset/organisationunitgroup?organisationunit=1156&amp;organisationunitGroup=6"
                >Faith Based Facilities</a
              >
            </td>
            <td>934</td>
          </tr>
          <tr role="row" class="odd">
            <td class="sorting_1">3</td>
            <td>
              <a
                href="/reports/organisationunit/groupset/organisationunitgroup?organisationunit=1156&amp;organisationunitGroup=8"
                >Institution</a
              >
            </td>
            <td>112</td>
          </tr>
          <tr role="row" class="even">
            <td class="sorting_1">4</td>
            <td>
              <a
                href="/reports/organisationunit/groupset/organisationunitgroup?organisationunit=1156&amp;organisationunitGroup=4"
                >Private Facilities</a
              >
            </td>
            <td>1141</td>
          </tr>
          <tr role="row" class="odd">
            <td class="sorting_1">5</td>
            <td>
              <a
                href="/reports/organisationunit/groupset/organisationunitgroup?organisationunit=1156&amp;organisationunitGroup=5"
                >Public Facilities</a
              >
            </td>
            <td>5404</td>
          </tr>
          <tr role="row" class="even">
            <td class="sorting_1">6</td>
            <td>
              <a
                href="/reports/organisationunit/groupset/organisationunitgroup?organisationunit=1156&amp;organisationunitGroup=15"
                >Public Administration</a
              >
            </td>
            <td>155</td>
          </tr>
          <tr role="row" class="odd">
            <td class="sorting_1">7</td>
            <td>Total Count</td>
            <td>7885</td>
          </tr>
        </tbody>
      </table>'
	)  
        `);

      await queryRunner.query(`INSERT INTO report(uid, name, uri, parameters, html)
      VALUES (uid(), 'Orgunit By Levels ', '/reports/organisationunit/levels/', 'organisationunit=9272', '<table
      class="records_list dataTable table table-striped table-bordered table-hover"
      cellpadding="0"
      cellspacing="0"
      border="0"
      id="DataTables_Table_0"
    >
      <thead>
        <tr>
          <th>No.</th>
          <th>Regions/Departments/Institutions/Referrals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ocean Road Cancer Institute</td>
          <td>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="activeid3147"
                  value=""
                  checked="checked"
                />Active</label
              >
              <label
                ><input type="radio" name="activeid3147" value="" />Inacitve</label
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Muhimbili Orthpeadic Institute</td>
          <td>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="activeid12485"
                  value=""
                  checked="checked"
                />Active</label
              >
              <label
                ><input type="radio" name="activeid12485" value="" />Inacitve</label
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Muhimbili National Hospital</td>
          <td>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="activeid13336"
                  value=""
                  checked="checked"
                />Active</label
              >
              <label
                ><input type="radio" name="activeid13336" value="" />Inacitve</label
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Mirembe Referral Hospital</td>
          <td>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="activeid3111"
                  value=""
                  checked="checked"
                />Active</label
              >
              <label
                ><input type="radio" name="activeid3111" value="" />Inacitve</label
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Mbeya Referral Hospital</td>
          <td>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="activeid12462"
                  value=""
                  checked="checked"
                />Active</label
              >
              <label
                ><input type="radio" name="activeid12462" value="" />Inacitve</label
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Kibong''oto Tb Hospital</td>
          <td>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="activeid12686"
                  value=""
                  checked="checked"
                />Active</label
              >
              <label
                ><input type="radio" name="activeid12686" value="" />Inacitve</label
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Kcmc Referal Hospital</td>
          <td>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="activeid12484"
                  value=""
                  checked="checked"
                />Active</label
              >
              <label
                ><input type="radio" name="activeid12484" value="" />Inacitve</label
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Jakaya Kikwete Cardiac Institute</td>
          <td>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="activeid14188"
                  value=""
                  checked="checked"
                />Active</label
              >
              <label
                ><input type="radio" name="activeid14188" value="" />Inacitve</label
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>Ccbrt Hospital</td>
          <td>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="activeid3029"
                  value=""
                  checked="checked"
                />Active</label
              >
              <label
                ><input type="radio" name="activeid3029" value="" />Inacitve</label
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>Bugando Referral Hospital</td>
          <td>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="activeid12464"
                  value=""
                  checked="checked"
                />Active</label
              >
              <label
                ><input type="radio" name="activeid12464" value="" />Inacitve</label
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>Benjamin Mkapa Referral Hospital</td>
          <td>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="activeid14187"
                  value=""
                  checked="checked"
                />Active</label
              >
              <label
                ><input type="radio" name="activeid14187" value="" />Inacitve</label
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>'
  )  
        `);

      await queryRunner.query(`INSERT INTO report(uid, name, uri, parameters, html)
      VALUES (uid(), 'Records Report ', '/reports/employeerecords/', 'organisationunit=9272', '<table
      class="records_list dataTable table table-striped table-bordered table-hover no-footer"
      cellpadding="0"
      cellspacing="0"
      border="0"
      id="DataTables_Table_0"
      role="grid"
      aria-describedby="DataTables_Table_0_info"
      style="width: 1375px;"
    >
      <thead>
        <tr role="row">
          <th
            class="sorting ui-state-default sorting_asc"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-sort="ascending"
            aria-label="No.: activate to sort column ascending"
            style="width: 24px;"
          >
            <div class="DataTables_sort_wrapper">
              No.<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-triangle-1-n"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="First Name: activate to sort column ascending"
            style="width: 94px;"
          >
            <div class="DataTables_sort_wrapper">
              First Name<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Middle Name: activate to sort column ascending"
            style="width: 115px;"
          >
            <div class="DataTables_sort_wrapper">
              Middle Name<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Surname: activate to sort column ascending"
            style="width: 74px;"
          >
            <div class="DataTables_sort_wrapper">
              Surname<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Profession Education Level: activate to sort column ascending"
            style="width: 73px;"
          >
            <div class="DataTables_sort_wrapper">
              Profession Education Level<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Basic Education Level: activate to sort column ascending"
            style="width: 68px;"
          >
            <div class="DataTables_sort_wrapper">
              Basic Education Level<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Age: activate to sort column ascending"
            style="width: 27px;"
          >
            <div class="DataTables_sort_wrapper">
              Age<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Profession: activate to sort column ascending"
            style="width: 78px;"
          >
            <div class="DataTables_sort_wrapper">
              Profession<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Present Designation: activate to sort column ascending"
            style="width: 90px;"
          >
            <div class="DataTables_sort_wrapper">
              Present Designation<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Employment Status: activate to sort column ascending"
            style="width: 85px;"
          >
            <div class="DataTables_sort_wrapper">
              Employment Status<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Check Number: activate to sort column ascending"
            style="width: 102px;"
          >
            <div class="DataTables_sort_wrapper">
              Check Number<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Employment Duration: activate to sort column ascending"
            style="width: 85px;"
          >
            <div class="DataTables_sort_wrapper">
              Employment Duration<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Retirement Date: activate to sort column ascending"
            style="width: 74px;"
          >
            <div class="DataTables_sort_wrapper">
              Retirement Date<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Last Updated: activate to sort column ascending"
            style="width: 71px;"
          >
            <div class="DataTables_sort_wrapper">
              Last Updated<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
          <th
            class="sorting ui-state-default"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Duty Post: activate to sort column ascending"
            style="width: 60px;"
          >
            <div class="DataTables_sort_wrapper">
              Duty Post<span
                class="DataTables_sort_icon css_right ui-icon ui-icon-carat-2-n-s"
              ></span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr id="0703a7298f8ff70c8856d12e38209219" role="row" class="odd">
          <td class="sorting_1">1</td>
          <td>Abdallah</td>
          <td>Shabani</td>
          <td>Mshangama</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>31</td>
          <td>Assistant Health Laboratory Technologist</td>
          <td>Assistant Laboratory Technologist</td>
          <td>On Duty</td>
          <td>3694260739</td>
          <td>5y0m</td>
          <td>2048-12-12</td>
          <td>26/06/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="625e4e504598b06da3efcee5411db60c" role="row" class="even">
          <td class="sorting_1">2</td>
          <td>Abella</td>
          <td>Laurian</td>
          <td>Bubelwa</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>31</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>111350015</td>
          <td>5y7m</td>
          <td>2048-09-11</td>
          <td>08/12/2016</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="0bb3a78bce18b4778d7dac3c92377e2f" role="row" class="odd">
          <td class="sorting_1">3</td>
          <td>Abinusi</td>
          <td>Kazweba</td>
          <td>Juma</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>26</td>
          <td>Nurse</td>
          <td>Nurse II</td>
          <td>On Duty</td>
          <td>111382086</td>
          <td>5y6m</td>
          <td>2053-12-29</td>
          <td>04/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="c34dd978b9c580149e1839416fce6e6e" role="row" class="even">
          <td class="sorting_1">4</td>
          <td>ADAM</td>
          <td>FRANCIS</td>
          <td>MBANGA</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>2</td>
          <td>Medical Officer</td>
          <td>Medical Doctor II</td>
          <td>On Duty</td>
          <td>111934595</td>
          <td>2y8m</td>
          <td>2077-08-21</td>
          <td>03/07/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="93a0b8af57741c83a6e21ffb3202773b" role="row" class="odd">
          <td class="sorting_1">5</td>
          <td>Adelhelma</td>
          <td>Menas</td>
          <td>Mwiga</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>35</td>
          <td>Nurse</td>
          <td>Nurse II</td>
          <td>On Duty</td>
          <td>110800967</td>
          <td>7y6m</td>
          <td>2044-01-31</td>
          <td>30/01/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="59c124531f505adb2b8a7fdcf5c2858e" role="row" class="even">
          <td class="sorting_1">6</td>
          <td>Adrienne</td>
          <td>Atieno</td>
          <td>Oringo</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>35</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer I</td>
          <td>On Duty</td>
          <td>11424572</td>
          <td>11y1m</td>
          <td>2044-04-08</td>
          <td>03/11/2014</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="2f31f9c8fa39dd28886b9fa54e595c3b" role="row" class="odd">
          <td class="sorting_1">7</td>
          <td>ADRIENNE</td>
          <td>ATIENO</td>
          <td>ORINGO</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>36</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer II</td>
          <td>On Duty</td>
          <td>11424572</td>
          <td>11y1m</td>
          <td>2043-04-13</td>
          <td>02/02/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="eb73d98631eacbccc2d8f8c8c62c5670" role="row" class="even">
          <td class="sorting_1">8</td>
          <td>AGNES</td>
          <td>J</td>
          <td>MINDE</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>27</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111307395</td>
          <td>5y9m</td>
          <td>2052-11-15</td>
          <td>30/05/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="a6d3b00d853d60ecebf3b49bdf967f0d" role="row" class="odd">
          <td class="sorting_1">9</td>
          <td>ALI</td>
          <td>KHAMIS</td>
          <td>ALI</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>31</td>
          <td>Dental Therapist</td>
          <td>Dental Therapist I</td>
          <td>On Duty</td>
          <td>111352221</td>
          <td>5y7m</td>
          <td>2049-01-02</td>
          <td>07/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="fc50f739e06a8e6a3207c13270c9fd78" role="row" class="even">
          <td class="sorting_1">10</td>
          <td>Ally</td>
          <td>Said</td>
          <td>Mohily</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>56</td>
          <td>Environmental Health Officer</td>
          <td>Senior Assistant Environmental Health Officer</td>
          <td>On Duty</td>
          <td>7809497</td>
          <td>31y6m</td>
          <td>2023-05-02</td>
          <td>04/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="0a3e4288c2508447346d04ac98d28c9f" role="row" class="odd">
          <td class="sorting_1">11</td>
          <td>Ally</td>
          <td>Babu</td>
          <td>Makwana</td>
          <td>Advance Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>50</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Senior Assistant Environmental Health Officer</td>
          <td>On Duty</td>
          <td>9682519</td>
          <td>17y8m</td>
          <td>2029-07-19</td>
          <td>03/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="3f74fcfa1ecac4de14761e3e6f0a69ea" role="row" class="even">
          <td class="sorting_1">12</td>
          <td>AMINA</td>
          <td>SELEMANI</td>
          <td>SEIF</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>43</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>10905586</td>
          <td>12y9m</td>
          <td>2036-10-22</td>
          <td>18/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="be1a6fac7533c64397ae8cedd1e61f8b" role="row" class="odd">
          <td class="sorting_1">13</td>
          <td>Amiry</td>
          <td>Ramadhani</td>
          <td>Bajah</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>47</td>
          <td>Pharmacist</td>
          <td>Pharmacist I</td>
          <td>On Duty</td>
          <td>10713727</td>
          <td>13y6m</td>
          <td>2032-09-22</td>
          <td>18/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="a1c5f9fa65342e886b6f8556a0547743" role="row" class="even">
          <td class="sorting_1">14</td>
          <td>Amos</td>
          <td>Gideon</td>
          <td>Gamaya</td>
          <td>Advance Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>40</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>11975993</td>
          <td>9y3m</td>
          <td>2039-05-24</td>
          <td>03/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="28ca614921ede68bb174508220ad49a7" role="row" class="odd">
          <td class="sorting_1">15</td>
          <td>Angel</td>
          <td>Antony</td>
          <td>Mkoka</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>34</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Study Leave</td>
          <td>110711183</td>
          <td>7y10m</td>
          <td>2046-01-23</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="85cb97008ae0500c5e13bfa88ee9a46a" role="row" class="even">
          <td class="sorting_1">16</td>
          <td>Anna</td>
          <td>Peter</td>
          <td>Kiritha</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>28</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>111684673</td>
          <td>4y9m</td>
          <td>2051-12-25</td>
          <td>19/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="6d5d409e6020de596b17bf036ffbd730" role="row" class="odd">
          <td class="sorting_1">17</td>
          <td>ANNA</td>
          <td>ISAYA</td>
          <td>KATAIMALA</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>31</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>111712593</td>
          <td>4y11m</td>
          <td>2048-07-19</td>
          <td>14/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="228cbbe5b34f8f4c8d9d4d5ea5964013" role="row" class="even">
          <td class="sorting_1">18</td>
          <td>Asha</td>
          <td>Fadhili</td>
          <td>Mungi</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>48</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Senior Assistant Environmental Health Officer</td>
          <td>On Duty</td>
          <td>7350221</td>
          <td>32y3m</td>
          <td>2031-06-25</td>
          <td>28/11/2013</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="15ccdee600de78511b4a8ca750cbb625" role="row" class="odd">
          <td class="sorting_1">19</td>
          <td>ASUMPTER</td>
          <td>ANGELO</td>
          <td>NKWERA</td>
          <td>Bachelor Degree</td>
          <td>Ordinary Secondary Education</td>
          <td>34</td>
          <td>Social Welfare Officer</td>
          <td>Social Welfare Officer II</td>
          <td>On Duty</td>
          <td>111384411</td>
          <td>5y6m</td>
          <td>2045-12-23</td>
          <td>30/05/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="b4517f179a644a2b2a1c5b8e3628321e" role="row" class="even">
          <td class="sorting_1">20</td>
          <td>Athumani</td>
          <td>Hassan</td>
          <td>Zanangwa</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>41</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer I</td>
          <td>On Duty</td>
          <td>11495299</td>
          <td>10y10m</td>
          <td>2038-12-31</td>
          <td>11/10/2016</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="1e79a878edb10a2fa83c05d12b533b3a" role="row" class="odd">
          <td class="sorting_1">21</td>
          <td>Azizi</td>
          <td>Juma</td>
          <td>Mkote</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>51</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>8836072</td>
          <td>26y9m</td>
          <td>2028-08-27</td>
          <td>23/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="ca7520002c51b0cdac2ff41038cc414e" role="row" class="even">
          <td class="sorting_1">22</td>
          <td>Azmina</td>
          <td>Nathoo</td>
          <td>Abdulkarim</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>31</td>
          <td>Health Laboratory Technologist</td>
          <td>Laboratory Technologist II</td>
          <td>On Duty</td>
          <td>00000O</td>
          <td>5y7m</td>
          <td>2048-03-11</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="584e5c6762bbb8663275a54a4bed8e10" role="row" class="odd">
          <td class="sorting_1">23</td>
          <td>Bakari</td>
          <td>Ally</td>
          <td>Mhina</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>62</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>2458624359629</td>
          <td>37y7m</td>
          <td>2017-03-12</td>
          <td>18/11/2016</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="e88be56fdf383576c2f5eb74034360ad" role="row" class="even">
          <td class="sorting_1">24</td>
          <td>Beatrice</td>
          <td>Pastory</td>
          <td>Ihangwe</td>
          <td>Certificate</td>
          <td>Primary Education</td>
          <td>57</td>
          <td>Nurse</td>
          <td>Senior Nurse</td>
          <td>On Duty</td>
          <td>5638183</td>
          <td>38y5m</td>
          <td>2022-05-21</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="c7dc8595c5bde26e1f6ea941c54dd65b" role="row" class="odd">
          <td class="sorting_1">25</td>
          <td>Benedicta</td>
          <td>Mathayo</td>
          <td>Bengesi</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>51</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>7277746</td>
          <td>32y2m</td>
          <td>2028-07-14</td>
          <td>18/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="3951f3cc180bd1fb236332b84dcbe3d4" role="row" class="even">
          <td class="sorting_1">26</td>
          <td>Bernadeta</td>
          <td>Armogast</td>
          <td>Laswai</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>55</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>6988184</td>
          <td>34y3m</td>
          <td>2024-05-26</td>
          <td>18/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="813bf37a2f36aac08a6558158c7fd2ab" role="row" class="odd">
          <td class="sorting_1">27</td>
          <td>BERNANDO</td>
          <td>LEONARDI</td>
          <td>MSHANA</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>2</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>000000</td>
          <td>2y1m</td>
          <td>2077-02-13</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="e9321bd149a6f23732d4e71bad8dcc4b" role="row" class="even">
          <td class="sorting_1">28</td>
          <td>Bryceson</td>
          <td>Zablon</td>
          <td>Shoo</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>51</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>8888543</td>
          <td>26y4m</td>
          <td>2028-02-08</td>
          <td>18/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="5ea0d7b9cdccfd4e14275e300cc464d1" role="row" class="odd">
          <td class="sorting_1">29</td>
          <td>BRYCESON</td>
          <td>ZABRON</td>
          <td>SHOO</td>
          <td>Advance Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>51</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>8888543</td>
          <td>26y4m</td>
          <td>2028-02-07</td>
          <td>15/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="dc2779aae8a02400a44bddd6acd9aca5" role="row" class="even">
          <td class="sorting_1">30</td>
          <td>CECILIA</td>
          <td>JOSEPH</td>
          <td>MBELE</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>44</td>
          <td>Medical Attendant</td>
          <td>Senior Medical Attendant</td>
          <td>On Duty</td>
          <td>110568482</td>
          <td>8y1m</td>
          <td>2035-05-24</td>
          <td>07/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="f6c12cdd54e4f0c22800d00480256fd5" role="row" class="odd">
          <td class="sorting_1">31</td>
          <td>Charles</td>
          <td>Magoge</td>
          <td>Wambura</td>
          <td>Advance Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>52</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Principal Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>8967639</td>
          <td>25y5m</td>
          <td>2027-09-02</td>
          <td>03/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="fbd23e930c6c7dbf7a47e8220a2e3712" role="row" class="even">
          <td class="sorting_1">32</td>
          <td>CHEMERE</td>
          <td>JOHN</td>
          <td>SIRIRA</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>36</td>
          <td>Medical Doctor</td>
          <td>Medical Doctor I</td>
          <td>On Duty</td>
          <td>111288736</td>
          <td>5y8m</td>
          <td>2043-07-10</td>
          <td>07/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="5d161579e92cca42539038edfe54a98e" role="row" class="odd">
          <td class="sorting_1">33</td>
          <td>Conjesta</td>
          <td>Barongereje</td>
          <td>Obeid</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>30</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>12345678</td>
          <td>8y9m</td>
          <td>2049-10-16</td>
          <td>24/06/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="0f1d895c997a558ee27ea9e54bd6daee" role="row" class="even">
          <td class="sorting_1">34</td>
          <td>Dativa</td>
          <td>Melkiory</td>
          <td>Mahembe</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>31</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111310374</td>
          <td>5y8m</td>
          <td>2048-07-13</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="ddc311912b5b7028fb849e6973234cd8" role="row" class="odd">
          <td class="sorting_1">35</td>
          <td>DAVID</td>
          <td>RICHARD</td>
          <td>TARIMO</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>42</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer I</td>
          <td>On Duty</td>
          <td>110372935</td>
          <td>7y9m</td>
          <td>2037-12-28</td>
          <td>26/03/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="3c768a6f374a9a97042fb95583e0ae03" role="row" class="even">
          <td class="sorting_1">36</td>
          <td>DOMINICUS</td>
          <td>ELIAS</td>
          <td>KABOGO</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>33</td>
          <td>Dental Technologist</td>
          <td>Dental Technologist II</td>
          <td>On Duty</td>
          <td>11993991</td>
          <td>9y9m</td>
          <td>2046-06-10</td>
          <td>09/07/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="970a5c7e65deec238ec57f4e82ce3d00" role="row" class="odd">
          <td class="sorting_1">37</td>
          <td>DORAH</td>
          <td>JULIUS</td>
          <td>MINJA</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>47</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>12001194</td>
          <td>9y8m</td>
          <td>2032-01-28</td>
          <td>14/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="1801a256fd1a3f529e7688fa194910f4" role="row" class="even">
          <td class="sorting_1">38</td>
          <td>Dorosia</td>
          <td>Samwel</td>
          <td>Mtanga</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>53</td>
          <td>Assistant Nursing Officer</td>
          <td>Senior Assistant Nursing Officer</td>
          <td>On Duty</td>
          <td>8938415</td>
          <td>27y6m</td>
          <td>2026-10-19</td>
          <td>10/07/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="4d22bc99e0bd09624227dc5d303e8a86" role="row" class="odd">
          <td class="sorting_1">39</td>
          <td>DROSTA</td>
          <td>ELIAS</td>
          <td>TIBAIJUKA</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>47</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>10714090</td>
          <td>13y8m</td>
          <td>2032-08-01</td>
          <td>14/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="c00883cbf4a482f9317dfbeb78d4e5a4" role="row" class="even">
          <td class="sorting_1">40</td>
          <td>EASTER</td>
          <td>WILSON</td>
          <td>GWILLA</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>25</td>
          <td>Assistant Nursing Officer</td>
          <td>Accountant I</td>
          <td>On Duty</td>
          <td>111503640</td>
          <td>4y11m</td>
          <td>2054-03-28</td>
          <td>13/07/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="9983f11e2f688b5eaec216fbf9e4eaed" role="row" class="odd">
          <td class="sorting_1">41</td>
          <td>Edgar</td>
          <td>Augustine</td>
          <td>Temba</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>47</td>
          <td>Pharmacist</td>
          <td>Pharmacist II</td>
          <td>On Duty</td>
          <td>11975085</td>
          <td>10y0m</td>
          <td>2032-05-29</td>
          <td>06/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="156abe003c7c662373e7c1ed35cc33ae" role="row" class="even">
          <td class="sorting_1">42</td>
          <td>EDINA</td>
          <td>JULIUS</td>
          <td>RUBOHA</td>
          <td>None</td>
          <td>Ordinary Secondary Education</td>
          <td>34</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>112073776</td>
          <td>1y5m</td>
          <td>2045-11-27</td>
          <td>17/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="1813d82416d7c515fb1a9a14823cb856" role="row" class="odd">
          <td class="sorting_1">43</td>
          <td>Edith</td>
          <td>Martin</td>
          <td>Kijazi</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>55</td>
          <td>Nursing Officer</td>
          <td>Nursing Officer II</td>
          <td>On Duty</td>
          <td>6576017</td>
          <td>29y0m</td>
          <td>2024-02-19</td>
          <td>03/07/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="a325803defe0c80fb314f6ea66c9e6f1" role="row" class="even">
          <td class="sorting_1">44</td>
          <td>Edwin</td>
          <td>Martin</td>
          <td>Muhondezi</td>
          <td>Masters Degree</td>
          <td>Advanced Secondary Education</td>
          <td>41</td>
          <td>Medical Specialist</td>
          <td>Medical Specialist I</td>
          <td>On Duty</td>
          <td>11726368</td>
          <td>10y5m</td>
          <td>2038-09-03</td>
          <td>05/07/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="703e4c6c87076ccf84ab1de8165ebb44" role="row" class="odd">
          <td class="sorting_1">45</td>
          <td>ELIA</td>
          <td>CHRISTOPHER</td>
          <td>MSEMWA</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>30</td>
          <td>Medical Doctor</td>
          <td>Medical Doctor I</td>
          <td>On Duty</td>
          <td>112048510</td>
          <td>1y5m</td>
          <td>2049-05-02</td>
          <td>04/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="c31a3ac5b88616f8d555c535822c9189" role="row" class="even">
          <td class="sorting_1">46</td>
          <td>ELIAC</td>
          <td>CHRISOSTOMUS</td>
          <td>MSEMWA</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>30</td>
          <td>Medical Doctor</td>
          <td>Medical Doctor II</td>
          <td>On Duty</td>
          <td>112048510</td>
          <td>1y5m</td>
          <td>2049-05-02</td>
          <td>12/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="d9ac4d578be4ef8fd20decb6798ceb27" role="row" class="odd">
          <td class="sorting_1">47</td>
          <td>Elisia</td>
          <td>Liwinda</td>
          <td>Mpangala</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>44</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>12278971</td>
          <td>9y2m</td>
          <td>2035-11-19</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="19610f561c4fca1227d82e797febd1fe" role="row" class="even">
          <td class="sorting_1">48</td>
          <td>Eliud</td>
          <td>Christopher</td>
          <td>Kishebuka</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>35</td>
          <td>Health Laboratory Technologist</td>
          <td>Laboratory Technologist I</td>
          <td>On Duty</td>
          <td>2458624359629</td>
          <td>9y1m</td>
          <td>2044-03-22</td>
          <td>01/07/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="39ff0adeb67c0224e55f2519bebd8520" role="row" class="odd">
          <td class="sorting_1">49</td>
          <td>EMANUEL</td>
          <td>L</td>
          <td>GINYIMAN</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>28</td>
          <td>Assistant Nursing Officer</td>
          <td>Assistant Nursing Officer I</td>
          <td>On Duty</td>
          <td>112054675</td>
          <td>1y5m</td>
          <td>2051-12-23</td>
          <td>12/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="b114087e15e9f2d582c9604d10792d29" role="row" class="even">
          <td class="sorting_1">50</td>
          <td>EMILIANA</td>
          <td>JACKSON</td>
          <td>KYOGOLO</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>33</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>111043886</td>
          <td>6y6m</td>
          <td>2046-08-23</td>
          <td>03/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="72f3a8386f7823738aebf25b613631cf" role="row" class="odd">
          <td class="sorting_1">51</td>
          <td>EMILY</td>
          <td></td>
          <td>LIHAWA</td>
          <td>Masters Degree</td>
          <td>Advanced Secondary Education</td>
          <td>47</td>
          <td>Medical Officer</td>
          <td>Principal Medical Doctor I</td>
          <td>On Duty</td>
          <td>12241889</td>
          <td>9y1m</td>
          <td>2032-11-03</td>
          <td>22/03/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="fd79b5f6aed8806580f72663cff50e2d" role="row" class="even">
          <td class="sorting_1">52</td>
          <td>Ester</td>
          <td>Ezekiel</td>
          <td>Manase</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>49</td>
          <td>Nurse</td>
          <td>Nurse II</td>
          <td>On Duty</td>
          <td>110774283</td>
          <td>7y7m</td>
          <td>2030-11-14</td>
          <td>01/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="3aa0ddc785e2501ca98ffc743ecf59e2" role="row" class="odd">
          <td class="sorting_1">53</td>
          <td>Evans</td>
          <td>Marshall</td>
          <td>Magare</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>47</td>
          <td>Pharmaceutical Technologist</td>
          <td>Pharmaceutical Technologist I</td>
          <td>On Duty</td>
          <td>11529189</td>
          <td>10y6m</td>
          <td>2032-08-06</td>
          <td>30/06/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="50316bb8c3727c9823e0a9bab8989d30" role="row" class="even">
          <td class="sorting_1">54</td>
          <td>Fatuma</td>
          <td>Abdallah</td>
          <td>Rajabu</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>35</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>12390535</td>
          <td>8y9m</td>
          <td>2044-09-27</td>
          <td>31/01/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="57d52bf2c482282bcd0c01cefd7ed5a4" role="row" class="odd">
          <td class="sorting_1">55</td>
          <td>Fausta</td>
          <td>Joseph</td>
          <td>Mgina</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>34</td>
          <td>Assistant Health Laboratory Technologist</td>
          <td>Assistant Laboratory Technologist</td>
          <td>On Duty</td>
          <td>110999115</td>
          <td>6y6m</td>
          <td>2045-11-08</td>
          <td>05/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="659d5670659287fe839890e25d664d63" role="row" class="even">
          <td class="sorting_1">56</td>
          <td>FAUSTER</td>
          <td>JOHN</td>
          <td>MISSAY</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>44</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>111381428</td>
          <td>5y9m</td>
          <td>2035-06-06</td>
          <td>03/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="9c5b3bba23a58c5b4dc6bc2ba98cd482" role="row" class="odd">
          <td class="sorting_1">57</td>
          <td>Felisiana</td>
          <td>Philip</td>
          <td>Urio</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>36</td>
          <td>Medical Attendant</td>
          <td>Senior Medical Attendant</td>
          <td>On Duty</td>
          <td>110523834</td>
          <td>8y6m</td>
          <td>2043-05-19</td>
          <td>03/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="744e5f9368a17866adba2f0cb4924dd5" role="row" class="even">
          <td class="sorting_1">58</td>
          <td>Fidelis</td>
          <td>Shirima</td>
          <td>Silvano</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>38</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>11975661</td>
          <td>9y11m</td>
          <td>2041-11-24</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="e4a87f12a4a27084b7e8ba3daf5a62b6" role="row" class="odd">
          <td class="sorting_1">59</td>
          <td>Flora</td>
          <td>Iswaga</td>
          <td>Magembe</td>
          <td>Bachelor Degree</td>
          <td>Ordinary Secondary Education</td>
          <td>39</td>
          <td>Assistant Nursing Officer</td>
          <td>Assistant Nursing Officer I</td>
          <td>On Duty</td>
          <td>10716038</td>
          <td>13y4m</td>
          <td>2040-03-28</td>
          <td>13/07/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="da6cef8e6a9ac983cf7338dc76c530aa" role="row" class="even">
          <td class="sorting_1">60</td>
          <td>Flora</td>
          <td>Paul</td>
          <td>Mahimbo</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>26</td>
          <td>Nurse</td>
          <td>Nurse II</td>
          <td>On Duty</td>
          <td>111684696</td>
          <td>4y9m</td>
          <td>2053-06-05</td>
          <td>07/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="fd4a9493cf7fe9c5150210ac8334924b" role="row" class="odd">
          <td class="sorting_1">61</td>
          <td>FLORIDA</td>
          <td>JOSEPHATI</td>
          <td>BARUTI</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>34</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>111068166</td>
          <td>6y2m</td>
          <td>2045-09-25</td>
          <td>07/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="988ceacc548eb7460ff2d35ec0e491e2" role="row" class="even">
          <td class="sorting_1">62</td>
          <td>Frank</td>
          <td>Angelo</td>
          <td>Mgatta</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>30</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>111468327</td>
          <td>5y0m</td>
          <td>2049-09-24</td>
          <td>19/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="9b05e1098e478681edf26bbb191cba1b" role="row" class="odd">
          <td class="sorting_1">63</td>
          <td>frida</td>
          <td>Francis</td>
          <td>Mgaya</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>30</td>
          <td>Assistant Nursing Officer</td>
          <td>Assistant Nursing Officer I</td>
          <td>On Duty</td>
          <td>12393052</td>
          <td>8y6m</td>
          <td>2049-02-22</td>
          <td>03/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="91673780640a214b8115cf95c319b07b" role="row" class="even">
          <td class="sorting_1">64</td>
          <td>Gaudensia</td>
          <td>Agrey</td>
          <td>Kukome</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>41</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>11975915</td>
          <td>10y0m</td>
          <td>2038-10-13</td>
          <td>16/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="bb1b9ca2760e34550a300910dd976d1e" role="row" class="odd">
          <td class="sorting_1">65</td>
          <td>Geofrey</td>
          <td>Evodia</td>
          <td>Zenda</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>32</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>111040199</td>
          <td>6y5m</td>
          <td>2047-02-12</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="0db29a2daffb60715141b1f0388d9753" role="row" class="even">
          <td class="sorting_1">66</td>
          <td>GEOPHREY</td>
          <td>EVODIA</td>
          <td>ZENDA</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>32</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111040199</td>
          <td>6y5m</td>
          <td>2047-02-12</td>
          <td>14/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="009e13a017cac3d92c6506729e2bfd93" role="row" class="odd">
          <td class="sorting_1">67</td>
          <td>Gerwalda</td>
          <td>Pilmin</td>
          <td>Mumba</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>52</td>
          <td>Nursing Officer</td>
          <td>Principal Nursing Officer I</td>
          <td>On Duty</td>
          <td>8836212</td>
          <td>26y10m</td>
          <td>2027-08-23</td>
          <td>18/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="0cfb83e67deaa67dbce04c454b63d42e" role="row" class="even">
          <td class="sorting_1">68</td>
          <td>Gilbonce</td>
          <td>Mwakapinga</td>
          <td>Betson</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>40</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer II</td>
          <td>On Leave Without Payment</td>
          <td>11191786</td>
          <td>12y0m</td>
          <td>2039-09-02</td>
          <td>30/06/2016</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="8e9e60b3d6fafc49c985ddde7112fbac" role="row" class="odd">
          <td class="sorting_1">69</td>
          <td>GLORYMARIA</td>
          <td></td>
          <td>KUNAMBI</td>
          <td>Bachelor Degree</td>
          <td>Ordinary Secondary Education</td>
          <td>44</td>
          <td>Medical Officer</td>
          <td>Medical Doctor II</td>
          <td>On Duty</td>
          <td>10751978</td>
          <td>12y6m</td>
          <td>2035-05-15</td>
          <td>22/03/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="2a9770d8e473b30cbf686ce1b5cff65c" role="row" class="even">
          <td class="sorting_1">70</td>
          <td>GODSHA</td>
          <td>JULIUS</td>
          <td>AKWANYA</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>33</td>
          <td>Technologist/Technician(Prosthetic)</td>
          <td>Laboratory Technologist II</td>
          <td>On Duty</td>
          <td>000000</td>
          <td>2y0m</td>
          <td>2046-05-26</td>
          <td>02/02/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="8908acb739f38b52f27d2d0253229c9d" role="row" class="odd">
          <td class="sorting_1">71</td>
          <td>Hadija</td>
          <td>Abdallah</td>
          <td>Siogopi</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>48</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>12336052</td>
          <td>8y9m</td>
          <td>2031-12-24</td>
          <td>30/01/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="57a34128d4ebb30d7857ad655c5b8f92" role="row" class="even">
          <td class="sorting_1">72</td>
          <td>Hadija</td>
          <td>Abdalllah</td>
          <td>Ukasha</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>25</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>111686789</td>
          <td>5y0m</td>
          <td>2054-02-06</td>
          <td>07/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="9f3b72db8a16509c7f385afab0b7341e" role="row" class="odd">
          <td class="sorting_1">73</td>
          <td>Hamis</td>
          <td>Omari</td>
          <td>Kamangu</td>
          <td>Advance Diploma</td>
          <td></td>
          <td>49</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>9164284</td>
          <td>24y0m</td>
          <td>2030-06-30</td>
          <td>28/11/2013</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="6ab203d78efcca9ac93a4e951c315c1a" role="row" class="even">
          <td class="sorting_1">74</td>
          <td>Hamisi</td>
          <td>Saidi</td>
          <td>Mahamba</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>31</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>111310342</td>
          <td>5y8m</td>
          <td>2048-02-04</td>
          <td>19/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="f2e6df0db0bdcd572ead6bdad936db4a" role="row" class="odd">
          <td class="sorting_1">75</td>
          <td>HANCE</td>
          <td>NYIMBO</td>
          <td>MUHANGWA</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>40</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>11975890</td>
          <td>4y7m</td>
          <td>2039-12-23</td>
          <td>14/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="3f2885772375082ba9095eb61af4b0f9" role="row" class="even">
          <td class="sorting_1">76</td>
          <td>Hassan</td>
          <td>Petrobas</td>
          <td>Yesaya</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>47</td>
          <td>Assistant Health Laboratory Technologist</td>
          <td>Senior Assistant Laboratory Technologist</td>
          <td>On Duty</td>
          <td>9752036</td>
          <td>18y3m</td>
          <td>2032-11-17</td>
          <td>28/11/2013</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="92c757a71b124c947257b3a76d6aa966" role="row" class="odd">
          <td class="sorting_1">77</td>
          <td>Hawa</td>
          <td>Bakari</td>
          <td>Nimaila</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>47</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>9581759</td>
          <td>18y7m</td>
          <td>2032-11-26</td>
          <td>08/12/2016</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="0ccf38fa265458ed1da3319f3053fc8e" role="row" class="even">
          <td class="sorting_1">78</td>
          <td>HONEST</td>
          <td>GABLIEL</td>
          <td>LYMO</td>
          <td>Advance Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>51</td>
          <td>Assistant Medical Officer</td>
          <td>Assistant Medical Officer I</td>
          <td>On Duty</td>
          <td>10649626</td>
          <td>11y11m</td>
          <td>2028-06-21</td>
          <td>04/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="5d30f9f2f4114874d7748e568af31796" role="row" class="odd">
          <td class="sorting_1">79</td>
          <td>Ibrahim</td>
          <td>Mohamed</td>
          <td>Mzingi</td>
          <td>Advance Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>57</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Principal Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>7216396</td>
          <td>33y7m</td>
          <td>2022-04-15</td>
          <td>06/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="fc0fe6e790f1d17a03ac7bc8830b7165" role="row" class="even">
          <td class="sorting_1">80</td>
          <td>ILUMINATHA</td>
          <td>J</td>
          <td>CLAVERY</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>39</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>10905740</td>
          <td>13y2m</td>
          <td>2040-12-26</td>
          <td>01/09/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="df6c58de55eea8040412c9c5c2290f0a" role="row" class="odd">
          <td class="sorting_1">81</td>
          <td>JANUARY</td>
          <td>JOHN</td>
          <td>KIKOVE</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>52</td>
          <td>Health Assistant</td>
          <td>Health Officer II</td>
          <td>On Duty</td>
          <td>8449898</td>
          <td>29y7m</td>
          <td>2027-09-30</td>
          <td>15/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="019a9ecbddff81909b895fba9df6945e" role="row" class="even">
          <td class="sorting_1">82</td>
          <td>JOHN</td>
          <td>EWALD</td>
          <td>OISSO</td>
          <td>Advance Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>48</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer I</td>
          <td>On Duty</td>
          <td>11386720</td>
          <td>11y1m</td>
          <td>2032-01-12</td>
          <td>31/01/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="beb76e7ce256060e796fa5ece3b32ad0" role="row" class="odd">
          <td class="sorting_1">83</td>
          <td>Joyce</td>
          <td>Heavenlight</td>
          <td>Massawe</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>52</td>
          <td>Assistant Nursing Officer</td>
          <td>Assistant Nursing Officer II</td>
          <td>On Duty</td>
          <td>8941082</td>
          <td>27y10m</td>
          <td>2027-08-04</td>
          <td>15/08/2014</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="e4c296ae418029390a61fd1d54892a40" role="row" class="even">
          <td class="sorting_1">84</td>
          <td>Joyce</td>
          <td>Yusuph</td>
          <td>Tambwe</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>32</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>9877777</td>
          <td>5y6m</td>
          <td>2047-05-14</td>
          <td>19/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="c0d5b8061e828f0767aaa57cd4d2f9b8" role="row" class="odd">
          <td class="sorting_1">85</td>
          <td>Joyce</td>
          <td>Anthon</td>
          <td>Msese</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>33</td>
          <td>Health Laboratory Technologist</td>
          <td>Laboratory Technologist I</td>
          <td>On Duty</td>
          <td>12292214</td>
          <td>9y0m</td>
          <td>2046-05-29</td>
          <td>17/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="1720dcdc716cc6d5be64291d905e86fa" role="row" class="even">
          <td class="sorting_1">86</td>
          <td>JOYCE</td>
          <td>JONATHAN</td>
          <td>MASALA</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>23</td>
          <td>Nurse</td>
          <td>Nurse II</td>
          <td>On Duty</td>
          <td>000000</td>
          <td>2y1m</td>
          <td>2056-06-21</td>
          <td>03/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="e531fc5cb301b3220e5bbce114b2557a" role="row" class="odd">
          <td class="sorting_1">87</td>
          <td>JOYCE</td>
          <td>ALEX</td>
          <td>MGANA</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>29</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111322219</td>
          <td>5y7m</td>
          <td>2050-05-10</td>
          <td>14/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="24981fec005f83f23bd2e2f9b4e8ec8e" role="row" class="even">
          <td class="sorting_1">88</td>
          <td>JOYCELUCY</td>
          <td>EDWARD</td>
          <td>SOMMY</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>31</td>
          <td>Assistant Nursing Officer</td>
          <td>Assistant Nursing Officer I</td>
          <td>On Duty</td>
          <td>112054668</td>
          <td>1y4m</td>
          <td>2048-07-10</td>
          <td>04/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="24e469dc9f77df8cbb663f8e441428a8" role="row" class="odd">
          <td class="sorting_1">89</td>
          <td>Juliana</td>
          <td>Raymond</td>
          <td>Massawe</td>
          <td>Secondary School</td>
          <td></td>
          <td>45</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>9860601</td>
          <td>16y7m</td>
          <td>2034-06-19</td>
          <td>28/11/2013</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="8a3ec7dca77398756e3e29dcde254e90" role="row" class="even">
          <td class="sorting_1">90</td>
          <td>Juma</td>
          <td>Ramadhani</td>
          <td>Kifaru</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>59</td>
          <td>Medical Record Technician</td>
          <td>Medical Record Technician II</td>
          <td>On Duty</td>
          <td>5997088</td>
          <td>38y2m</td>
          <td>2020-12-31</td>
          <td>14/07/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="98df3b95a1dd519e819edd56a8936060" role="row" class="odd">
          <td class="sorting_1">91</td>
          <td>KHADIJA</td>
          <td>A</td>
          <td>OMARI</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>1</td>
          <td>Assistant Nursing Officer</td>
          <td>Assistant Nursing Officer I</td>
          <td>On Duty</td>
          <td>112054661</td>
          <td>30y11m</td>
          <td>2078-01-24</td>
          <td>10/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="ddb07a6f0709da081b05842c71d90007" role="row" class="even">
          <td class="sorting_1">92</td>
          <td>KISIMBA</td>
          <td>AHMAD</td>
          <td>MSOLOMI</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>43</td>
          <td>Dental Therapist</td>
          <td>Dental Therapist I</td>
          <td>On Duty</td>
          <td>12294096</td>
          <td>10y2m</td>
          <td>2036-06-28</td>
          <td>07/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="68050302be7eeb70bc4d2388b7ca75a9" role="row" class="odd">
          <td class="sorting_1">93</td>
          <td>Leonard</td>
          <td>Luther</td>
          <td>Mwamkoa</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>45</td>
          <td>Medical Doctor</td>
          <td>Medical Doctor II</td>
          <td>On Duty</td>
          <td>10832471</td>
          <td>13y0m</td>
          <td>2035-01-08</td>
          <td>20/12/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="347b0c8856e9f4af98dfda760632f2fe" role="row" class="even">
          <td class="sorting_1">94</td>
          <td>LETICIA</td>
          <td>P</td>
          <td>MATOGO</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>3</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>112072064</td>
          <td>1y5m</td>
          <td>2077-01-06</td>
          <td>10/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="c99df2158793e309470278862e5acf78" role="row" class="odd">
          <td class="sorting_1">95</td>
          <td>Lilian</td>
          <td>George</td>
          <td>Mnzava</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>59</td>
          <td>Clinical Officer</td>
          <td>Principal Clinical Officer I</td>
          <td>On Duty</td>
          <td>6272043</td>
          <td>38y6m</td>
          <td>2020-11-25</td>
          <td>06/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="acb640012842e0c75c7650ac59a3c09b" role="row" class="even">
          <td class="sorting_1">96</td>
          <td>LILIAN</td>
          <td>JOHN</td>
          <td>MISANGO</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>34</td>
          <td>Social Welfare Officer</td>
          <td>Social Welfare Officer I</td>
          <td>On Duty</td>
          <td>12221672</td>
          <td>9y3m</td>
          <td>2045-11-26</td>
          <td>30/05/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="ca374c88f91398cf99ef284f70bd5392" role="row" class="odd">
          <td class="sorting_1">97</td>
          <td>LINDANI</td>
          <td>G</td>
          <td>GAGA</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>31</td>
          <td>Medical Officer</td>
          <td>Medical Doctor II</td>
          <td>On Duty</td>
          <td>112048463</td>
          <td>1y9m</td>
          <td>2048-08-07</td>
          <td>21/03/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="3387f011a6d867a543e9074d55d47282" role="row" class="even">
          <td class="sorting_1">98</td>
          <td>LUCIA</td>
          <td>RICHARD</td>
          <td>MAGANGA</td>
          <td>Secondary School</td>
          <td>Ordinary Secondary Education</td>
          <td>26</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>111351125</td>
          <td>5y7m</td>
          <td>2053-06-12</td>
          <td>07/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="43d774d9fef8ab94a737203c88f6bcaa" role="row" class="odd">
          <td class="sorting_1">99</td>
          <td>Lucy</td>
          <td>Nalogwa</td>
          <td>Shani</td>
          <td>Bachelor Degree</td>
          <td>Ordinary Secondary Education</td>
          <td>36</td>
          <td>Social Welfare Officer</td>
          <td>Social Welfare Officer II</td>
          <td>On Duty</td>
          <td>111384245</td>
          <td>5y6m</td>
          <td>2043-04-23</td>
          <td>15/12/2014</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="049b92087dee866faf93035ad72793de" role="row" class="even">
          <td class="sorting_1">100</td>
          <td>Lulu</td>
          <td>Juma</td>
          <td>Selemani</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>31</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>12386395</td>
          <td>8y9m</td>
          <td>2048-12-24</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="49251738da8f66be948d50c06a640611" role="row" class="odd">
          <td class="sorting_1">101</td>
          <td>Maria</td>
          <td>Ndorobo</td>
          <td>Dui</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>30</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>12345678</td>
          <td></td>
          <td>2049-02-11</td>
          <td>25/06/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="0f914f8ab47e581b9fb37bf4fd1d3c9d" role="row" class="even">
          <td class="sorting_1">102</td>
          <td>MARIAJEMA</td>
          <td>S</td>
          <td>MGANGA</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>32</td>
          <td>Dental Therapist</td>
          <td>Dental Therapist I</td>
          <td>On Duty</td>
          <td>11838263</td>
          <td>10y2m</td>
          <td>2047-10-03</td>
          <td>15/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="6cb6f2b50d97cb1b609e943378260683" role="row" class="odd">
          <td class="sorting_1">103</td>
          <td>Mariam</td>
          <td>SAD</td>
          <td>Fakhi</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>35</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer I</td>
          <td>On Duty</td>
          <td>11989475</td>
          <td>9y9m</td>
          <td>2044-09-10</td>
          <td>03/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="1c9f8eecc91a53f3f6b73f49e7811042" role="row" class="even">
          <td class="sorting_1">104</td>
          <td>MARIAM</td>
          <td>ABEID</td>
          <td>KALELA</td>
          <td>Advance Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>31</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer II</td>
          <td>On Duty</td>
          <td>111491232</td>
          <td>5y0m</td>
          <td>2048-11-23</td>
          <td>04/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="88b3d04b2c5d8e3334437947b01f9063" role="row" class="odd">
          <td class="sorting_1">105</td>
          <td>Martha</td>
          <td>Elia</td>
          <td>Mungoya</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>30</td>
          <td>Health Laboratory Technologist</td>
          <td>Laboratory Technologist II</td>
          <td>On Duty</td>
          <td>12345678</td>
          <td>4y9m</td>
          <td>2049-06-02</td>
          <td>04/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="8cc0715af8877eb94847f3b1c53bf095" role="row" class="even">
          <td class="sorting_1">106</td>
          <td>Martin</td>
          <td>Style</td>
          <td>Kalongolela</td>
          <td>Advance Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>51</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Principal Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>8647306</td>
          <td>28y3m</td>
          <td>2028-12-09</td>
          <td>21/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="36e48ee91ad262d061b95faa9c78bfc2" role="row" class="odd">
          <td class="sorting_1">107</td>
          <td>MARTIN</td>
          <td>MICHAEL</td>
          <td>PANDUKA</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>35</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111023036</td>
          <td>6y5m</td>
          <td>2044-12-28</td>
          <td>03/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="20213936928d3e7eb081cbd142526437" role="row" class="even">
          <td class="sorting_1">108</td>
          <td>Mary</td>
          <td>Athanas</td>
          <td>Mpochela</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>49</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>7747461</td>
          <td>31y3m</td>
          <td>2030-05-04</td>
          <td>28/11/2013</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="7da3572062ea9d7fec24d7434e6389fa" role="row" class="odd">
          <td class="sorting_1">109</td>
          <td>Mary</td>
          <td>Jonathan</td>
          <td>Mkwavi</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>45</td>
          <td>Environmental Health Assistant</td>
          <td>Senior Assistant Environmental Health Officer</td>
          <td>On Duty</td>
          <td>12297915</td>
          <td>8y11m</td>
          <td>2034-12-27</td>
          <td>03/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="84aa01ed4e694e9aec931181f066bdb2" role="row" class="even">
          <td class="sorting_1">110</td>
          <td>MASAGA</td>
          <td>SAGANA</td>
          <td>IKWABE</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>32</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111463875</td>
          <td>4y11m</td>
          <td>2047-03-29</td>
          <td>14/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="1676386e0b2ea1c98b3d948d5f36e21b" role="row" class="odd">
          <td class="sorting_1">111</td>
          <td>MASOUD</td>
          <td>A</td>
          <td>MSOLOMI</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>29</td>
          <td>Laboratory Attendant</td>
          <td>Laboratory Attendant</td>
          <td>On Duty</td>
          <td>112050292</td>
          <td>1y5m</td>
          <td>2050-03-11</td>
          <td>17/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="96d006656843c81fb0c9a933b8bab3ba" role="row" class="even">
          <td class="sorting_1">112</td>
          <td>MGENI</td>
          <td>MAHMOUD</td>
          <td>MPINGA</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>33</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer I</td>
          <td>On Duty</td>
          <td>110746652</td>
          <td>7y11m</td>
          <td>2046-08-14</td>
          <td>07/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="6cf1a03d0bafdb17f608d2cff4325511" role="row" class="odd">
          <td class="sorting_1">113</td>
          <td>Michael</td>
          <td>Francis</td>
          <td>Gweba</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>52</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Principal Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>7191787</td>
          <td>34y0m</td>
          <td>2027-10-11</td>
          <td>28/11/2013</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="91ef91885516b3434d6563a2c15f293e" role="row" class="even">
          <td class="sorting_1">114</td>
          <td>Michael</td>
          <td>Victor</td>
          <td>Ngowi</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>29</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>123456678</td>
          <td>5y0m</td>
          <td>2050-09-12</td>
          <td>19/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="eb9ebb7a15fd9726712e6d99a0c35f47" role="row" class="odd">
          <td class="sorting_1">115</td>
          <td>MICHAEL</td>
          <td>VICTOR</td>
          <td>NGOWI</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>29</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111478476</td>
          <td>4y11m</td>
          <td>2050-09-12</td>
          <td>14/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="e073fe823d088b0576caa4b47311e0d1" role="row" class="even">
          <td class="sorting_1">116</td>
          <td>Mina</td>
          <td>GABRIEL</td>
          <td>Mkami</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>43</td>
          <td>Health Laboratory Technologist</td>
          <td>Laboratory Technologist II</td>
          <td>On Duty</td>
          <td>10985414</td>
          <td>12y9m</td>
          <td>2036-07-29</td>
          <td>25/03/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="33bb2377a359ba62261586ce46b984c7" role="row" class="odd">
          <td class="sorting_1">117</td>
          <td>Mkuu</td>
          <td>Barnabas</td>
          <td>Hanje</td>
          <td>Advance Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>57</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>5920130</td>
          <td>34y3m</td>
          <td>2022-08-22</td>
          <td>28/11/2013</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="6a4a12a854c36cfe2f2e49f14cc75fbd" role="row" class="even">
          <td class="sorting_1">118</td>
          <td>MOHAMED</td>
          <td>JUMA</td>
          <td>NGASINDA</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>32</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111347035</td>
          <td>5y7m</td>
          <td>2048-01-11</td>
          <td>03/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="cbbab6e73c8e86aed7e37808ea02a4a8" role="row" class="odd">
          <td class="sorting_1">119</td>
          <td>Muhhamed</td>
          <td>Abdul</td>
          <td>Salim</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>26</td>
          <td>Pharmaceutical Technologist</td>
          <td>Pharmaceutical Technologist I</td>
          <td>On Duty</td>
          <td>111482935</td>
          <td>4y10m</td>
          <td>2053-06-02</td>
          <td>30/01/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="de48595361bdf5171070e1e619120601" role="row" class="even">
          <td class="sorting_1">120</td>
          <td>Mwajuma</td>
          <td>Yusuf</td>
          <td>Mdemu</td>
          <td>Diploma</td>
          <td></td>
          <td>53</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>7813360</td>
          <td>31y4m</td>
          <td>2026-08-17</td>
          <td>28/11/2013</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="bc39e5d96f56d7db199dce75c9138902" role="row" class="odd">
          <td class="sorting_1">121</td>
          <td>Mwajuma</td>
          <td>Fikeni</td>
          <td>Mohamedi</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>37</td>
          <td>Medical Attendant</td>
          <td>Principal Medical Attendant</td>
          <td>On Duty</td>
          <td>12300775</td>
          <td>9y0m</td>
          <td>2042-12-23</td>
          <td>31/01/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="1251415e2c1a9a2c45355ab6ebfd103a" role="row" class="even">
          <td class="sorting_1">122</td>
          <td>MWAJUMA</td>
          <td>ALLY</td>
          <td>PINDINGU</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>46</td>
          <td>Medical Doctor</td>
          <td>Medical Doctor II</td>
          <td>On Duty</td>
          <td>9731392</td>
          <td>19y3m</td>
          <td>2033-12-28</td>
          <td>30/09/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="38f2786f379c84d28c22fa0aa405a66b" role="row" class="odd">
          <td class="sorting_1">123</td>
          <td>Mwanahawa</td>
          <td>Uledi</td>
          <td>Salum</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>36</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>110561883</td>
          <td>8y1m</td>
          <td>2043-07-06</td>
          <td>05/03/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="349c715ec82a80a1f06efc4c48d4b042" role="row" class="even">
          <td class="sorting_1">124</td>
          <td>NAKEMBETWA</td>
          <td>J</td>
          <td>MKUMBO</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>1</td>
          <td>Pharmacist</td>
          <td>Pharmacist I</td>
          <td>On Duty</td>
          <td>112054645</td>
          <td>1y5m</td>
          <td>2078-07-31</td>
          <td>05/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="8967e8d39dcef1217dddeb07e582013a" role="row" class="odd">
          <td class="sorting_1">125</td>
          <td>NASRIYA</td>
          <td>N</td>
          <td>KHAMIS</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>31</td>
          <td>Medical Doctor</td>
          <td>Medical Doctor I</td>
          <td>On Duty</td>
          <td>112048517</td>
          <td>1y5m</td>
          <td>2048-04-18</td>
          <td>05/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="ade14352fb891a6becab5055eb364ba6" role="row" class="even">
          <td class="sorting_1">126</td>
          <td>Neema</td>
          <td>Doris</td>
          <td>Camara</td>
          <td>Bachelor Degree</td>
          <td>Ordinary Secondary Education</td>
          <td>33</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>0000</td>
          <td>9y2m</td>
          <td>2046-05-12</td>
          <td>23/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="7a83bc34739997f8325aa626f5147c5d" role="row" class="odd">
          <td class="sorting_1">127</td>
          <td>Neema</td>
          <td>Wera</td>
          <td>Mushi</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>39</td>
          <td>Assistant Health Laboratory Technologist</td>
          <td>Senior Assistant Laboratory Technologist</td>
          <td>On Duty</td>
          <td>10985399</td>
          <td>12y9m</td>
          <td>2040-05-23</td>
          <td>20/12/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="4a393f3680a0fc21b52c0dac86a10e24" role="row" class="even">
          <td class="sorting_1">128</td>
          <td>NEEMA</td>
          <td>MTUNDI</td>
          <td>IRUGA</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>29</td>
          <td>Nurse</td>
          <td>Nurse II</td>
          <td>On Duty</td>
          <td>111002585</td>
          <td>6y6m</td>
          <td>2050-05-01</td>
          <td>18/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="95216f1f10231af362dacd1676912a7c" role="row" class="odd">
          <td class="sorting_1">129</td>
          <td>Never</td>
          <td>Leopold</td>
          <td>Malangalila</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>39</td>
          <td>Nurse</td>
          <td>Senior Nurse</td>
          <td>On Duty</td>
          <td>12206948</td>
          <td>9y8m</td>
          <td>2040-06-13</td>
          <td>01/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="fda6791195baed7ebc0faae52a6a25c8" role="row" class="even">
          <td class="sorting_1">130</td>
          <td>NOEL</td>
          <td>MFUMBULWA</td>
          <td>CHARLES</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>30</td>
          <td>Medical Officer</td>
          <td>Medical Doctor II</td>
          <td>On Duty</td>
          <td>112048486</td>
          <td>1y5m</td>
          <td>2049-12-23</td>
          <td>21/03/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="b3ce38241f7301ca15353a73d6f9f7f3" role="row" class="odd">
          <td class="sorting_1">131</td>
          <td>NYABERO</td>
          <td>JOHN</td>
          <td>MAHAWA</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>41</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer I</td>
          <td>On Duty</td>
          <td>000000</td>
          <td>2y1m</td>
          <td>2038-05-20</td>
          <td>03/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="5a65f216e0b1dbc32041d41e3008a9ea" role="row" class="even">
          <td class="sorting_1">132</td>
          <td>Nyakilama</td>
          <td>Sailas</td>
          <td>Bwire</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>29</td>
          <td>Nurse</td>
          <td>Nurse II</td>
          <td>On Duty</td>
          <td>111003427</td>
          <td>6y5m</td>
          <td>2050-10-08</td>
          <td>19/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="aae8a8b1c808dea8c82ea3872ad6e344" role="row" class="odd">
          <td class="sorting_1">133</td>
          <td>OMARI</td>
          <td>WAZIRI</td>
          <td>MHANDO</td>
          <td>Diploma</td>
          <td>Primary Education</td>
          <td>61</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>4656405</td>
          <td>41y11m</td>
          <td>2018-09-12</td>
          <td>03/07/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="19fc3ec20dade6f665ef363e0bc8653f" role="row" class="even">
          <td class="sorting_1">134</td>
          <td>PASCHAL</td>
          <td>HUNGWI</td>
          <td>MAYALA</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>32</td>
          <td>Health Laboratory Scientist</td>
          <td>Health Laboratory Scientist II</td>
          <td>On Duty</td>
          <td>112095573</td>
          <td>1y5m</td>
          <td>2047-07-06</td>
          <td>21/03/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="561939fedb52398816adf030d5b517c7" role="row" class="odd">
          <td class="sorting_1">135</td>
          <td>PATRICK</td>
          <td>MAZENGO</td>
          <td>CHIBWANA</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>36</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111474376</td>
          <td>4y11m</td>
          <td>2043-12-29</td>
          <td>14/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="aa0575be1439e93e5c298857a141a038" role="row" class="even">
          <td class="sorting_1">136</td>
          <td>PAULINA</td>
          <td>PETER</td>
          <td>KWEKA</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>30</td>
          <td>Medical Attendant</td>
          <td>Senior Medical Attendant</td>
          <td>On Duty</td>
          <td>1114413661</td>
          <td>5y3m</td>
          <td>2049-12-08</td>
          <td>03/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="dd02ab0f1cd722db01811904bb8d4bb0" role="row" class="odd">
          <td class="sorting_1">137</td>
          <td>PENDO</td>
          <td>AMANI</td>
          <td>KENGWA</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>27</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>11152295</td>
          <td>4y4m</td>
          <td>2052-04-26</td>
          <td>19/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="ae4cc8ac2d1a761adf1cb4ba01e84495" role="row" class="even">
          <td class="sorting_1">138</td>
          <td>PENDO</td>
          <td>ELIAS</td>
          <td>KAGGUNDU</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>47</td>
          <td>Social Welfare Officer</td>
          <td>Social Welfare Officer II</td>
          <td>On Duty</td>
          <td>8967499</td>
          <td>26y6m</td>
          <td>2032-05-21</td>
          <td>30/05/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="00dc3c1c8bcd02ce9decbcdedcae1b24" role="row" class="odd">
          <td class="sorting_1">139</td>
          <td>PENDO</td>
          <td>SADIKIEL</td>
          <td>MMBANDO</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>28</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer I</td>
          <td>On Duty</td>
          <td>0000000</td>
          <td>2y1m</td>
          <td>2051-02-27</td>
          <td>03/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="aadbcc4131d15490905155703584a54d" role="row" class="even">
          <td class="sorting_1">140</td>
          <td>PRISCA</td>
          <td>GENNER</td>
          <td>MWAIJANDE</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>27</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111470155</td>
          <td>4y11m</td>
          <td>2052-03-25</td>
          <td>14/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="7cd04550c2e05afc755a9bff90f7eda5" role="row" class="odd">
          <td class="sorting_1">141</td>
          <td>RAIYA</td>
          <td>A</td>
          <td>HAMADI</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>36</td>
          <td>Medical Officer</td>
          <td>Medical Doctor II</td>
          <td>On Duty</td>
          <td>111039885</td>
          <td>1y5m</td>
          <td>2043-07-31</td>
          <td>22/03/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="578bbc99540a119b4469a672e10f6a41" role="row" class="even">
          <td class="sorting_1">142</td>
          <td>RASHID</td>
          <td>A</td>
          <td>MHINA</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>47</td>
          <td>Medical Officer</td>
          <td>Medical Doctor II</td>
          <td>On Duty</td>
          <td>111751889</td>
          <td>4y10m</td>
          <td>2032-06-14</td>
          <td>21/03/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="00f6769df3a1e3417d9b17f4d39a7b35" role="row" class="odd">
          <td class="sorting_1">143</td>
          <td>REBECAH</td>
          <td>ZABRON</td>
          <td>RUVANDA</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>42</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer I</td>
          <td>On Duty</td>
          <td>11940973</td>
          <td>10y1m</td>
          <td>2037-05-03</td>
          <td>16/04/2016</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="66248333b3a32644528efda4ac170925" role="row" class="even">
          <td class="sorting_1">144</td>
          <td>Rebecca</td>
          <td>Dickson</td>
          <td>Mlelwa</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>31</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>111038363</td>
          <td>5y7m</td>
          <td>2048-05-04</td>
          <td>19/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="377fe895cf43b71b92666a17171368a1" role="row" class="odd">
          <td class="sorting_1">145</td>
          <td>Rebeka</td>
          <td>Amosi</td>
          <td>Mnandi</td>
          <td>Certificate</td>
          <td>Primary Education</td>
          <td>39</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>11397289</td>
          <td>11y2m</td>
          <td>2040-12-12</td>
          <td>26/03/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="db19a6ad1b04c5621d479d421ceb55ca" role="row" class="even">
          <td class="sorting_1">146</td>
          <td>Regina</td>
          <td>Timothy</td>
          <td>Mbonde</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>30</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>12306188</td>
          <td>9y2m</td>
          <td>2049-02-20</td>
          <td>30/01/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="15191c23d18d03dad04a408cf321696e" role="row" class="odd">
          <td class="sorting_1">147</td>
          <td>Regnald</td>
          <td>Shepherdson</td>
          <td>Mlay</td>
          <td>Masters Degree</td>
          <td>Ordinary Secondary Education</td>
          <td>50</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Principal Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>8832694</td>
          <td>26y10m</td>
          <td>2029-12-18</td>
          <td>03/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="c9ab09ec1c0804fbc05e5fed1ac17d5c" role="row" class="even">
          <td class="sorting_1">148</td>
          <td>Rehema</td>
          <td>Rajabu</td>
          <td>Rashidi</td>
          <td>Certificate</td>
          <td>Primary Education</td>
          <td>62</td>
          <td>Nurse</td>
          <td>Principal Nurse I</td>
          <td>On Duty</td>
          <td>5087666</td>
          <td>39y6m</td>
          <td>2017-07-24</td>
          <td>03/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="78cc51b7db4d15f60cba336f51642343" role="row" class="odd">
          <td class="sorting_1">149</td>
          <td>RENATUS</td>
          <td>ANATORY</td>
          <td>RWEHABURA</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>34</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111023143</td>
          <td>6y6m</td>
          <td>2045-08-07</td>
          <td>04/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="8dfdfc3122a1df72730218b1ba1fcc59" role="row" class="even">
          <td class="sorting_1">150</td>
          <td>Ritha</td>
          <td>Frans</td>
          <td>Sulle</td>
          <td>Primary School</td>
          <td>Ordinary Secondary Education</td>
          <td>39</td>
          <td>Nurse</td>
          <td>Nurse Grade II</td>
          <td>On Duty</td>
          <td>111719683</td>
          <td>4y7m</td>
          <td>2040-02-18</td>
          <td>20/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="8d46b256cc0f3c2c909504a406e1dabe" role="row" class="odd">
          <td class="sorting_1">151</td>
          <td>RITHA</td>
          <td>MEINRARD</td>
          <td>KAMBANGA</td>
          <td>Advance Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>53</td>
          <td>Assistant Medical Officer</td>
          <td>Senior Assistant Medical Officer</td>
          <td>On Duty</td>
          <td>8949099</td>
          <td>26y8m</td>
          <td>2026-12-17</td>
          <td>18/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="6964399ba85a44b73fb12888b8ed8dd5" role="row" class="even">
          <td class="sorting_1">152</td>
          <td>RITHA</td>
          <td>FRATENI</td>
          <td>SULLE</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>39</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>111719683</td>
          <td>4y7m</td>
          <td>2040-02-18</td>
          <td>19/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="c29dc9101c0bb8a3de9cb7d87189630e" role="row" class="odd">
          <td class="sorting_1">153</td>
          <td>ROSE</td>
          <td>JOHN</td>
          <td>CHUNDU</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>36</td>
          <td>Social Welfare Officer</td>
          <td>Senior Social Welfare Officer</td>
          <td>On Duty</td>
          <td>11214209</td>
          <td>11y11m</td>
          <td>2043-04-30</td>
          <td>30/05/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="b7fcac815d263d858f8ebc2472f8df3e" role="row" class="even">
          <td class="sorting_1">154</td>
          <td>Safihuma</td>
          <td>Rashidi</td>
          <td>Mdee</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>47</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>8448868</td>
          <td>29y6m</td>
          <td>2032-08-01</td>
          <td>19/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="0efa57ab3c5c02b42745759d6c081bed" role="row" class="odd">
          <td class="sorting_1">155</td>
          <td>Said</td>
          <td>Nkusa</td>
          <td>Dossa</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>47</td>
          <td>Records Management Assistant</td>
          <td>Records Management Assistant I</td>
          <td>On Duty</td>
          <td>9704644</td>
          <td>17y8m</td>
          <td>2032-11-30</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="69f639a9894b65aef7fa52899a29fd03" role="row" class="even">
          <td class="sorting_1">156</td>
          <td>Salimu</td>
          <td>Badi</td>
          <td>Msuya</td>
          <td>Advance Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>42</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Principal Assistant Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>10583315</td>
          <td>14y4m</td>
          <td>2037-09-22</td>
          <td>19/12/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="9842ef1a4340e908e35b7e1a75fd913d" role="row" class="odd">
          <td class="sorting_1">157</td>
          <td>SALMA</td>
          <td>ALI</td>
          <td>HAMAD</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>30</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer II</td>
          <td>On Duty</td>
          <td>111468194</td>
          <td>5y0m</td>
          <td>2049-11-10</td>
          <td>16/01/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="ec747fc9c444c3154715b32317a683a4" role="row" class="even">
          <td class="sorting_1">158</td>
          <td>SAMSON</td>
          <td>LUSEKELO</td>
          <td>MWAHOYO</td>
          <td>Certificate</td>
          <td>Primary Education</td>
          <td>60</td>
          <td>Health Assistant</td>
          <td>Senior Assistant Environmental Health Officer</td>
          <td>On Duty</td>
          <td>5319341</td>
          <td>35y2m</td>
          <td>2019-12-24</td>
          <td>03/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="656ddb25c44047abe1734aa940bfd259" role="row" class="odd">
          <td class="sorting_1">159</td>
          <td>Sarah</td>
          <td>Emmanuel</td>
          <td>Mwakijolo</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>33</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>12388753</td>
          <td>8y9m</td>
          <td>2046-06-23</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="8535121bfcfb612c9e06a55b88149375" role="row" class="even">
          <td class="sorting_1">160</td>
          <td>SARAH</td>
          <td>EMMANUEL</td>
          <td>MWAKIJOLO</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>33</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>12388753</td>
          <td>8y9m</td>
          <td>2046-06-23</td>
          <td>15/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="1a4e2efae14e4c9c06aa8b68c4e8b0ef" role="row" class="odd">
          <td class="sorting_1">161</td>
          <td>Sauda</td>
          <td>Bakari</td>
          <td>Mwango</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>32</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>111310224</td>
          <td>5y8m</td>
          <td>2047-10-25</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="84dbae1702b859d1a23bdfa85cee4a1c" role="row" class="even">
          <td class="sorting_1">162</td>
          <td>Selemani</td>
          <td>Abdallah</td>
          <td>Mfinanga</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>32</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>12345678</td>
          <td>5y0m</td>
          <td>2047-03-04</td>
          <td>19/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="7da88b4885b44b139b059ae130d3eabb" role="row" class="odd">
          <td class="sorting_1">163</td>
          <td>SHARIFA</td>
          <td>MUSTAK</td>
          <td>ALBAHAI</td>
          <td>Certificate</td>
          <td>Advanced Secondary Education</td>
          <td>28</td>
          <td>Clinical Assistant</td>
          <td>Clinical Assistant</td>
          <td>On Duty</td>
          <td>111518555</td>
          <td>4y9m</td>
          <td>2051-03-18</td>
          <td>05/12/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="ae2293d00b754a6c419c23318b85f668" role="row" class="even">
          <td class="sorting_1">164</td>
          <td>SHARIFA</td>
          <td>NURU</td>
          <td>MTANDA</td>
          <td>Advance Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>34</td>
          <td>Records Management Assistant</td>
          <td>Records Management Officer II</td>
          <td>On Duty</td>
          <td>111760595</td>
          <td>4y6m</td>
          <td>2045-08-22</td>
          <td>04/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="92a4f82823900eb7d7afef6a6f555904" role="row" class="odd">
          <td class="sorting_1">165</td>
          <td>Sheila</td>
          <td>Ali</td>
          <td>Kaporo</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>36</td>
          <td>Assistant Nursing Officer</td>
          <td>Assistant Nursing Officer II</td>
          <td>On Duty</td>
          <td>110779065</td>
          <td>7y10m</td>
          <td>2043-04-10</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="3237f8bdf84c59a02cb4d0d2855403b9" role="row" class="even">
          <td class="sorting_1">166</td>
          <td>Shufaa</td>
          <td>Nassor</td>
          <td>Mitawa</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>32</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>111310270</td>
          <td>5y8m</td>
          <td>2047-04-09</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="c3d430135df6d38d2efa17fcecdc44f5" role="row" class="odd">
          <td class="sorting_1">167</td>
          <td>SHUFAA</td>
          <td>NASSOR</td>
          <td>MITAWA</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>32</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111310270</td>
          <td>5y8m</td>
          <td>2047-04-09</td>
          <td>19/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="ae6e9c0a032bd8d8deb8a94b7a5917b7" role="row" class="even">
          <td class="sorting_1">168</td>
          <td>SIFA</td>
          <td>KASSIMU</td>
          <td>MPONDA</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>38</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>110740086</td>
          <td>7y8m</td>
          <td>2041-07-06</td>
          <td>09/07/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="37b1223e2b459e74bc7dc4d530cabe80" role="row" class="odd">
          <td class="sorting_1">169</td>
          <td>SIMON</td>
          <td>NESTORY</td>
          <td>WASANDARA</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>32</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>111023217</td>
          <td>6y6m</td>
          <td>2047-03-25</td>
          <td>14/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="043618a02de5471b92b8bb2725c8c4c8" role="row" class="even">
          <td class="sorting_1">170</td>
          <td>Sofia</td>
          <td>Swalehe</td>
          <td>Ntomola</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>54</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Principal Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>8012481</td>
          <td>31y6m</td>
          <td>2025-06-17</td>
          <td>28/11/2013</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="335620ffbd0b5a32ac861d0675411f4c" role="row" class="odd">
          <td class="sorting_1">171</td>
          <td>Sophia</td>
          <td>Joseph</td>
          <td>Chitawala</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>28</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>1112844</td>
          <td>5y9m</td>
          <td>2051-09-15</td>
          <td>04/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="f8841ff30832293402772e63eebf02f5" role="row" class="even">
          <td class="sorting_1">172</td>
          <td>SOPHIA</td>
          <td>SWALEHE</td>
          <td>NTOMOLA</td>
          <td>Masters Degree</td>
          <td>Advanced Secondary Education</td>
          <td>54</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>8012481</td>
          <td>29y7m</td>
          <td>2025-09-23</td>
          <td>15/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="b99b91f2f34d40f8e97bc3f89f58a69f" role="row" class="odd">
          <td class="sorting_1">173</td>
          <td>Stella</td>
          <td>Ludovick</td>
          <td>Mdutta</td>
          <td>Certificate</td>
          <td>Primary Education</td>
          <td>53</td>
          <td>Nurse</td>
          <td>Senior Nurse</td>
          <td>On Duty</td>
          <td>7840126</td>
          <td>8y7m</td>
          <td>2026-12-26</td>
          <td>06/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="5848aba31471785303b59b3f5e330c84" role="row" class="even">
          <td class="sorting_1">174</td>
          <td>STELLA</td>
          <td>SIMON</td>
          <td>MLIMBA</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>39</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>111391385</td>
          <td>5y8m</td>
          <td>2040-10-22</td>
          <td>04/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="df711cb168543f2448c8f096a1dee0df" role="row" class="odd">
          <td class="sorting_1">175</td>
          <td>Subilaga</td>
          <td>Selemani</td>
          <td>Luganga</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>40</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>9999111199</td>
          <td>4y10m</td>
          <td>2039-11-22</td>
          <td>10/07/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="dafb425de38bd752ca1706b25aa736e0" role="row" class="even">
          <td class="sorting_1">176</td>
          <td>Sylaus</td>
          <td>Musiba</td>
          <td>Kunaga</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>62</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>5731235</td>
          <td>38y7m</td>
          <td>2017-11-26</td>
          <td>18/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="54ad4662b73b41c76a528608f176bbe4" role="row" class="odd">
          <td class="sorting_1">177</td>
          <td>Tafawa</td>
          <td>Abdallah</td>
          <td>Kapungu</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>42</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer I</td>
          <td>On Duty</td>
          <td>111287715</td>
          <td>5y8m</td>
          <td>2037-12-30</td>
          <td>03/06/2019</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="e3174ccb885c0d8f9796104d8b5e9c0a" role="row" class="even">
          <td class="sorting_1">178</td>
          <td>Theodora</td>
          <td>Daniel</td>
          <td>Mbunda</td>
          <td>Masters Degree</td>
          <td>Advanced Secondary Education</td>
          <td>39</td>
          <td>Medical Officer</td>
          <td>Medical Doctor II</td>
          <td>On Secondment</td>
          <td>1067220</td>
          <td>7y10m</td>
          <td>2040-05-22</td>
          <td>26/09/2016</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="cf2f9790abd81e3742095105e50b2da9" role="row" class="odd">
          <td class="sorting_1">179</td>
          <td>Tumaini</td>
          <td>Nemey</td>
          <td>Mosha</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>28</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>111744968</td>
          <td>4y11m</td>
          <td>2051-11-13</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="304ea8afe30c098b589e4e242a407277" role="row" class="even">
          <td class="sorting_1">180</td>
          <td>TUMAINI</td>
          <td>A</td>
          <td>MINJA</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>25</td>
          <td>Biomedical Engineering Technician</td>
          <td>Biomedical Engineering Technician I</td>
          <td>On Duty</td>
          <td>112059158</td>
          <td>1y5m</td>
          <td>2054-04-01</td>
          <td>17/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="e5c486e29c9d2f002a03c017516d64d3" role="row" class="odd">
          <td class="sorting_1">181</td>
          <td>Ummy</td>
          <td>Michael</td>
          <td>Mbara</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>27</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>111497401</td>
          <td>4y10m</td>
          <td>2052-06-20</td>
          <td>05/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="637f1f0321607da11ec10d6e7ce9d725" role="row" class="even">
          <td class="sorting_1">182</td>
          <td>Veronika</td>
          <td>Joseph</td>
          <td>Abdallah</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>45</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>8980827</td>
          <td>25y1m</td>
          <td>2034-10-29</td>
          <td>18/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="e2f0ec4ee47633c8209fd098489267fb" role="row" class="odd">
          <td class="sorting_1">183</td>
          <td>Vides</td>
          <td>Abraham</td>
          <td>Kyuta</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>30</td>
          <td>Environmental Health Assistant</td>
          <td>Environmental Health Assistant II</td>
          <td>On Duty</td>
          <td>111312680</td>
          <td>5y9m</td>
          <td>2049-12-17</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="4aaf653392f36959356941d941fc02f0" role="row" class="even">
          <td class="sorting_1">184</td>
          <td>Walter</td>
          <td>Eliangiringa</td>
          <td>Macha</td>
          <td>Advance Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>47</td>
          <td>Assistant Environmental Health Officer</td>
          <td>Assistant Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>10713875</td>
          <td>13y8m</td>
          <td>2032-11-03</td>
          <td>03/02/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="64cacaf3ed0c321acbf20b463d86a52c" role="row" class="odd">
          <td class="sorting_1">185</td>
          <td>whisco</td>
          <td>Zakaria</td>
          <td>Ologi</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>34</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>111491595</td>
          <td>4y11m</td>
          <td>2045-06-26</td>
          <td>31/01/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="14aa4d8d5abf1e0c7d8ccba7cbf4d96d" role="row" class="even">
          <td class="sorting_1">186</td>
          <td>Winfrida</td>
          <td>Herman</td>
          <td>Malongo</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>43</td>
          <td>Nurse</td>
          <td>Senior Nurse</td>
          <td>On Duty</td>
          <td>11194662</td>
          <td>11y11m</td>
          <td>2036-09-18</td>
          <td>30/01/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="2059f708f86b0777db514a7fea3a8abb" role="row" class="odd">
          <td class="sorting_1">187</td>
          <td>YAHYA</td>
          <td>SAID</td>
          <td>OMARI</td>
          <td>Diploma</td>
          <td>Primary Education</td>
          <td>61</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>7218220</td>
          <td>33y2m</td>
          <td>2018-10-06</td>
          <td>03/07/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="71b69a31f0f8255e8c6e67655935b6dd" role="row" class="even">
          <td class="sorting_1">188</td>
          <td>Yohanes</td>
          <td>Silipamwambo</td>
          <td>Msigwa</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>36</td>
          <td>Health Laboratory Technologist</td>
          <td>Laboratory Technologist II</td>
          <td>On Duty</td>
          <td>123946650</td>
          <td>8y6m</td>
          <td>2043-09-28</td>
          <td>19/12/2016</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="93c8ff26af25847986aa40f5eed10f08" role="row" class="odd">
          <td class="sorting_1">189</td>
          <td>Yusuphu</td>
          <td>Daudi</td>
          <td>Magoma</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>43</td>
          <td>Dental Surgeon</td>
          <td>Dental Surgeon II</td>
          <td>On Duty</td>
          <td>12315096</td>
          <td>9y2m</td>
          <td>2036-11-26</td>
          <td>22/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="48a9d09bd604541f91269c10594973a7" role="row" class="even">
          <td class="sorting_1">190</td>
          <td>Zaina</td>
          <td>Mwenda</td>
          <td>Mwashitete</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>43</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>9166886</td>
          <td>23y11m</td>
          <td>2036-01-24</td>
          <td>18/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="6f1921a2fef1c159882cf0a2b7939091" role="row" class="odd">
          <td class="sorting_1">191</td>
          <td>ZAINA</td>
          <td>SAID</td>
          <td>SALUM</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>29</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer I</td>
          <td>On Duty</td>
          <td>110722245</td>
          <td>7y9m</td>
          <td>2050-08-21</td>
          <td>07/02/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="b87b936f6a8f3b06937a36eb17b9d80e" role="row" class="even">
          <td class="sorting_1">192</td>
          <td>Zainab</td>
          <td>Jumanne</td>
          <td>Kitembe</td>
          <td>Masters Degree</td>
          <td>Advanced Secondary Education</td>
          <td>50</td>
          <td>Social Welfare Officer</td>
          <td>Social Welfare Officer II</td>
          <td>On Duty</td>
          <td>8928104</td>
          <td>26y1m</td>
          <td>2029-04-10</td>
          <td>18/11/2015</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="3779188dce571f70be5f16f9856ba331" role="row" class="odd">
          <td class="sorting_1">193</td>
          <td>Zainabu</td>
          <td>Hashim</td>
          <td>Semkuya</td>
          <td>Diploma</td>
          <td>Advanced Secondary Education</td>
          <td>40</td>
          <td>Clinical Officer</td>
          <td>Clinical Officer II</td>
          <td>On Duty</td>
          <td>11261052</td>
          <td>11y8m</td>
          <td>2039-12-04</td>
          <td>17/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="d8508655c6b82884bb43941253602a26" role="row" class="even">
          <td class="sorting_1">194</td>
          <td>ZAINABU</td>
          <td>ABDALLAH</td>
          <td>MSHANA</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>37</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>111821413</td>
          <td>4y10m</td>
          <td>2042-01-31</td>
          <td>14/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="9210c1b300e0f703ede2a61bf1c51dcc" role="row" class="odd">
          <td class="sorting_1">195</td>
          <td>Zakhia</td>
          <td>Abdallah</td>
          <td>Nurdin</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>26</td>
          <td>Assistant Health Laboratory Technologist</td>
          <td>Assistant Laboratory Technologist</td>
          <td>On Duty</td>
          <td>111728859</td>
          <td>4y10m</td>
          <td>2053-09-29</td>
          <td>19/01/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="1306ac936b03e312f667e816e2710ec8" role="row" class="even">
          <td class="sorting_1">196</td>
          <td>ZAKIA</td>
          <td>RAMADHANI</td>
          <td>MLUGU</td>
          <td>Bachelor Degree</td>
          <td>Advanced Secondary Education</td>
          <td>32</td>
          <td>Health Secretary</td>
          <td>Health Secretary I</td>
          <td>On Duty</td>
          <td>110516019</td>
          <td>8y4m</td>
          <td>2047-12-24</td>
          <td>31/01/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="7ab581a0a938edd50edb7ec514892520" role="row" class="odd">
          <td class="sorting_1">197</td>
          <td>ZENA</td>
          <td>AMOS</td>
          <td>LESILWA</td>
          <td>Certificate</td>
          <td>Ordinary Secondary Education</td>
          <td>37</td>
          <td>Medical Attendant</td>
          <td>Medical Attendant</td>
          <td>On Duty</td>
          <td>112072127</td>
          <td>1y5m</td>
          <td>2042-04-03</td>
          <td>17/09/2018</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="68ca3d733384ffcdd498b8ef2c85e3a6" role="row" class="even">
          <td class="sorting_1">198</td>
          <td>Ziada</td>
          <td>Abdul</td>
          <td>Kashoba</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>42</td>
          <td>Environmental Health Assistant</td>
          <td>Environmental Health Assistant I</td>
          <td>On Duty</td>
          <td>9917022</td>
          <td>16y3m</td>
          <td>2037-05-16</td>
          <td>04/07/2016</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="4c69683aa9e1fc6c471a814d2f2fd6b8" role="row" class="odd">
          <td class="sorting_1">199</td>
          <td>ZIADA</td>
          <td>ABDUL</td>
          <td>KASHOBA</td>
          <td>Diploma</td>
          <td>Primary Education</td>
          <td>42</td>
          <td>Health Assistant</td>
          <td>Health Assistant II</td>
          <td>On Duty</td>
          <td>9917022</td>
          <td>16y4m</td>
          <td>2037-05-16</td>
          <td>15/09/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="f35d8ab4fc1fa55bccb06f92553d3c24" role="row" class="even">
          <td class="sorting_1">200</td>
          <td>ZUHURA</td>
          <td>RAMADHANI</td>
          <td>NKOKOO</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>34</td>
          <td>Nurse</td>
          <td>Nurse I</td>
          <td>On Duty</td>
          <td>12339672</td>
          <td>9y1m</td>
          <td>2045-05-28</td>
          <td>23/11/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
        <tr id="07c95030acf65b721a9bc3349bd48fa5" role="row" class="odd">
          <td class="sorting_1">201</td>
          <td>Zunu</td>
          <td>Ally</td>
          <td>Cassonta</td>
          <td>Diploma</td>
          <td>Ordinary Secondary Education</td>
          <td>57</td>
          <td>Environmental Health Officer</td>
          <td>Environmental Health Officer II</td>
          <td>On Duty</td>
          <td>8256881</td>
          <td>30y4m</td>
          <td>2022-11-12</td>
          <td>19/12/2017</td>
          <td>Ilala Municipal Council</td>
        </tr>
      </tbody>
    </table>
    '
  )  
        `);
    }
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
