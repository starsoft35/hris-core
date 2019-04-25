import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationUnitGroupController } from './organisation-unit-group.controller';

describe('OrganisationUnitGroup Controller', () => {
  let controller: OrganisationUnitGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganisationUnitGroupController],
    }).compile();

    controller = module.get<OrganisationUnitGroupController>(OrganisationUnitGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
