import { Controller } from '@nestjs/common';
import { FieldDataType } from '../entities/field-datatype.entity';
import { FieldDataTypeService } from '../services/field-datatype.service';
import { MaintenanceBaseController } from 'src/core/maintenance/controllers/base.contoller';

@Controller('api/' + FieldDataType.plural)
export class FieldDatatypeController extends MaintenanceBaseController<FieldDataType> {
    constructor(fieldDataTypeService: FieldDataTypeService) {
        super(fieldDataTypeService, FieldDataType);
    }
}
