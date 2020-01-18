import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FieldDataType } from '../maintenance/field-data-type/entities/field-datatype.entity';
import { FieldGroupSet } from '../maintenance/field-group-set/entities/field-groupset.entity';
import { FieldGroup } from '../maintenance/field-group/entities/field-group.entity';
import { FieldOptionChildren } from '../maintenance/field-option-children/entities/field-option-children.entity';
import { FieldOptionGroupSet } from '../maintenance/field-option-group-set/entities/field-option-group-set.entity';
import { FieldOptionGroup } from '../maintenance/field-option-group/entities/field-option-group.entity';
import { FieldOptionMerge } from '../maintenance/field-option-merge/entities/field-option-merge.entity';
import { FieldRelation } from '../maintenance/field-relation/entities/field-relation.entity';
import { FormFieldMemberController } from './controllers/form-field-member.controller';
import { FormSectionController } from './controllers/form-section.controller';
import { FormVisibleFieldController } from './controllers/form-visible-fields.controller';
import { FormController } from './controllers/form.controller';
import { FormSectionFieldMemberController } from './controllers/formsection-fieldmembers.controller';
import { SqlViewController } from './controllers/sql-view-controller';
import { FormFieldMember } from './entities/form-field-member.entity';
import { FormSection } from './entities/form-section.entity';
import { FormVisibleField } from './entities/form-visible-fields.entity';
import { Form } from './entities/form.entity';
import { FormSectionFieldMember } from './entities/formsection-fieldmembers.entity';
import { SqlView } from './entities/sqlview.entity';
import { FormFieldMemberService } from './services/form-field-member.service';
import { FormSectionService } from './services/form-section.service';
import { FormVisibleFieldService } from './services/form-visible-fields.service';
import { FormService } from './services/form.service';
import { FormSectionFieldMemberService } from './services/formsection-fieldmembers.service';
import { SqlViewService } from './services/sql-view.service';
import { Field } from './entities/field.entity';
import { FieldService } from './services/field.service';
import { FieldController } from './controllers/field.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([
      Field,
      FieldDataType,
      FieldGroup,
      FieldGroupSet,
      FieldOptionChildren,
      FieldOptionGroup,
      FieldOptionGroupSet,
      FieldOptionMerge,
      FieldRelation,
      FormFieldMember,
      FormSection,
      FormVisibleField,
      Form,
      FormSectionFieldMember,
      SqlView,
    ]),
  ],
  controllers: [
    FieldController,
    FormFieldMemberController,
    FormSectionController,
    FormVisibleFieldController,
    FormController,
    FormSectionFieldMemberController,

    SqlViewController,
  ],
  providers: [
    FieldService,
    FormService,
    FormFieldMemberService,
    FormSectionService,
    FormVisibleFieldService,
    FormSectionFieldMemberService,
    SqlViewService,
  ],
})
export class FormModule {}
