import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { FieldDataType } from '../entities/field-datatype.entity';
import { FieldDataTypeService } from '../services/field-data-type.service';

@Controller(FieldDataType.plural)
export class FieldDatatypeController extends BaseController<
    FieldDataType
> {
    constructor(fieldDataTypeService: FieldDataTypeService) {
        super(fieldDataTypeService, FieldDataType);
    }
}
