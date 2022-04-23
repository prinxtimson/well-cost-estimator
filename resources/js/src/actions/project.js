const axios = window.axios;
import { setAlert } from "./alert";
import {
    CLEAR_PROJECT,
    GET_PROJECT,
    GET_PROJECTS,
    PROJECT_ERROR,
    PROJECT_LOADING,
    UPDATE_PROJECT,
} from "./types";

//get all project
export const getAllProjects = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/project");

        dispatch({
            type: GET_PROJECTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err.response);
        dispatch({ type: PROJECT_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

//get project by ID
export const getProjectByID = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/project/${id}`);

        dispatch({
            type: GET_PROJECT,
            payload: res.data,
        });
    } catch (err) {
        console.log(err.response);
        dispatch({ type: PROJECT_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

//create new project
export const createProject =
    (data, handleOnSuccessfull) => async (dispatch) => {
        dispatch({ type: PROJECT_LOADING });
        try {
            const res = await axios.post("/api/project", data);

            console.log(res.data);

            dispatch({
                type: PROJECT_LOADING,
            });

            handleOnSuccessfull(res.data);
        } catch (err) {
            console.log(err.response);
            dispatch({ type: PROJECT_ERROR });
            if (err.response.status === 500) {
                return dispatch(
                    setAlert("Server errror, please try again.", "error")
                );
            }

            dispatch(setAlert(err.response.data.message, "error"));
        }
    };

//update existing project
export const updateProject = (data, id) => async (dispatch) => {
    dispatch({ type: PROJECT_LOADING });

    try {
        const res = await axios.put(`/api/project/${id}`, data);

        dispatch({
            type: UPDATE_PROJECT,
            payload: res.data,
        });
    } catch (err) {
        console.log(err.response);
        dispatch({ type: PROJECT_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

// clear project
export const clearProject = () => (dispatch) => {
    dispatch({ type: CLEAR_PROJECT });
};
