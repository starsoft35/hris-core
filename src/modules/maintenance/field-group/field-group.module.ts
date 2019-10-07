import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldGroup } from './entities/field-group.entity';
import { FieldGroupController } from './controllers/field-group.controller';
import { FieldGroupService } from './services/field-group.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([FieldGroup]),
    ],
    controllers: [FieldGroupController],
    providers: [FieldGroupService],
})
export class FieldGroupModule { }
