import { Module } from '@nestjs/common';
import { DashboardChartController } from './controllers/dashboard-chart.controller';
import { DashboardChartService } from './services/dashboard-chart.service';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardChart } from './entities/dashboard-chart.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([DashboardChart]),
  ],
  controllers: [DashboardChartController],
  providers: [DashboardChartService],
})
export class DashboardModule {}
