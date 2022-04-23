const axios = window.axios;
import { setAlert } from "./alert";
import { loadUser } from "./auth";
import {
    ACCOUNT_DELETED,
    CLEAR_PROFILE,
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    GET_PROFILES,
    PROFILE_LOADING,
    DELETE_PROFILE,
} from "./types";

// get current user profile
export const getProfileById = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/profile/${id}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
        });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

//Get current auth user profile
export const getProfile = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/profile/me");

        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        console.log(err.response);
        dispatch({ type: PROFILE_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

export const editAccount = (data) => async (dispatch) => {
    dispatch({ type: PROFILE_LOADING });
    try {
        const res = await axios.put("/user/profile-information", data);

        console.log(res.data);

        dispatch(setAlert("Profile updated successfully", "success"));

        dispatch(loadUser());

        dispatch(getProfile());
    } catch (err) {
        console.log(err.response);
        dispatch({ type: PROFILE_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

// get tutor profiles action
export const getAllProfiles = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/profile");

        dispatch({
            type: GET_PROFILES,
            payload: res.data,
        });
    } catch (err) {
        console.log(err.response);
        dispatch({ type: PROFILE_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

export const updateProfile = (id, data) => async (dispatch) => {
    try {
        dispatch({ type: PROFILE_LOADING });

        const res = await axios.put(`/api/profile/${id}`, data);

        dispatch(setAlert("Profile updated successfuly", "success"));

        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        console.log(err.response);
        dispatch({ type: PROFILE_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

export const enableUser = (id) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/profile/enable/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data,
        });

        dispatch(setAlert("User had been enabled successfully", "success"));
    } catch (err) {
        console.log(err.response);
        dispatch({ type: PROFILE_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

export const disableUser = (id) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/profile/disable/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data,
        });

        dispatch(setAlert("User had been disabled successfully", "success"));
    } catch (err) {
        console.log(err.response);
        dispatch({ type: PROFILE_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

export const delUser = (id) => async (dispatch) => {
    if (
        window.confirm(
            "Are you sure you want to delete user? This can NOT be undone!"
        )
    ) {
        try {
            await axios.delete(`/api/profile/${id}`);

            dispatch({
                type: DELETE_PROFILE,
                payload: id,
            });

            dispatch(setAlert("User had been deleted successfully", "success"));
        } catch (err) {
            console.log(err.response);
            dispatch({ type: PROFILE_ERROR });
            if (err.response.status === 500) {
                return dispatch(
                    setAlert("Server errror, please try again.", "error")
                );
            }

            dispatch(setAlert(err.response.data.message, "error"));
        }
    }
};

export const clearProfile = () => (dispatch) => {
    dispatch({ type: CLEAR_PROFILE });
};
