import { Controller } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.contoller';
import { OrganisationUnitGroupSet } from '../entities/organisation-unit-group-set.entity';
import { OrganisationUnitGroupSetService } from '../services/organisation-unit-group-set.service';

@Controller(OrganisationUnitGroupSet.plural)
export class OrganisationUnitGroupSetController extends BaseController<
  OrganisationUnitGroupSet
> {
  constructor(
    organisationUnitGroupSetService: OrganisationUnitGroupSetService,
  ) {
    super(organisationUnitGroupSetService, OrganisationUnitGroupSet);
  }
}
