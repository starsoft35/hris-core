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
let hris_friendlyreport = class hris_friendlyreport {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], hris_friendlyreport.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 13,
        name: 'uid',
    }),
    __metadata("design:type", String)
], hris_friendlyreport.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 64,
        name: 'name',
    }),
    __metadata("design:type", String)
], hris_friendlyreport.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'description',
    }),
    __metadata("design:type", String)
], hris_friendlyreport.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        name: 'sort',
    }),
    __metadata("design:type", Number)
], hris_friendlyreport.prototype, "sort", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'ignoreskipinreport',
    }),
    __metadata("design:type", Boolean)
], hris_friendlyreport.prototype, "ignoreskipinreport", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'usetargets',
    }),
    __metadata("design:type", Boolean)
], hris_friendlyreport.prototype, "usetargets", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'showdeficitsurplus',
    }),
    __metadata("design:type", Boolean)
], hris_friendlyreport.prototype, "showdeficitsurplus", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: false,
        name: 'datecreated',
    }),
    __metadata("design:type", Date)
], hris_friendlyreport.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'lastupdated',
    }),
    __metadata("design:type", Date)
], hris_friendlyreport.prototype, "lastupdated", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 13,
        default: () => 'NULL::character varying',
        name: 'type',
    }),
    __metadata("design:type", String)
], hris_friendlyreport.prototype, "type", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'sql',
    }),
    __metadata("design:type", String)
], hris_friendlyreport.prototype, "sql", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'javascript',
    }),
    __metadata("design:type", String)
], hris_friendlyreport.prototype, "javascript", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'stylesheet',
    }),
    __metadata("design:type", String)
], hris_friendlyreport.prototype, "stylesheet", void 0);
hris_friendlyreport = __decorate([
    typeorm_1.Entity('hris_friendlyreport', { schema: 'public' }),
    typeorm_1.Index('uniq_354231795e237e06', ['name'], { unique: true }),
    typeorm_1.Index('idx_354231795278319c', ['series_']),
    typeorm_1.Index('uniq_35423179539b0606', ['uid'], { unique: true })
], hris_friendlyreport);
exports.hris_friendlyreport = hris_friendlyreport;
//# sourceMappingURL=hris_friendlyreport.js.map