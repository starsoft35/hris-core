import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldGroupService } from '../maintenance/field-group/services/field-group.service';
import { FieldGroupSetService } from '../maintenance/field-group-set/services/field-groupset.service';
import { FieldInputTypeService } from '../maintenance/field-input-type/services/field-input-type.service';
import { FieldDataTypeService } from '../maintenance/field-data-type/services/field-datatype.service';
import { FieldOptionService } from '../maintenance/field-option/services/field-option.service';
import { FieldOptionChildrenService } from '../maintenance/field-option-children/services/field-option-children.service';
import { FieldOptionGroupService } from '../maintenance/field-option-group/services/field-option-group.service';
import { FieldOptionGroupSetService } from '../maintenance/field-option-group-set/services/field-option-group-set.service';
import { FieldOptionMergeService } from './services/field-option-merge.service';
import { FieldRelationService } from './services/field-relation.service';
import { FormService } from './services/form.service';
import { FormFieldMemberService } from './services/form-field-member.service';
import { FormSectionService } from './services/form-section.service';
import { FormVisibleFieldService } from './services/form-visible-fields.service';
import { FormSectionFieldMemberService } from './services/formsection-fieldmembers.service';
import { FieldDatatypeController } from '../maintenance/field-data-type/controllers/field-datatype.controller';
import { FieldGroupController } from '../maintenance/field-group/controllers/field-group.controller';
import { FieldGroupSetController } from '../maintenance/field-group-set/controllers/field-groupset.controller';
import { FieldInputTypeController } from '../maintenance/field-input-type/controllers/field-input-type.controller';
import { FieldOptionChildrenController } from '../maintenance/field-option-children/controllers/field-option-children.controller';
import { FieldOptionGroupController } from '../maintenance/field-option-group/controllers/field-option-group.controller';
import { FieldOptionGroupSetController } from '../maintenance/field-option-group-set/controllers/field-option-group-set.controller';
import { FieldOptionMergeController } from './controllers/field-option-merge.controller';
import { FieldOptionController } from '../maintenance/field-option/controllers/field-option.controller';
import { FieldRelationController } from './controllers/field-relation.controller';
import { FormFieldMemberController } from './controllers/form-field-member.controller';
import { FormSectionController } from './controllers/form-section.controller';
import { FormVisibleFieldController } from './controllers/form-visible-fields.controller';
import { FormController } from './controllers/form.controller';
import { FormSectionFieldMemberController } from './controllers/formsection-fieldmembers.controller';
import { FieldDataType } from '../maintenance/field-data-type/entities/field-datatype.entity';
import { FieldGroup } from '../maintenance/field-group/entities/field-group.entity';
import { FieldGroupSet } from '../maintenance/field-group-set/entities/field-groupset.entity';
import { FieldInputType } from '../maintenance/field-input-type/entities/field-input-type.entity';
import { FieldOptionChildren } from '../maintenance/field-option-children/entities/field-option-children.entity';
import { FieldOptionGroup } from '../maintenance/field-option-group/entities/field-option-group.entity';
import { FieldOptionGroupSet } from '../maintenance/field-option-group-set/entities/field-option-group-set.entity';
import { FieldOptionMerge } from './entities/field-option-merge.entity';
import { FieldOption } from '../maintenance/field-option/entities/field-option.entity';
import { FieldRelation } from './entities/field-relation.entity';
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
    ]),
  ],
  controllers: [
    FieldDatatypeController,
    FieldGroupController,
    FieldGroupSetController,
    FieldOptionChildrenController,
    FieldOptionGroupController,
    FieldOptionGroupSetController,
    FieldOptionMergeController,
    FieldOptionController,
    FieldRelationController,
    FormFieldMemberController,
    FormSectionController,
    FormVisibleFieldController,
    FormController,
    FormSectionFieldMemberController,
  ],
  providers: [
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
