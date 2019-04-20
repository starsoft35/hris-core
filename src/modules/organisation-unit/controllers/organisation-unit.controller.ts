import { Controller, Get, UseGuards } from '@nestjs/common';
import { OrganisationUnitService } from '../services/organisation-unit.service';
import { AuthGuard } from '@nestjs/passport';
import { ModelController } from 'src/core/model.contoller';
import { OrganisationUnit } from 'src/database/entities/organisationunit';

@Controller('organisationUnits')
//@UseGuards(AuthGuard())
export class OrganisationUnitsController extends ModelController<OrganisationUnit> {
  constructor(private readonly organisationUnitService: OrganisationUnitService) {
    super(organisationUnitService);
  }
  get plural() {
    return 'organisationUnits';
  }
}