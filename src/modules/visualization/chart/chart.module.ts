import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chart } from './entities/chart.entity';
import { ChartController } from './controllers/chart.controller';
import { ChartService } from './services/chart.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([Chart]),
    ],
    controllers: [ChartController],
    providers: [ChartService],
})
export class ChartModule { }
