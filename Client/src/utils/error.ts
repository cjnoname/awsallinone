export interface IException {
    httpCode: number,
    message: string
}

export const isException = (object: any): object is IException => {
    return 'httpCode' in object && 'message' in object;
}

export const isBadRequest = (response: Response) => {
    return response.status === 400;
}

export const isNoContent = (response: Response) => {
    return response.status === 204;
}