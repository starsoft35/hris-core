import { Module } from '@nestjs/common';
import { DashboardChartController } from './controllers/dashboard-chart.controller';
import { DashboardChartService } from './services/dashboard-chart.service';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardChart } from './entities/dashboard-chart.entity';
import { Dashboard } from './entities/dashboard.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([Dashboard, DashboardChart]),
  ],
  controllers: [DashboardChartController],
  providers: [DashboardChartService],
})
export class DashboardModule {}
