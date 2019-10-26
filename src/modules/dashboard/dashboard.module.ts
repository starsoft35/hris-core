import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DashboardItem } from './entities/dashboard-item.entity';
import { Dashboard } from './entities/dashboard.entity';
import { FavoriteDimensionItem } from './entities/favorite-dimension-item.entity';
import { FavoriteDimension } from './entities/favorite-dimension.entity';
import { Chart } from './entities/chart.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([
      Dashboard,
      DashboardItem,
      Chart,
      FavoriteDimension,
      FavoriteDimensionItem,
    ]),
  ],
  controllers: [],
  providers: [],
})
export class DashboardModule {}
