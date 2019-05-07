import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from '../../../core/services/base.service';
import { OrganisationUnit } from '../entities/organisation-unit.entity';

@Injectable()
export class OrganisationUnitService extends BaseService<OrganisationUnit> {
  constructor(
    @InjectRepository(OrganisationUnit)
    organisationUnitRepository: Repository<OrganisationUnit>,
  ) {
    super(organisationUnitRepository);
  }
  get model() {
    return new OrganisationUnit();
  }
}
