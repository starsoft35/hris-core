import { Injectable } from '@nestjs/common';
import { Field } from '../../field/entities/field.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';

@Injectable()
export class FieldService extends BaseService<Field> {
    constructor(
        @InjectRepository(Field)
        repository: Repository<Field>,
    ) {
        super(repository, Field);
    }
}