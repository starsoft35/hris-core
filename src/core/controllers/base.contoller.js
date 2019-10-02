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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const utilities_1 = require("../utilities");
const session_guard_1 = require("src/modules/user/guards/session.guard");
const response_helper_1 = require("../helpers/response.helper");
class BaseController {
    /**
     *
     * @param baseService
     * @param Model
     */
    constructor(baseService, Model) {
        this.baseService = baseService;
        this.Model = Model;
    }
    /**
     *
     * @param query
     */
    findAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (query.paging === 'false') {
                const allContents = yield this.baseService.findAll();
                return { [this.Model.plural]: allContents };
            }
            const pagerDetails = utilities_1.getPagerDetails(query);
            const [contents, totalCount] = yield this.baseService.findAndCount(query.fields, query.filter, pagerDetails.pageSize, pagerDetails.page - 1);
            return {
                pager: Object.assign({}, pagerDetails, { pageCount: contents.length, total: totalCount, nextPage: `/api/${this.Model.plural}?page=${pagerDetails.page + 1}` }),
                [this.Model.plural]: contents,
            };
        });
    }
    /**
     *
     * @param req
     * @param res
     * @param params
     */
    findOne(req, res, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isExist = yield this.baseService.findOneByUid(params.id);
                const getResponse = isExist;
                if (isExist !== undefined) {
                    return response_helper_1.getSuccessResponse(res, getResponse);
                }
                else {
                    return response_helper_1.genericFailureResponse(res, params);
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    /**
     *
     * @param req
     * @param res
     * @param params
     */
    findOneRelation(req, res, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isExist = yield this.baseService.findOneByUid(params.id);
                const getResponse = isExist;
                if (isExist !== undefined) {
                    return { [params.relation]: getResponse[params.relation] };
                }
                else {
                    return response_helper_1.genericFailureResponse(res, params);
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    /**
     *
     * @param req
     * @param res
     * @param createEntityDto
     */
    create(req, res, createEntityDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isIDExist = yield this.baseService.findOneById(createEntityDto.uid);
                if (isIDExist !== undefined) {
                    return response_helper_1.entityExistResponse(res, isIDExist);
                }
                else {
                    const createdEntity = yield this.baseService.create(createEntityDto);
                    if (createdEntity !== undefined) {
                        return response_helper_1.postSuccessResponse(res, createdEntity);
                    }
                    else {
                        return response_helper_1.genericFailureResponse(res);
                    }
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    /**
     *
     * @param params
     * @param updateEntityDto
     */
    update(req, res, params, updateEntityDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateEntity = yield this.baseService.findOneByUid(params.id);
            if (updateEntity !== undefined) {
                const payload = yield this.baseService.update(params.id, updateEntityDto);
                if (payload) {
                    return res
                        .status(res.statusCode)
                        .json({ message: `Item with id ${params.id} updated successfully.` });
                }
            }
            else {
                return response_helper_1.genericFailureResponse(res, params);
            }
        });
    }
    /**
     *
     * @param params
     * @param req
     * @param res
     */
    delete(params, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isExist = yield this.baseService.findOneByUid(params.id);
                if (isExist !== undefined) {
                    const deleteResponse = yield this.baseService.delete(params.id);
                    return response_helper_1.deleteSuccessResponse(req, res, params, deleteResponse);
                }
                else {
                    return response_helper_1.genericFailureResponse(res, params);
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    // TODO: give descriptive name for this method
    get plural() {
        throw Error('Plural Not set');
        return 'undefined';
    }
}
__decorate([
    common_1.Get(),
    common_1.UseGuards(session_guard_1.SessionGuard),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    common_1.UseGuards(session_guard_1.SessionGuard),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findOne", null);
__decorate([
    common_1.Get(':id/:relation'),
    common_1.UseGuards(session_guard_1.SessionGuard),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findOneRelation", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(session_guard_1.SessionGuard),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(session_guard_1.SessionGuard),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.Param()),
    __param(3, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(session_guard_1.SessionGuard),
    __param(0, common_1.Param()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "delete", null);
exports.BaseController = BaseController;
//# sourceMappingURL=base.contoller.js.map