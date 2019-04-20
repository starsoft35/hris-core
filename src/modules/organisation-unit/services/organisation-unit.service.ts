import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrganisationUnit } from '../../../database/entities/organisationunit';
import { ModelService } from '../../../core/model.service';

@Injectable()
export class OrganisationUnitService extends ModelService<OrganisationUnit> {
  constructor(
    @Inject('ORGANISATION_UNIT_REPOSITORY')
    private readonly organisationUnitRepository: Repository<OrganisationUnit>,
  ) {
    super(organisationUnitRepository);
  }
}