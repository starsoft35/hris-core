import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationUnitLevelService } from './organisation-unit-level.service';

describe('OrganisationUnitLevelService', () => {
  let service: OrganisationUnitLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganisationUnitLevelService],
    }).compile();

    service = module.get<OrganisationUnitLevelService>(OrganisationUnitLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
