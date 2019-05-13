import { Injectable } from '@nestjs/common';
import { FormFieldMember } from '../entities/form-field-member.entity';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FormFieldMemberService extends BaseService<FormFieldMember> {
    constructor(
        @InjectRepository(FormFieldMember)
        repository: Repository<FormFieldMember>,
    ) {
        super(repository, FormFieldMember);
    }
}