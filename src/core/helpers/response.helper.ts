import { Request, Response } from 'express';
import { UIDParams } from '../interfaces/response/params.interface';
import { ENTITY_NOT_FOUND } from '../constants/statuscode.constant';

/**
 *
 * @param request
 * @param response
 * @param params
 * @param deleteResponse
 */
export function deleteSuccessResponse(
    request: Request,
    response: Response,
    params: UIDParams,
    deleteResponse: any,
): Response {
    if (deleteResponse.affected === 1) {
        return response.json({
            httpStatus: response.statusCode === 200 ? 'OK' : 'Conflict',
            httpStatusCode: response.statusCode,
            status: 'success',
            response: {
                message: `Object with id ${params.id} deleted successfully`,
                url: `http://${request.hostname}${request.url}`,
                affectedRows: deleteResponse.affected,
                data: deleteResponse.raw,
            },
        });
    }
}

/**
 *
 * @param request
 * @param response
 * @param params
 * @param deleteResponse
 */
export function genericFailureResponse(
    request: Request,
    response: Response,
    params?: UIDParams,
): Response {
    return response.status(ENTITY_NOT_FOUND).json({
        httpStatus: 'Not Found',
        httpStatusCode: ENTITY_NOT_FOUND,
        status: 'ERROR',
        message: `IdentifiableObject with id ${params.id} could not be found.`,
    });
}

/**
 *
 * @param request
 * @param response
 * @param entity
 */
export function entityExistResponse(
    request: Request,
    response: Response,
    entity: any,
): Response {
    return response.json({
        httpStatus: 'Item Found',
        httpStatusCode: 404,
        status: 'ERROR',
        message: `IdentifiableObject with id ${entity.uid} could already exist.`,
    });
}

/**
 *
 * @param request
 * @param response
 * @param params
 * @param getResponse
 */
export function getSuccessResponse(
    response: Response,
    getResponse: any,
): Response {
    if (getResponse !== undefined) {
        const isPropExcluded = delete getResponse.id;
        return isPropExcluded
            ? response.status(response.statusCode).json(getResponse)
            : response.status(response.statusCode).json(getResponse);
    }
}

/**
 *
 * @param request
 * @param response
 * @param postResponse
 */
export function postSuccessResponse(
    request: Request,
    response: Response,
    postResponse: any,
): Response {
    if (postResponse !== undefined) {
        return response.status(response.statusCode).json(postResponse);
    }
}
