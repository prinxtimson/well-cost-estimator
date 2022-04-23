import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    UPDATE_PROFILE,
    GET_PROFILES,
    PROFILE_LOADING,
    DELETE_PROFILE,
} from "../actions/types";

const initialState = {
    profile: null,
    profiles: null,
    loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, actions) => {
    const { type, payload } = actions;

    switch (type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false,
            };
        case UPDATE_PROFILE:
            let index = state.profiles.findIndex(
                (item) => item.id === payload.id
            );
            state.profiles.splice(index, 1, payload);
            return {
                ...state,
                loading: false,
                profiles: [...state.profiles],
            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false,
            };
        case DELETE_PROFILE:
            let data = state.profiles.filter((item) => item.id !== payload);
            return {
                ...state,
                loading: false,
                profiles: [...data],
            };
        case PROFILE_ERROR:
            return {
                ...state,
                loading: false,
            };
        case CLEAR_PROFILE:
            return {
                profile: null,
                profiles: null,
                loading: true,
            };
        default:
            return state;
    }
};
