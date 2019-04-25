import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationUnitCompletenessController } from './organisation-unit-completeness.controller';

describe('OrganisationUnitCompleteness Controller', () => {
  let controller: OrganisationUnitCompletenessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganisationUnitCompletenessController],
    }).compile();

    controller = module.get<OrganisationUnitCompletenessController>(OrganisationUnitCompletenessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
