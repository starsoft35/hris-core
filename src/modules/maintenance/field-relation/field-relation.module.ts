import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldRelation } from './entities/field-relation.entity';
import { FieldRelationController } from './controllers/field-relation.controller';
import { FieldRelationService } from './services/field-relation.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([FieldRelation]),
    ],
    controllers: [FieldRelationController],
    providers: [FieldRelationService],
})
export class FieldRelationModule { }
