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
const base_contoller_1 = require("../../../core/controllers/base.contoller");
const apps_entity_1 = require("../entities/apps.entity");
const apps_service_1 = require("../services/apps.service");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const configuration_1 = require("src/core/utilities/configuration");
const fs = require("fs");
const StreamZip = require("node-stream-zip");
let AppsController = class AppsController extends base_contoller_1.BaseController {
    constructor(service) {
        super(service, apps_entity_1.App);
        this.service = service;
    }
    upload(req, res, file) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.uploadFile(file);
                const apps = yield this.service.findWhere({
                    name: result.name,
                });
                if (apps.length === 0) {
                    return _super.create.call(this, req, res, result);
                }
                else {
                    return this.service.update(apps[0].id, result);
                }
            }
            catch (e) {
                return e;
            }
        });
    }
    /**
     *
     * @param file
     */
    uploadFile(file) {
        return new Promise((resolve, reject) => {
            const zip = new StreamZip({
                file: file.path,
                storeEntries: true,
            });
            zip.on('ready', () => {
                let found = false;
                Object.values(zip.entries()).forEach((entry) => {
                    if (entry.name === 'manifest.webapp') {
                        found = true;
                    }
                });
                if (!found) {
                    reject({
                        error: 'No Manifest File Found',
                    });
                    zip.close();
                }
                else {
                    zip.stream('manifest.webapp', (err, stream) => {
                        const chunks = [];
                        stream.on('data', chunk => {
                            chunks.push(chunk);
                        });
                        stream.on('end', () => {
                            try {
                                const manifest = JSON.parse(Buffer.concat(chunks).toString());
                                const destination = configuration_1.getConfiguration().apps +
                                    '/' +
                                    manifest.name
                                        .toLowerCase()
                                        .split(' ')
                                        .join('');
                                if (!fs.existsSync(destination)) {
                                    fs.mkdirSync(destination);
                                }
                                zip.extract(null, configuration_1.getConfiguration().apps +
                                    '/' +
                                    manifest.name
                                        .toLowerCase()
                                        .split(' ')
                                        .join(''), (err, count) => {
                                    zip.close();
                                    resolve({
                                        name: manifest.name,
                                        shortName: manifest.name,
                                        version: manifest.version,
                                        launchpath: manifest.launch_path,
                                        appicon: manifest.icons['16'] ||
                                            manifest.icons['48'] ||
                                            manifest.icons['128'],
                                    });
                                });
                            }
                            catch (e) {
                                if (e.message.indexOf('Unexpected string in JSON at position') >
                                    -1) {
                                    reject({
                                        error: 'Manifest File Invalid JSON',
                                    });
                                }
                                else {
                                    reject({
                                        error: e.message,
                                    });
                                }
                            }
                        });
                    });
                }
            });
        });
    }
    /**
     *
     * @param params
     * @param res
     */
    loadFile(params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const result = await this.service.findOneByUid(params.id);
            res.sendFile(configuration_1.getConfiguration().apps + '/' + params.id + '/' + params['0']);
        });
    }
};
__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: configuration_1.getConfiguration().temp,
            filename: (req, file, cb) => {
                // Generating a 32 random chars long string
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                // Calling the callback passing the random name generated with the original extension name
                cb(null, randomName + '.app.zip');
            },
        }),
    })),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppsController.prototype, "upload", null);
__decorate([
    common_1.Get(':id/*'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppsController.prototype, "loadFile", null);
AppsController = __decorate([
    common_1.Controller('api/' + apps_entity_1.App.plural),
    __metadata("design:paramtypes", [apps_service_1.AppService])
], AppsController);
exports.AppsController = AppsController;
//# sourceMappingURL=apps.controller.js.map