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
const record_controller_1 = require("./controllers/record.controller");
const record_entity_1 = require("./entities/record.entity");
const record_service_1 = require("./services/record.service");
const data_store_contoller_1 = require("./controllers/data-store.contoller");
const data_store_service_1 = require("./services/data-store.service");
const data_store_entity_1 = require("./entities/data-store.entity");
let RecordModule = class RecordModule {
};
RecordModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'basic', session: true }),
            typeorm_1.TypeOrmModule.forFeature([record_entity_1.Record, data_store_entity_1.DataStore]),
        ],
        controllers: [record_controller_1.RecordsController, data_store_contoller_1.DataStoreController],
        providers: [record_service_1.RecordService, data_store_service_1.DataStoreService],
    })
], RecordModule);
exports.RecordModule = RecordModule;
//# sourceMappingURL=record.module.js.map