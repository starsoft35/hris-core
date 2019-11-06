import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Map } from '../entities/map.entity';
import { MapService } from '../services/map.service';

@Controller('api/' + Map.plural)
export class MapController extends BaseController<Map> {
  constructor(service: MapService) {
    super(service, Map);
  }
}
