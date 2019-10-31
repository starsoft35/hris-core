import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { Chart } from '../entities/chart.entity';

@Injectable()
export class ChartService extends BaseService<Chart> {
  constructor(
    @InjectRepository(Chart)
    repository: Repository<Chart>,
  ) {
    super(repository, Chart);
  }
}
