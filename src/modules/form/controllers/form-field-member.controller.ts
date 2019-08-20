import { Controller } from '@nestjs/common';
import { FormFieldMember } from '../entities/form-field-member.entity';
import { BaseController } from 'src/core/controllers/base.contoller';
import { FormFieldMemberService } from '../services/form-field-member.service';

@Controller('api/' + FormFieldMember.plural)
export class FormFieldMemberController extends BaseController<FormFieldMember> {
    constructor(service: FormFieldMemberService) {
        super(service, FormFieldMember);
    }
}