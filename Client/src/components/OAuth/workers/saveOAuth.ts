import { AppThunkAction } from '../../../store';
import * as Api from '../apis';
import { OAuthState, OAuthRequest } from '../models';
import { KnownAction, ActionTypes, SaveOAuthStarted } from '../actions';
import { IException, isException, isBadRequest } from '../../../utils/error';

export const saveOAuth = (data: OAuthRequest): AppThunkAction<KnownAction> => async dispatch => {
    try {
        const response = await Api.saveOAuth(data);
        if (isBadRequest(response)) {
            throw { httpCode: response.status, message: await response.json()} as IException;
        }
        dispatch({ type: ActionTypes.SAVE_OAUTH_STARTED , data: data });
    } catch (e) {
        if (isException(e)) {
            console.log(e.httpCode, e.message);
            dispatch({ type: ActionTypes.SAVE_OAUTH_FAILED });
        }
        else {
            //jump to exception page
            console.log("e!:", e);
        }
    }
}

export const saveOAuthStarted = (state: OAuthState, action: SaveOAuthStarted) => {
    return state;
}

export const saveOAuthSucceeded = (state: OAuthState) => state;

export const saveOAuthFailed = (state: OAuthState) => state;
