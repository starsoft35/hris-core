import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardItem } from './entities/dashboard-item.entity';
import { DashboardItemController } from './controllers/dashboard-item.controller';
import { DashboardItemService } from './services/dashboard-item.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([DashboardItem]),
    ],
    controllers: [DashboardItemController],
    providers: [DashboardItemService],
})
export class DashboardItemModule { }
