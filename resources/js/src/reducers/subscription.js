import {
    GET_SUBSCRIPTIONS,
    GET_SUBSCRIPTION,
    SUBSCRIPTION_ERROR,
    CLEAR_SUBSCRIPTION,
    SUBSCRIPTION_LOADING,
    UPDATE_SUBSCRIPTION,
    GET_CARDS,
} from "../actions/types";

const initialState = {
    subscription: null,
    subscriptions: {},
    cards: [],
    loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, actions) => {
    const { type, payload } = actions;

    switch (type) {
        case SUBSCRIPTION_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions: payload,
                loading: false,
            };
        case GET_CARDS:
            return {
                ...state,
                cards: payload,
                loading: false,
            };
        case GET_SUBSCRIPTION:
            return {
                ...state,
                subscription: payload,
                loading: false,
            };
        case UPDATE_SUBSCRIPTION:
            let index = state.subscriptions.data.findIndex(
                (item) => item.id === payload.id
            );
            state.subscriptions.data.splice(index, 1, payload);
            return {
                ...state,
                subscription: payload,
                subscriptions: { ...state.subscriptions },
                loading: false,
            };
        case SUBSCRIPTION_ERROR:
            return {
                ...state,
                loading: false,
            };
        case CLEAR_SUBSCRIPTION:
            return {
                subscriptions: {},
                loading: true,
                subscription: null,
                cards: [],
            };
        default:
            return state;
    }
};
