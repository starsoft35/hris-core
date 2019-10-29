import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Chart } from '../entities/chart.entity';
import { ChartService } from '../services/chart.service';

@Controller('api/' + Chart.plural)
export class ChartController extends BaseController<Chart> {
  constructor(service: ChartService) {
    super(service, Chart);
  }
}
