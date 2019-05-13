import { Injectable } from '@nestjs/common';
import { Form } from '../entities/form.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';

@Injectable()
export class FormService extends BaseService<Form> {
    constructor(
        @InjectRepository(Form)
        repository: Repository<Form>,
    ) {
        super(repository, Form);
    }
}


