"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statuscode_constant_1 = require("../constants/statuscode.constant");
/**
 *
 * @param request
 * @param response
 * @param params
 * @param deleteResponse
 */
function deleteSuccessResponse(request, response, params, deleteResponse) {
    if (deleteResponse.affected === 1) {
        return response
            .status(response.statusCode)
            .json({ message: `Object with id ${params.id} deleted successfully` });
    }
}
exports.deleteSuccessResponse = deleteSuccessResponse;
/**
 *
 * @param request
 * @param response
 * @param params
 * @param deleteResponse
 */
function genericFailureResponse(response, params) {
    return response.status(statuscode_constant_1.ENTITY_NOT_FOUND).json({
        httpStatus: 'Not Found',
        httpStatusCode: statuscode_constant_1.ENTITY_NOT_FOUND,
        status: 'ERROR',
        message: `IdentifiableObject with id ${params.id} could not be found.`,
    });
}
exports.genericFailureResponse = genericFailureResponse;
/**
 *
 * @param request
 * @param response
 * @param entity
 */
function entityExistResponse(response, entity) {
    return response.json({
        httpStatus: 'Item Found',
        httpStatusCode: 404,
        status: 'ERROR',
        message: `IdentifiableObject with id ${entity.uid} could already exist.`,
    });
}
exports.entityExistResponse = entityExistResponse;
/**
 *
 * @param request
 * @param response
 * @param params
 * @param getResponse
 */
function getSuccessResponse(response, getResponse) {
    if (getResponse !== undefined) {
        const isPropExcluded = delete getResponse.id;
        return isPropExcluded
            ? response.status(response.statusCode).json(getResponse)
            : response.status(response.statusCode).json(getResponse);
    }
}
exports.getSuccessResponse = getSuccessResponse;
/**
 *
 * @param request
 * @param response
 * @param postResponse
 */
function postSuccessResponse(response, postResponse) {
    if (postResponse !== undefined) {
        return response.status(response.statusCode).json(postResponse);
    }
}
exports.postSuccessResponse = postSuccessResponse;
//# sourceMappingURL=response.helper.js.map