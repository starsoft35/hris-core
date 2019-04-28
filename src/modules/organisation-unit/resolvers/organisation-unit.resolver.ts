import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';

import { OrganisationUnit } from '../entities/organisation-unit.entity';
import { OrganisationUnitService } from '../services/organisation-unit.service';

@Resolver(of => OrganisationUnit)
export class OrganisationUnitResolver {
  constructor(
    private readonly organisationUnitService: OrganisationUnitService,
  ) {}

  @Query(returns => OrganisationUnit)
  async organisationUnit(@Args('id') id: string) {
    return await this.organisationUnitService.findOneById(id);
  }

  @Query(returns => [OrganisationUnit])
  async organisationUnits() {
    return await this.organisationUnitService.findAll();
  }

  // @Mutation(returns => OrganisationUnit)
  // async addOrganisationUnit(@Args('organisationUnit') organisationUnit: any) {
  //   return await this.organisationUnitService.create(organisationUnit);
  // }

  // @Mutation(returns => OrganisationUnit)
  // async updateOrganisationUnit(
  //   @Args('id') id: string,
  //   @Args('organisationUnit') organisationUnit,
  // ) {
  //   return await this.organisationUnitService.update(id, organisationUnit);
  // }

  @Mutation(returns => OrganisationUnit)
  async deleteOrganisationUnit(@Args('id') id: string) {
    return await this.organisationUnitService.delete(id);
  }
}
