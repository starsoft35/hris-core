import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { OrganisationUnitCompleteness } from '../entities/organisation-unit-completeness.entity';
import { OrganisationUnitCompletenessService } from '../services/organisation-unit-completeness.service';

@Controller('organisationUnitCompletenesses')
export class OrganisationUnitCompletenessController extends BaseController<
  OrganisationUnitCompleteness
> {
  constructor(
    organisationUnitCompletenessService: OrganisationUnitCompletenessService,
  ) {
    super(organisationUnitCompletenessService);
  }
  get plural() {
    return 'organisationUnitCompletenesses';
  }
}
