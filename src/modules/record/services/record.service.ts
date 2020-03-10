import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from '../../../core/services/base.service';
import { Record } from '../entities/record.entity';
import { RecordValue } from '../entities/record-value.entity';
import { Field } from 'src/modules/form/entities/field.entity';
import {
  getSelections,
  getRelations,
} from 'src/core/utilities/get-fields.utility';
import { getWhereConditions } from 'src/core/utilities';
import { OrganisationUnit } from 'src/modules/organisation-unit/entities/organisation-unit.entity';
import { Form } from 'src/modules/form/entities/form.entity';

@Injectable()
export class RecordService extends BaseService<Record> {
  constructor(
    @InjectRepository(Record)
    private recordRepository: Repository<Record>,
    @InjectRepository(RecordValue)
    private recordValueRepository: Repository<RecordValue>,
    @InjectRepository(OrganisationUnit)
    private organisationunitRepository: Repository<OrganisationUnit>,
    @InjectRepository(Form)
    private formRepository: Repository<Form>,
    @InjectRepository(Field) private fieldRepository: Repository<Field>,
  ) {
    super(recordRepository, Record);
  }

  async saveRecordValues(record: string, recordValues: any) {
    //this.recordRepository.getB
    /*recordValues = recordValues.map((recordValue)=>{
      console.log(recordValue.id);
      return {
        ...recordValue,
        recordvalueid: parseInt(recordValue.id),
        record :{
          "uid": await this.recordRepository.findOne({uid:record})
        },
        fieldid :{
          "uid": recordValue.field
        }
      }
    });*/
    let results = {
      stats: {
        created: 0,
        updated: 0,
        deleted: 0,
        ignored: 0,
      },
      errors: [],
    };
    for (let recordValue of recordValues) {
      try {
        if (recordValue.id) {
          await this.recordValueRepository.update(
            {
              recordvalueid: parseInt(recordValue.id),
              record: {
                id: (await this.recordRepository.findOne({ uid: record })).id,
              },
              field: {
                id: (
                  await this.fieldRepository.findOne({ uid: '5289e934b615b' })
                ).id,
              },
            },
            {
              value: recordValue.value,
            },
          );
          results.stats.updated++;
        } else {
          await this.recordValueRepository.save({
            record: {
              id: (await this.recordRepository.findOne({ uid: record })).id,
            },
            field: {
              id: (await this.fieldRepository.findOne({ uid: '5289e934b615b' }))
                .id,
            },
            value: recordValue.value,
            startDate: recordValue.startDate,
            endDate: recordValue.endDate,
            comment: recordValue.comment,
          });
          results.stats.created++;
        }
      } catch (e) {
        results.stats.ignored++;
        results.errors.push(e.message);
      }
    }
    return results;
  }

  async findAndCount(fields, filter, size, page): Promise<[Record[], number]> {
    const metaData = this.recordRepository.manager.connection.getMetadata(
      Record,
    );
    let join: any = {};
    join = {
      alias: 'record',
      leftJoinAndSelect: {
        form: 'record.form',
        organisationUnit: 'record.organisationUnit',
      },
    };

    let where: any = getWhereConditions(filter);

    const orgunitsquery = this.organisationunitRepository.createQueryBuilder();
    const getOrgunits = await orgunitsquery.getMany();
    const orgunits = await JSON.parse(
      JSON.stringify(getOrgunits)
        .split('OrganisationUnit')
        .join(''),
    );

    const formquery = this.formRepository.createQueryBuilder();
    const getForms = await formquery.getMany();
    const forms = await JSON.parse(
      JSON.stringify(getForms)
        .split('Form')
        .join(''),
    );

    const whereParams = { ...where[0], ...where[1] };
    console.log(whereParams);
    const actualForm = await forms.filter(
      form => form.uid === whereParams.form,
    );
    const actualOrgUnit = await orgunits.filter(
      orgunit => orgunit.uid === whereParams.organisationUnit,
    );

    where = { organisationUnit: actualOrgUnit[0].id, form: actualForm[0].id };

    return await this.recordRepository.findAndCount({
      select: getSelections(fields, metaData),
      relations: getRelations(fields, metaData),
      where,
      join,
      skip: page * size,
      take: size,
    });
  }
}
