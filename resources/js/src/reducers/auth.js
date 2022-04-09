import {
    ACCOUNT_DELETED,
    AUTH_ERROR,
    LOGOUT_USER,
    USER_LOADED,
    AUTH_LOADING,
} from "../actions/types";

const initialState = {
    isAuthenticated: null,
    loading: true,
    user: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: !state.loading,
            };
        case AUTH_ERROR:
        case ACCOUNT_DELETED:
            return {
                ...state,
                isAuthenticated: null,
                user: null,
                loading: false,
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                ...payload,
            };
        default:
            return state;
    }
};
