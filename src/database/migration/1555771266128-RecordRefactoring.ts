import { MigrationInterface, QueryRunner } from 'typeorm';
import { RecordValue } from '../../modules/record/entities/recordvalue';

export class RecordRefactoring1555771266128 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const results = await queryRunner.manager.query(
      'SELECT * FROM hris_record LIMIT 10',
    );
    const fields = await queryRunner.manager.query('SELECT * FROM hris_field');
    const fieldsObject = {};

    fields.forEach(field => {
      fieldsObject[field.uid] = field.id;
    });
    let newObjects = [];
    results.forEach(data => {
      let jsonData = JSON.parse(data.value);
      Object.keys(jsonData).forEach(key => {
        newObjects.push({
          field: fieldsObject[key],
          value: jsonData[key],
        });
      });
    });
    const res = await queryRunner.manager.save(RecordValue, newObjects);
    console.log(res);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
