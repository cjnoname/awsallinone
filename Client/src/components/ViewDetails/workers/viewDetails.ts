import { AppThunkAction } from '../../../store';
import { KnownAction, ActionTypes, GetOAuthSucceeded } from '../actions';
import { IException, isException, isNoContent } from '../../../utils/error';
import * as Api from "../apis";
import { ViewDetailsState, Client, SearchDetailsRequest } from '../models';

export const getOAuthAction = (request: SearchDetailsRequest): AppThunkAction<KnownAction> => async (dispatch, getState) => {
    dispatch({ type: ActionTypes.GET_OAUTH_STARTED });
    try {
        const response = await Api.getOAuth(request);
        if (!response.ok) {
            throw { httpCode: response.status, message: await response.json() } as IException;
        }
        const data = isNoContent(response) ? undefined : await response.json();
        dispatch({ type: ActionTypes.GET_OAUTH_SUCCEEDED, client: data });
    } catch (e) {
        if (isException(e)) {
            console.log(e.httpCode, e.message);
            dispatch({ type: ActionTypes.GET_OAUTH_FAILED });
        }
        else {
            //jump to exception page
            console.log("e!:", e);
        }
    }
}

export const getOAuthStarted = (state: ViewDetailsState) => state.set("isLoading", true);

export const getOAuthSucceeded = (state: ViewDetailsState, action: GetOAuthSucceeded) => {
    return state
        .set("client", action.client ? new Client(action.client) : undefined)
        .set("isLoading", false);
}

export const getOAuthFailed = (state: ViewDetailsState) => state.set("isLoading", false);
