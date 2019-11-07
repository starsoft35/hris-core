import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Dashboard } from '../entities/dashboard.entity';
import { DashboardService } from '../services/dashboard.service';

@Controller('api/' + Dashboard.plural)
export class DashboardController extends BaseController<Dashboard> {
  constructor(service: DashboardService) {
    super(service, Dashboard);
  }
}
