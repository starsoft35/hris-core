"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
function getWhereConditions(filter) {
    if (filter) {
        return [];
    }
    const filterParams = _.isString(filter)
        ? [filter]
        : filter;
    return _.filter(_.map(filterParams || [], (filterParam) => {
        const filterSplit = (filterParam || '').split(':');
        const filterOperation = filterSplit[1];
        switch (filterOperation) {
            case 'eq': {
                return { [filterSplit[0]]: filterSplit[2] };
            }
            default:
                return null;
        }
    }), condition => condition);
}
exports.getWhereConditions = getWhereConditions;
//# sourceMappingURL=get-where-conditions.utility.js.map