import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldService } from './services/field.service';
import { FieldGroupService } from './services/field-group.service';
import { FieldGroupSetService } from './services/field-groupset.service';
import { FieldInputTypeService } from './services/field-input-type.service';
import { FieldDataTypeService } from './services/field-data-type.service';
import { FieldOptionService } from './services/field-option.service';
import { FieldOptionChildrenService } from './services/field-option-children.service';
import { FieldOptionGroupService } from './services/field-option-group.service';
import { FieldOptionGroupSetService } from './services/field-option-groupset.service';
import { FieldOptionMergeService } from './services/field-option-merge.service';
import { FieldRelationService } from './services/field-relation.service';
import { FormService } from './services/form.service';
import { FormFieldMemberService } from './services/form-field-member.service';
import { FormSectionService } from './services/form-section.service';
import { FormVisibleFieldService } from './services/form-visible-fields.service';
import { FormSectionFieldMemberService } from './services/formsection-fieldmembers.service';
import { FieldDatatypeController } from './controllers/field-datatype.controller';
import { FieldGroupController } from './controllers/field-group.controller';
import { FieldGroupSetController } from './controllers/field-groupset.controller';
import { FieldInputTypeController } from './controllers/field-input-type.controller';
import { FieldOptionChildrenController } from './controllers/field-option-children.controller';
import { FieldOptionGroupController } from './controllers/field-option-group.controller';
import { FieldOptionGroupSetController } from './controllers/field-option-groupset.controller';
import { FieldOptionMergeController } from './controllers/field-option-merge.controller';
import { FieldOptionController } from './controllers/field-option.controller';
import { FieldRelationController } from './controllers/field-relation.controller';
import { FieldController } from './controllers/field.controller';
import { FormFieldMemberController } from './controllers/form-field-member.controller';
import { FormSectionController } from './controllers/form-section.controller';
import { FormVisibleFieldController } from './controllers/form-visible-fields.controller';
import { FormController } from './controllers/form.controller';
import { FormSectionFieldMemberController } from './controllers/formsection-fieldmembers.controller';
import { FieldDataType } from './entities/field-datatype.entity';
import { FieldGroup } from './entities/field-group.entity';
import { FieldGroupSet } from './entities/field-groupset.entity';
import { FieldInputType } from './entities/field-input-type.entity';
import { FieldOptionChildren } from './entities/field-option-children.entity';
import { FieldOptionGroup } from './entities/field-option-group.entity';
import { FieldOptionGroupSet } from './entities/field-option-groupset.entity';
import { FieldOptionMerge } from './entities/field-option-merge.entity';
import { FieldOption } from './entities/field-option.entity';
import { FieldRelation } from './entities/field-relation.entity';
import { Field } from './entities/field.entity';
import { FormFieldMember } from './entities/form-field-member.entity';
import { FormSection } from './entities/form-section.entity';
import { FormVisibleField } from './entities/form-visible-fields.entity';
import { Form } from './entities/form.entity';
import { FormSectionFieldMember } from './entities/formsection-fieldmembers.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([
      FieldDataType,
      FieldGroup,
      FieldGroupSet,
      FieldInputType,
      FieldOptionChildren,
      FieldOptionGroup,
      FieldOptionGroupSet,
      FieldOptionMerge,
      FieldOption,
      FieldRelation,
      Field,
      FormFieldMember,
      FormSection,
      FormVisibleField,
      Form,
      FormSectionFieldMember,
    ]),
  ],
  controllers: [
    FieldDatatypeController,
    FieldGroupController,
    FieldGroupSetController,
    FieldInputTypeController,
    FieldOptionChildrenController,
    FieldOptionGroupController,
    FieldOptionGroupSetController,
    FieldOptionMergeController,
    FieldOptionController,
    FieldRelationController,
    FieldController,
    FormFieldMemberController,
    FormSectionController,
    FormVisibleFieldController,
    FormController,
    FormSectionFieldMemberController,
  ],
  providers: [
    FieldService,
    FieldGroupService,
    FieldGroupSetService,
    FieldInputTypeService,
    FieldDataTypeService,
    FieldOptionService,
    FieldOptionChildrenService,
    FieldOptionGroupService,
    FieldOptionGroupSetService,
    FieldOptionMergeService,
    FieldRelationService,
    FormService,
    FormFieldMemberService,
    FormSectionService,
    FormVisibleFieldService,
    FormSectionFieldMemberService,
  ],
})
export class FormModule {}