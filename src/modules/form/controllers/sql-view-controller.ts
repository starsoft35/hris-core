import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { SqlView } from '../entities/sqlview';
import { SqlViewService } from '../services/sql-view.service';

@Controller('api/' + SqlView.plural)
export class SqlViewController extends BaseController<SqlView> {
    constructor(service: SqlViewService) {
        super(service, SqlView);
    }
}