import { Module } from '@nestjs/common';
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Apps } from './entities/apps.entity';
import { AppsController } from './controllers/apps.controller';
import { AppsService } from './services/apps.service';

@Module({
    imports: [
      PassportModule.register({ defaultStrategy: 'basic', session: true }),
      TypeOrmModule.forFeature([
        Apps,
      ]),
    ],
    controllers: [AppsController],
    providers: [AppsService],
  })
export class AppsModule {}
