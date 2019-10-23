import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldOption } from './entities/field-option.entity';
import { FieldOptionController } from './controllers/field-option.controller';
import { FieldOptionService } from './services/field-option.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([FieldOption]),
    ],
    controllers: [FieldOptionController],
    providers: [FieldOptionService],
})
export class FieldOptionModule { }
