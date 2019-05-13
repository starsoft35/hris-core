import { Controller } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.contoller';
import { OrganisationUnitCompleteness } from '../entities/organisation-unit-completeness.entity';
import { OrganisationUnitCompletenessService } from '../services/organisation-unit-completeness.service';

@Controller(OrganisationUnitCompleteness.plural)
export class OrganisationUnitCompletenessController extends BaseController<
  OrganisationUnitCompleteness
> {
  constructor(
    organisationUnitCompletenessService: OrganisationUnitCompletenessService,
  ) {
    super(organisationUnitCompletenessService, OrganisationUnitCompleteness);
  }
}
