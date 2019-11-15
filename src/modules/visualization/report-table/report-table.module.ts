import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportTable } from './entities/report-table.entity';
import { ReportTableController } from './controllers/report-table.controller';
import { ReportTableService } from './services/report-table.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([ReportTable]),
    ],
    controllers: [ReportTableController],
    providers: [ReportTableService],
})
export class ReportTableModule { }
