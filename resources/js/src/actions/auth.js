const axios = window.axios;
import { setAlert } from "./alert";
import {
    ACCOUNT_DELETED,
    AUTH_ERROR,
    USER_LOADED,
    AUTH_LOADING,
} from "./types";

// Load authenticated user action
export const loadUser = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/user");

        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
        // dispatch(getNotifications());
    } catch (err) {
        console.log(err.response);

        dispatch({ type: AUTH_ERROR });
    }
};

//Login user action
export const loginUser = (data) => async (dispatch) => {
    dispatch({ type: AUTH_LOADING });

    try {
        await axios.get(`/sanctum/csrf-cookie`);

        await axios.post("/login", data);

        window.location.reload();
    } catch (err) {
        console.log(err.response);
        dispatch({ type: AUTH_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

// Register user action
export const createAccount = (formData) => async (dispatch) => {
    dispatch({ type: AUTH_LOADING });

    try {
        await axios.post("/register", formData);

        dispatch(
            setAlert("Your account had been created successfuly", "success")
        );

        window.location.reload();
    } catch (err) {
        console.log(err.response);
        dispatch({ type: AUTH_LOADING });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

//change password
export const changePassword =
    (data, handleOnSuccessful) => async (dispatch) => {
        dispatch({ type: AUTH_LOADING });

        try {
            await axios.put("/user/password", data);

            dispatch(setAlert("Password updated successfully", "success"));

            handleOnSuccessful();
            dispatch(loadUser());
        } catch (err) {
            console.log(err.response);
            dispatch({ type: AUTH_LOADING });
            if (err.response.status === 500) {
                return dispatch(
                    setAlert("Server errror, please try again.", "error")
                );
            }

            dispatch(setAlert(err.response.data.message, "error"));
        }
    };

// Request Password reset action
export const requestPasswordReset =
    (email, handleSuccess) => async (dispatch) => {
        dispatch({ type: AUTH_LOADING });
        try {
            await axios.post("/forgot-password", { email });

            dispatch(
                setAlert(
                    "An email has been sent to you, please check your email.",
                    "success"
                )
            );
            dispatch({ type: AUTH_LOADING });
            handleSuccess();
        } catch (err) {
            console.log(err.response);
            dispatch({ type: AUTH_LOADING });
            if (err.response.status === 500) {
                return dispatch(
                    setAlert("Server errror, please try again.", "error")
                );
            }

            dispatch(setAlert(err.response.data.message, "error"));
        }
    };

// Reset password action
export const resetPassword = (data) => async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
        await axios.post("/reset-password", data);

        dispatch(
            setAlert("Your password had been updated successfully.", "success")
        );

        window.location.replace("/");
    } catch (err) {
        console.log(err.response);
        dispatch({ type: AUTH_LOADING });
        if (err.response.status == 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

export const deleteAccount = () => async (dispatch) => {
    if (window.confirm("Are you sure? This can NOT be undone!")) {
        try {
            await axios.delete(`/delete-account`);
            window.location.reload();
        } catch (err) {
            console.log(err.response);
            if (err.response.status == 500) {
                return dispatch(
                    setAlert("Server errror, please try again.", "error")
                );
            }

            dispatch(setAlert(err.response.data.message, "error"));
        }
    }
};

// Logout user action
export const logoutUser = () => async (dispatch) => {
    try {
        await axios.post(`/logout`);
        window.location.reload();
    } catch (err) {
        console.log(err.response);
        if (err.response.status == 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};
