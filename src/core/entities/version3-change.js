"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Version3Changes {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            //await queryRunner.query('ALTER TABLE hris_user" RENAME TO user');
            this.getTables().forEach((table) => __awaiter(this, void 0, void 0, function* () {
                let userTable = yield queryRunner.getTable('hris_' + table.name);
                if (userTable) {
                    let newTableName = table.name;
                    if (table.renameTo) {
                        newTableName = table.renameTo;
                    }
                    yield queryRunner.query('ALTER TABLE "hris_"' + table.name + ' RENAME TO "' + newTableName + '"');
                    yield queryRunner.query('ALTER TABLE "' + newTableName + '" ADD COLUMN "createdbyid" INTEGER');
                    yield queryRunner.query('ALTER TABLE "' + newTableName + '" ADD CONSTRAINT "fk_' + newTableName + '_createdby" FOREIGN KEY("createdbyid") REFERENCES "user"');
                    yield queryRunner.query('ALTER TABLE "' + newTableName + '" ADD COLUMN "lastupdatedbyid" INTEGER');
                    yield queryRunner.query('ALTER TABLE "' + newTableName + '" ADD CONSTRAINT "fk_' + newTableName + '_lastupdatedby" FOREIGN KEY("lastupdatedbyid") REFERENCES "user"');
                    yield queryRunner.query('ALTER TABLE "' + newTableName + '" RENAME COLUMN id TO "' + newTableName + 'id"');
                    yield queryRunner.query('ALTER TABLE "' + newTableName + '" RENAME COLUMN "datecreated" TO "created"');
                    if (table.isIdentifiable) {
                        yield queryRunner.query('ALTER TABLE "' + newTableName + '" ADD COLUMN "code" INTEGER');
                    }
                }
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getTables() {
        return [];
    }
}
exports.Version3Changes = Version3Changes;
//# sourceMappingURL=version3-change.js.map