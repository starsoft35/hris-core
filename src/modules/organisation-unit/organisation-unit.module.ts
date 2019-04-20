import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { organisationUnitProviders } from './providers/organisation-unit.providers';
import { OrganisationUnitService } from './services/organisation-unit.service';
import { OrganisationUnitsController } from './controllers/organisation-unit.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    DatabaseModule,
  ],
  controllers: [OrganisationUnitsController],
  providers: [...organisationUnitProviders, OrganisationUnitService],
})
export class OrganisatinUnitModule {}