import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { Map } from '../entities/map.entity';

@Injectable()
export class MapService extends BaseService<Map> {
  constructor(
    @InjectRepository(Map)
    repository: Repository<Map>,
  ) {
    super(repository, Map);
  }
}
