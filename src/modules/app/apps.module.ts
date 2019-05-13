import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppsController } from './controllers/apps.controller';
import { AppsService } from './services/apps.service';
import { App } from './entities/apps.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([App]),
  ],
  controllers: [AppsController],
  providers: [AppsService],
})
export class AppsModule {}
