const axios = window.axios;
import { setAlert } from "./alert";
import {
    GET_SUBSCRIPTIONS,
    GET_SUBSCRIPTION,
    SUBSCRIPTION_ERROR,
    CLEAR_SUBSCRIPTION,
    SUBSCRIPTION_LOADING,
    UPDATE_SUBSCRIPTION,
    GET_CARDS,
} from "./types";

//get all project
export const getAllSubscriptions = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/subscription");

        dispatch({
            type: GET_SUBSCRIPTIONS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err.response);
        dispatch({ type: SUBSCRIPTION_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

//get project by ID
export const getSubscriptionByID = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/subscription/${id}`);

        dispatch({
            type: GET_SUBSCRIPTION,
            payload: res.data,
        });
    } catch (err) {
        console.log(err.response);
        dispatch({ type: SUBSCRIPTION_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

export const getPaymentMethods = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/card");

        dispatch({
            type: GET_CARDS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err.response);
        dispatch({ type: SUBSCRIPTION_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

export const paySubscription = (data) => async (dispatch) => {
    try {
        const res = await axios.post("/api/subscription/pay", data);

        window.location.href = res.data.data.authorization_url;
    } catch (err) {
        console.log(err.response);
        dispatch({ type: SUBSCRIPTION_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};

export const confirmPayment = (trxref) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/subscription/verify/${trxref}`);

        dispatch(setAlert(res.data.msg, "success"));
    } catch (err) {
        console.log(err.response);
        dispatch({ type: SUBSCRIPTION_ERROR });
        if (err.response.status === 500) {
            return dispatch(
                setAlert("Server errror, please try again.", "error")
            );
        }

        dispatch(setAlert(err.response.data.message, "error"));
    }
};
