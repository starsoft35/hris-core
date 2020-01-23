import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from '../../../core/services/base.service';
import { Record } from '../entities/record.entity';
import { RecordValue } from '../entities/record-value.entity';
import { Field } from 'src/modules/form/entities/field.entity';

@Injectable()
export class RecordService extends BaseService<Record> {
  constructor(
    @InjectRepository(Record)
    private recordRepository: Repository<Record>,
    @InjectRepository(RecordValue) private recordValueRepository: Repository<RecordValue>,
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
      stats:{
        created: 0,
        updated: 0,
        deleted: 0,
        ignored: 0,
      },
      errors:[

      ]
    }
    for(let recordValue of recordValues){
      try{
        if(recordValue.id){
          await this.recordValueRepository.update(
            {
              "recordvalueid":parseInt(recordValue.id),
              "record": {
                "id":(await this.recordRepository.findOne({uid:record})).id
              },
              "field":{
                "id":(await this.fieldRepository.findOne({uid:"5289e934b615b"})).id
              }
            },{
                "value":recordValue.value,
              }
              );
              results.stats.updated++;
        }else{
          await this.recordValueRepository.save(
            {
              "record": {
                "id":(await this.recordRepository.findOne({uid:record})).id
              },
              "field":{
                "id":(await this.fieldRepository.findOne({uid:"5289e934b615b"})).id
              },
                "value":recordValue.value,
                "startDate":recordValue.startDate,
                "endDate":recordValue.endDate,
                "comment":recordValue.comment,
              }
              ); 
              results.stats.created++;  
        }
      }catch(e){
        results.stats.ignored++;
        results.errors.push(e.message);
      }
    }
    return results;
  } 
}
