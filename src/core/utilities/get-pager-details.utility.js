"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPagerDetails(queryParams) {
    return {
        page: queryParams ? queryParams.page || 1 : 1,
        pageSize: queryParams ? queryParams.pageSize || 50 : 50,
        pageCount: 0,
        total: 0,
        nextPage: '',
    };
}
exports.getPagerDetails = getPagerDetails;
//# sourceMappingURL=get-pager-details.utility.js.map