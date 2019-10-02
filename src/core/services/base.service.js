"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const utilities_1 = require("../utilities");
const get_fields_utility_1 = require("../utilities/get-fields.utility");
// class Factory {
//   create<T>(type: (new () => T)): T {
//     return new type();
//   }
// }
let BaseService = class BaseService {
    constructor(modelRepository, Model) {
        this.modelRepository = modelRepository;
        this.Model = Model;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.modelRepository.find();
        });
    }
    /**
     *
     * @param where
     */
    findWhere(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.modelRepository.find({ where });
        });
    }
    findAndCount(fields, filter, size, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const metaData = this.modelRepository.manager.connection.getMetadata(this.Model);
            return yield this.modelRepository.findAndCount({
                select: get_fields_utility_1.getSelections(fields, metaData),
                relations: get_fields_utility_1.getRelations(fields, metaData),
                where: utilities_1.getWhereConditions(filter),
                take: size,
                skip: page,
            });
        });
    }
    /**
     *
     * @param id
     */
    findOneByUid(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.modelRepository.findOne({ where: { uid: id } });
        });
    }
    /**
     *
     * @param id
     */
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.modelRepository.findOne({ where: { id } });
        });
    }
    /**
     *
     * @param data
     * @param modelTarget
     */
    saveEntity(data, modelTarget) {
        const model = new modelTarget();
        const metaData = this.modelRepository.manager.connection.getMetadata(this.Model);
        const savedEntity = model.save();
        Object.keys(data).forEach(key => {
            if (metaData.relations
                .map(item => {
                return item.propertyName;
            })
                .indexOf(key) > -1) {
                metaData.relations
                    .filter(item => {
                    return item.propertyName === key;
                })
                    .forEach(item => {
                    if (item.relationType === 'one-to-many') {
                        data[key].forEach(child => {
                            savedEntity[key].push(this.saveEntity(child, item.target));
                        });
                    }
                    // return {
                    //   propertyName: item.propertyName,
                    //   relationType: item.relationType,
                    //   target: item.target,
                    // }
                });
            }
            else {
                model[key] = data[key];
            }
        });
        return savedEntity;
    }
    /**
     *
     * @param entity
     */
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new this.Model();
            // var metaData = this.modelRepository.manager.connection.getMetadata(this.model);
            // var savedEntity = entity;
            // model = {...model, ...entity};
            Object.keys(entity).forEach(key => {
                model[key] = entity[key];
            });
            // return model.save();
            return yield this.modelRepository.save(model);
        });
    }
    /**
     *
     * @param id
     * @param model
     */
    update(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            const condition = { uid: id };
            const results = yield this.modelRepository.update(condition, model);
            console.log('Updating', results);
            return yield this.modelRepository.update(condition, model);
        });
    }
    /**
     *
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const condition = { uid: id };
            return this.modelRepository.delete(condition);
        });
    }
};
BaseService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeorm_1.Repository, Object])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map