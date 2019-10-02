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
class Tracked {
    updateDates() {
        console.log('executing before insert');
        this.datecreated = new Date();
        this.lastupdated = new Date();
        this.uid = 'qwreyuwgstyw13';
    }
}
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        name: 'datecreated',
    }),
    __metadata("design:type", Date)
], Tracked.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'lastupdated',
    }),
    __metadata("design:type", Date)
], Tracked.prototype, "lastupdated", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 13,
        name: 'uid',
    }),
    __metadata("design:type", String)
], Tracked.prototype, "uid", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tracked.prototype, "updateDates", null);
exports.Tracked = Tracked;
//# sourceMappingURL=tracked.entity.js.map