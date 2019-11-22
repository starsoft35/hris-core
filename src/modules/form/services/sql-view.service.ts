import { Injectable } from '@nestjs/common';
import { Repository, Connection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { SqlView } from '../entities/sqlview.entity';

@Injectable()
export class SqlViewService extends BaseService<SqlView> {
    constructor(
        @InjectRepository(SqlView)
        private repository: Repository<SqlView>, private readonly connection: Connection
    ) {
        super(repository, SqlView);
    }

    async envokeSQL(id){
        const sqlView = await this.findOneByUid(id);
        return await this.connection.query(sqlView.query);
    }
}


