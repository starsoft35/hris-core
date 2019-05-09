import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../core/services/base.service';
import { OrganisationUnitCompleteness } from '../entities/organisation-unit-completeness.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrganisationUnitCompletenessService extends BaseService<
  OrganisationUnitCompleteness
> {
  constructor(
    @InjectRepository(OrganisationUnitCompleteness)
    organisationUnitCompletenessRepository: Repository<
      OrganisationUnitCompleteness
    >,
  ) {
    super(organisationUnitCompletenessRepository);
  }
}
