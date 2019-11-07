import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { DashboardItem } from '../entities/dashboard-item.entity';
import { DashboardItemService } from '../services/dashboard-item.service';

@Controller('api/' + DashboardItem.plural)
export class DashboardItemController extends BaseController<DashboardItem> {
  constructor(dashboardItemService: DashboardItemService) {
    super(dashboardItemService, DashboardItem);
  }
}
