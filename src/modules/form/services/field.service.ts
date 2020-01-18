import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';

import { Field } from '../entities/field.entity';

@Injectable()
export class FieldService extends BaseService<Field> {
  constructor(
    @InjectRepository(Field)
    repository: Repository<Field>,
  ) {
    super(repository, Field);
  }
}
