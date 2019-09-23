import { Module } from '@nestjs/common';
import { FieldService } from './services/field.service';
import { FieldController } from './controllers/field.controller';
import { Field } from './entities/field.entity';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([Field]),
    ],
    controllers: [FieldController],
    providers: [FieldService],
})
export class FieldModule { }
