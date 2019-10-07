import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldDataType } from './entities/field-datatype.entity';
import { FieldDatatypeController } from './controllers/field-datatype.controller';
import { FieldDataTypeService } from './services/field-datatype.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([FieldDataType]),
    ],
    controllers: [FieldDatatypeController],
    providers: [FieldDataTypeService],
})
export class FieldDataTypeModule { }
