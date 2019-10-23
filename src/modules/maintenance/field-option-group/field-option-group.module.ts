import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldOptionGroup } from './entities/field-option-group.entity';
import { FieldOptionGroupController } from './controllers/field-option-group.controller';
import { FieldOptionGroupService } from './services/field-option-group.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([FieldOptionGroup]),
    ],
    controllers: [FieldOptionGroupController],
    providers: [FieldOptionGroupService],
})
export class FieldOptionGroupModule { }
