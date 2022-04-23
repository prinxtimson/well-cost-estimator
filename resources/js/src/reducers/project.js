import {
    GET_PROJECTS,
    GET_PROJECT,
    PROJECT_ERROR,
    CLEAR_PROJECT,
    PROJECT_LOADING,
    UPDATE_PROJECT,
} from "../actions/types";

const initialState = {
    project: null,
    projects: {},
    loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, actions) => {
    const { type, payload } = actions;

    switch (type) {
        case PROJECT_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_PROJECTS:
            return {
                ...state,
                projects: payload,
                loading: false,
            };
        case GET_PROJECT:
            return {
                ...state,
                project: payload,
                loading: false,
            };
        case UPDATE_PROJECT:
            let index = state.profiles.data.findIndex(
                (item) => item.id === payload.id
            );
            state.profiles.data.splice(index, 1, payload);
            return {
                ...state,
                project: payload,
                projects: { ...state.profiles },
                loading: false,
            };
        case PROJECT_ERROR:
            return {
                ...state,
                loading: false,
            };
        case CLEAR_PROJECT:
            return {
                projects: {},
                loading: true,
                project: null,
            };
        default:
            return state;
    }
};
