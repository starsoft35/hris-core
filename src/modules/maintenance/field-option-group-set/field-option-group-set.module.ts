import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldOptionGroupSet } from './entities/field-option-group-set.entity';
import { FieldOptionGroupSetController } from './controllers/field-option-group-set.controller';
import { FieldOptionGroupSetService } from './services/field-option-group-set.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([FieldOptionGroupSet]),
    ],
    controllers: [FieldOptionGroupSetController],
    providers: [FieldOptionGroupSetService],
})
export class FieldOptionGroupSetModule { }
