import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import HomePage from "./pages/HomePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
    const [auth, setAuth] = useState(store.getState().auth);

    store.subscribe(() => setAuth(store.getState().auth));

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="dashboard" element={<DashboardPage />} />
                    <Route exact path="login" element={<LoginPage />} />
                    <Route
                        exact
                        path="register"
                        element={<RegistrationPage />}
                    />
                    <Route
                        exact
                        path="forgot-password"
                        element={<ForgotPasswordPage />}
                    />
                    <Route
                        exact
                        path="reset-password/:token"
                        element={<ResetPasswordPage />}
                    />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
