import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardContainer from "../../components/DashboardContainer";
import ChangePasswordPage from "./ChangePasswordPage";
import ProfilePage from "./ProfilePage";

const index = () => {
    return (
        <DashboardContainer>
            <Routes>
                <Route
                    path="change-password"
                    element={<ChangePasswordPage />}
                />
                <Route path="profile" element={<ProfilePage />} />
            </Routes>
        </DashboardContainer>
    );
};

export default index;
