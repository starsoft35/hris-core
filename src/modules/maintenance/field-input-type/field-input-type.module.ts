import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldInputType } from './entities/field-input-type.entity';
import { FieldInputTypeService } from './services/field-input-type.service';
import { FieldInputTypeController } from './controllers/field-input-type.controller';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([FieldInputType]),
    ],
    controllers: [FieldInputTypeController],
    providers: [FieldInputTypeService],
})
export class FieldInputTypeModule { }
