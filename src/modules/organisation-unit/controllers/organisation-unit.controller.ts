import { Controller } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.contoller';

import { OrganisationUnitService } from '../services/organisation-unit.service';
import { OrganisationUnit } from '../entities/organisation-unit.entity';

@Controller('api/' + OrganisationUnit.plural)
export class OrganisationUnitsController extends BaseController<
  OrganisationUnit
> {
  constructor(organisationUnitService: OrganisationUnitService) {
    super(organisationUnitService, OrganisationUnit);
  }
}
