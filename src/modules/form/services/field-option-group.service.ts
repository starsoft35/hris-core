import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';

import { FieldOptionGroup } from '../entities/field-option-group.entity';

@Injectable()
export class FieldOptionGroupService extends BaseService<FieldOptionGroup> {
  constructor(
    @InjectRepository(FieldOptionGroup)
    fieldOptionGroupRepository: Repository<FieldOptionGroup>,
  ) {
    super(fieldOptionGroupRepository, FieldOptionGroup);
  }
}
