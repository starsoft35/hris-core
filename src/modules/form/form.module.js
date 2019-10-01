"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const field_group_service_1 = require("../maintenance/field-group/services/field-group.service");
const field_groupset_service_1 = require("./services/field-groupset.service");
const field_input_type_service_1 = require("./services/field-input-type.service");
const field_data_type_service_1 = require("./services/field-data-type.service");
const field_option_service_1 = require("./services/field-option.service");
const field_option_children_service_1 = require("./services/field-option-children.service");
const field_option_group_service_1 = require("./services/field-option-group.service");
const field_option_groupset_service_1 = require("./services/field-option-groupset.service");
const field_option_merge_service_1 = require("./services/field-option-merge.service");
const field_relation_service_1 = require("./services/field-relation.service");
const form_service_1 = require("./services/form.service");
const form_field_member_service_1 = require("./services/form-field-member.service");
const form_section_service_1 = require("./services/form-section.service");
const form_visible_fields_service_1 = require("./services/form-visible-fields.service");
const formsection_fieldmembers_service_1 = require("./services/formsection-fieldmembers.service");
const field_datatype_controller_1 = require("./controllers/field-datatype.controller");
const field_group_controller_1 = require("../maintenance/field-group/controllers/field-group.controller");
const field_groupset_controller_1 = require("./controllers/field-groupset.controller");
const field_input_type_controller_1 = require("./controllers/field-input-type.controller");
const field_option_children_controller_1 = require("./controllers/field-option-children.controller");
const field_option_group_controller_1 = require("./controllers/field-option-group.controller");
const field_option_groupset_controller_1 = require("./controllers/field-option-groupset.controller");
const field_option_merge_controller_1 = require("./controllers/field-option-merge.controller");
const field_option_controller_1 = require("./controllers/field-option.controller");
const field_relation_controller_1 = require("./controllers/field-relation.controller");
const form_field_member_controller_1 = require("./controllers/form-field-member.controller");
const form_section_controller_1 = require("./controllers/form-section.controller");
const form_visible_fields_controller_1 = require("./controllers/form-visible-fields.controller");
const form_controller_1 = require("./controllers/form.controller");
const formsection_fieldmembers_controller_1 = require("./controllers/formsection-fieldmembers.controller");
const field_datatype_entity_1 = require("./entities/field-datatype.entity");
const field_group_entity_1 = require("../maintenance/field-group/entities/field-group.entity");
const field_groupset_entity_1 = require("./entities/field-groupset.entity");
const field_input_type_entity_1 = require("./entities/field-input-type.entity");
const field_option_children_entity_1 = require("./entities/field-option-children.entity");
const field_option_group_entity_1 = require("./entities/field-option-group.entity");
const field_option_groupset_entity_1 = require("./entities/field-option-groupset.entity");
const field_option_merge_entity_1 = require("./entities/field-option-merge.entity");
const field_option_entity_1 = require("./entities/field-option.entity");
const field_relation_entity_1 = require("./entities/field-relation.entity");
const form_field_member_entity_1 = require("./entities/form-field-member.entity");
const form_section_entity_1 = require("./entities/form-section.entity");
const form_visible_fields_entity_1 = require("./entities/form-visible-fields.entity");
const form_entity_1 = require("./entities/form.entity");
const formsection_fieldmembers_entity_1 = require("./entities/formsection-fieldmembers.entity");
let FormModule = class FormModule {
};
FormModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'basic', session: true }),
            typeorm_1.TypeOrmModule.forFeature([
                field_datatype_entity_1.FieldDataType,
                field_group_entity_1.FieldGroup,
                field_groupset_entity_1.FieldGroupSet,
                field_input_type_entity_1.FieldInputType,
                field_option_children_entity_1.FieldOptionChildren,
                field_option_group_entity_1.FieldOptionGroup,
                field_option_groupset_entity_1.FieldOptionGroupSet,
                field_option_merge_entity_1.FieldOptionMerge,
                field_option_entity_1.FieldOption,
                field_relation_entity_1.FieldRelation,
                form_field_member_entity_1.FormFieldMember,
                form_section_entity_1.FormSection,
                form_visible_fields_entity_1.FormVisibleField,
                form_entity_1.Form,
                formsection_fieldmembers_entity_1.FormSectionFieldMember,
            ]),
        ],
        controllers: [
            field_datatype_controller_1.FieldDatatypeController,
            field_group_controller_1.FieldGroupController,
            field_groupset_controller_1.FieldGroupSetController,
            field_input_type_controller_1.FieldInputTypeController,
            field_option_children_controller_1.FieldOptionChildrenController,
            field_option_group_controller_1.FieldOptionGroupController,
            field_option_groupset_controller_1.FieldOptionGroupSetController,
            field_option_merge_controller_1.FieldOptionMergeController,
            field_option_controller_1.FieldOptionController,
            field_relation_controller_1.FieldRelationController,
            form_field_member_controller_1.FormFieldMemberController,
            form_section_controller_1.FormSectionController,
            form_visible_fields_controller_1.FormVisibleFieldController,
            form_controller_1.FormController,
            formsection_fieldmembers_controller_1.FormSectionFieldMemberController,
        ],
        providers: [
            field_group_service_1.FieldGroupService,
            field_groupset_service_1.FieldGroupSetService,
            field_input_type_service_1.FieldInputTypeService,
            field_data_type_service_1.FieldDataTypeService,
            field_option_service_1.FieldOptionService,
            field_option_children_service_1.FieldOptionChildrenService,
            field_option_group_service_1.FieldOptionGroupService,
            field_option_groupset_service_1.FieldOptionGroupSetService,
            field_option_merge_service_1.FieldOptionMergeService,
            field_relation_service_1.FieldRelationService,
            form_service_1.FormService,
            form_field_member_service_1.FormFieldMemberService,
            form_section_service_1.FormSectionService,
            form_visible_fields_service_1.FormVisibleFieldService,
            formsection_fieldmembers_service_1.FormSectionFieldMemberService,
        ],
    })
], FormModule);
exports.FormModule = FormModule;
//# sourceMappingURL=form.module.js.map