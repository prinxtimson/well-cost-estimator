import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import ChangePasswordPage from "./ChangePasswordPage";
import ProfilePage from "./ProfilePage";
import PaymentMethods from "./PaymentMethods";

const SettingsPage = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = React.useState("profile");

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(newValue);
    };

    React.useEffect(() => {
        const path = pathname.split("/").pop();
        setValue(path);
    }, [pathname]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ width: "100%", bgcolor: "#ffffff" }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Profile" value="profile" />
                    <Tab label="Change Password" value="change-password" />
                    <Tab label="Payment Methods" value="payment-methods" />
                </Tabs>
            </Box>
            <Routes>
                <Route index element={<Settings />} />
                <Route
                    path="change-password"
                    element={<ChangePasswordPage />}
                />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="payment-methods" element={<PaymentMethods />} />
            </Routes>
        </Box>
    );
};

export default SettingsPage;

const Settings = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        navigate("profile");
    }, []);

    return null;
};
