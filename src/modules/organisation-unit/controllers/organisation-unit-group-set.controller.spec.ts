import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationUnitGroupSetController } from './organisation-unit-group-set.controller';

describe('OrganisationUnitGroupSet Controller', () => {
  let controller: OrganisationUnitGroupSetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganisationUnitGroupSetController],
    }).compile();

    controller = module.get<OrganisationUnitGroupSetController>(OrganisationUnitGroupSetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
