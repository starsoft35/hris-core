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
const named_identifiable_object_1 = require("src/core/entities/named-identifiable-object");
let App = class App extends named_identifiable_object_1.NamedIdentifiableObject {
};
App.plural = 'apps';
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'appid',
    }),
    __metadata("design:type", Number)
], App.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 50,
        name: 'version',
    }),
    __metadata("design:type", String)
], App.prototype, "version", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 50,
        name: 'launchpath',
    }),
    __metadata("design:type", String)
], App.prototype, "launchpath", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 50,
        name: 'appicon',
    }),
    __metadata("design:type", String)
], App.prototype, "appicon", void 0);
App = __decorate([
    typeorm_1.Entity('app', { schema: 'public' })
], App);
exports.App = App;
//# sourceMappingURL=apps.entity.js.map