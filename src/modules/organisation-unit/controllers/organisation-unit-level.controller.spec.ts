import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationUnitLevelController } from './organisation-unit-level.controller';

describe('OrganisationUnitLevel Controller', () => {
  let controller: OrganisationUnitLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganisationUnitLevelController],
    }).compile();

    controller = module.get<OrganisationUnitLevelController>(OrganisationUnitLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
