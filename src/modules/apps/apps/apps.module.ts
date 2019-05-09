import { Module } from '@nestjs/common';
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Apps } from './entities/apps.entity';

@Module({
    imports: [
      PassportModule.register({ defaultStrategy: 'basic', session: true }),
      TypeOrmModule.forFeature([
        Apps,
      ]),
    ],
    controllers: [],
    providers: [],
  })
export class AppsModule {}
