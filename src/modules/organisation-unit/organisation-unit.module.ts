import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrganisationUnitsController } from './controllers/organisation-unit.controller';
import { OrganisationUnit } from './entities/organisationunit.entity';
import { OrganisationUnitService } from './services/organisation-unit.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([OrganisationUnit]),
  ],
  controllers: [OrganisationUnitsController],
  providers: [OrganisationUnitService],
})
export class OrganisatinUnitModule {}
