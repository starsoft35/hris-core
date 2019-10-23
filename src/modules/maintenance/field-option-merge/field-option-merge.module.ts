import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldOptionMerge } from './entities/field-option-merge.entity';
import { FieldOptionMergeController } from './controllers/field-option-merge.controller';
import { FieldOptionMergeService } from 'src/modules/maintenance/field-option-merge/services/field-option-merge.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([FieldOptionMerge]),
    ],
    controllers: [FieldOptionMergeController],
    providers: [FieldOptionMergeService],
})
export class FieldOptionMergeModule { }
