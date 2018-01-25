import { Client } from './models';
import { getOAuthAction } from './workers/viewDetails';

export enum ActionTypes {
    GET_OAUTH_STARTED = 'GET_OAUTH_STARTED',
    GET_OAUTH_SUCCEEDED = 'GET_OAUTH_SUCCEEDED',
    GET_OAUTH_FAILED = 'GET_OAUTH_FAILED',
}

export interface GetOAuthStarted {
    type: ActionTypes.GET_OAUTH_STARTED;
}

export interface GetOAuthSucceeded {
    type: ActionTypes.GET_OAUTH_SUCCEEDED;
    client?: Client;
}

export interface GetOAuthFailed {
    type: ActionTypes.GET_OAUTH_FAILED;
}

export type KnownAction = GetOAuthStarted | GetOAuthSucceeded | GetOAuthFailed;

export const actionCreators = {
    getOAuthAction
};
