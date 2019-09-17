import { Request, Response } from 'express';
import { UIDParams } from '../interfaces/response/params.interface';

/**
 *
 * @param request
 * @param response
 * @param params
 * @param deleteResponse
 */
export function getSuccessResponse(
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
                raw: deleteResponse.raw,
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
export function getFailureResponse(
    request: Request,
    response: Response,
    params: UIDParams,
): Response {
    return response.json({
        httpStatus: 'Not Found',
        httpStatusCode: 404,
        status: 'ERROR',
        message: `IdentifiableObject with id ${params.id} could not be found.`,
    });
}
