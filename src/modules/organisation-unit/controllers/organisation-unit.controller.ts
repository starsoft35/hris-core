import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';

import { OrganisationUnitService } from '../services/organisation-unit.service';
import { OrganisationUnit } from '../entities/organisationunit.entity';

@Controller('organisationUnits')
export class OrganisationUnitsController extends BaseController<
  OrganisationUnit
> {
  constructor(
    private readonly organisationUnitService: OrganisationUnitService,
  ) {
    super(organisationUnitService);
  }
  get plural() {
    return 'organisationUnits';
  }
}
