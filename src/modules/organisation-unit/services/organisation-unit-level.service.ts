import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { OrganisationUnitLevel } from '../entities/organisation-unit-level.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrganisationUnitLevelService extends BaseService<
  OrganisationUnitLevel
> {
  constructor(
    @InjectRepository(OrganisationUnitLevel)
    organisationUnitLevelRepository: Repository<OrganisationUnitLevel>,
  ) {
    super(organisationUnitLevelRepository);
  }
}
