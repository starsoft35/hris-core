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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let hris_record_history = class hris_record_history {
};
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 13,
        name: 'uid',
    }),
    __metadata("design:type", String)
], hris_record_history.prototype, "uid", void 0);
hris_record_history = __decorate([
    typeorm_1.Entity('hris_record_history', { schema: 'public' }),
    typeorm_1.Index('idx_bab4b7b443707b0', ['field_'])
    // @Index("unique_recordhistory_idx",["history","record_","startdate",],{unique:true})
    // @Index("idx_bab4b7b4dfd750c",["record_",])
    ,
    typeorm_1.Index('uniq_bab4b7b539b0606', ['uid'], { unique: true })
], hris_record_history);
exports.hris_record_history = hris_record_history;
//# sourceMappingURL=hris_record_history.js.map