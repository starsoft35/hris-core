import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';

import { FieldGroup } from '../entities/field-group.entity';

@Injectable()
export class FieldGroupService extends BaseService<FieldGroup> {
  constructor(
    @InjectRepository(FieldGroup)
    repository: Repository<FieldGroup>,
  ) {
    super(repository, FieldGroup);
  }
}
