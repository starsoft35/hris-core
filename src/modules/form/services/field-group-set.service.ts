import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';

import { FieldGroupSet } from '../entities/field-groupset.entity';

@Injectable()
export class FieldGroupSetService extends BaseService<FieldGroupSet> {
  constructor(
    @InjectRepository(FieldGroupSet)
    fieldGroupSetRepository: Repository<FieldGroupSet>,
  ) {
    super(fieldGroupSetRepository, FieldGroupSet);
  }
}
