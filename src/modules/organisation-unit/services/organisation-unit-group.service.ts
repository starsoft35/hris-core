import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../core/services/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganisationUnitGroup } from '../entities/organisation-unit-group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrganisationUnitGroupService extends BaseService<
  OrganisationUnitGroup
> {
  constructor(
    @InjectRepository(OrganisationUnitGroup)
    organisationUnitGroupRepository: Repository<OrganisationUnitGroup>,
  ) {
    super(organisationUnitGroupRepository, OrganisationUnitGroup);
  }
}
