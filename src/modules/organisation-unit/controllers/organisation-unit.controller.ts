import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';

import { OrganisationUnitService } from '../services/organisation-unit.service';
import { OrganisationUnit } from '../entities/organisation-unit.entity';

@Controller('organisationUnits')
export class OrganisationUnitsController extends BaseController<
  OrganisationUnit
> {
  constructor(organisationUnitService: OrganisationUnitService) {
    super(organisationUnitService);
  }
  get plural() {
    return 'organisationUnits';
  }
}
