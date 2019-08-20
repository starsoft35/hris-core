import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../core/services/base.service';
import { OrganisationUnitGroupSet } from '../entities/organisation-unit-group-set.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrganisationUnitGroupSetService extends BaseService<
  OrganisationUnitGroupSet
> {
  constructor(
    @InjectRepository(OrganisationUnitGroupSet)
    organisationUnitGroupSetRepository: Repository<OrganisationUnitGroupSet>,
  ) {
    super(organisationUnitGroupSetRepository, OrganisationUnitGroupSet);
  }
}
