import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { OrganisatinUnitModule } from './modules/organisation-unit/organisation-unit.module';
import { RecordModule } from './modules/record/record.module';

@Module({
  imports: [UserModule, OrganisatinUnitModule, RecordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
