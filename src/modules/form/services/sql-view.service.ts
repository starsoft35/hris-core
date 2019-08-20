import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { SqlView } from '../entities/sqlview';

@Injectable()
export class SqlViewService extends BaseService<SqlView> {
    constructor(
        @InjectRepository(SqlView)
        repository: Repository<SqlView>,
    ) {
        super(repository, SqlView);
    }
}


