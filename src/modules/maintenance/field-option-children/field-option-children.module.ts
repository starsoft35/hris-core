import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldOptionChildren } from './entities/field-option-children.entity';
import { FieldOptionChildrenController } from './controllers/field-option-children.controller';
import { FieldOptionChildrenService } from './services/field-option-children.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([FieldOptionChildren]),
    ],
    controllers: [FieldOptionChildrenController],
    providers: [FieldOptionChildrenService],
})
export class FieldOptionChildrenModule { }
