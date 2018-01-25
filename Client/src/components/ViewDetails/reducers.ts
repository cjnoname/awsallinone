import { Action, Reducer, ActionCreator } from 'redux';
import { KnownAction, ActionTypes } from './actions';
import * as viewDetails from './workers/viewDetails';
import { ViewDetailsState } from './models';

export const OAuthViewReducer: Reducer<ViewDetailsState> = (state: ViewDetailsState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case ActionTypes.GET_OAUTH_STARTED: { return viewDetails.getOAuthStarted(state) };
        case ActionTypes.GET_OAUTH_SUCCEEDED: { return viewDetails.getOAuthSucceeded(state, action) };
        case ActionTypes.GET_OAUTH_FAILED: { return viewDetails.getOAuthFailed(state) };
    }
    return state || new ViewDetailsState();
};
