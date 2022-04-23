import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardContainer from "../../components/DashboardContainer";
import ChangePasswordPage from "./ChangePasswordPage";
import ProfilePage from "./ProfilePage";
import ProjectPage from "./ProjectPage";
import SingleProjectPage from "./SingleProjectPage";
import SubscriptionPage from "./SubscriptionPage";
import BillingPlansPage from "./BillingPlansPage";

const index = () => {
    return (
        <DashboardContainer>
            <Routes>
                <Route
                    path="change-password"
                    element={<ChangePasswordPage />}
                />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="subscription" element={<SubscriptionPage />} />
                <Route path="billing" element={<BillingPlansPage />} />
                <Route
                    path="project/*"
                    element={
                        <Routes>
                            <Route index element={<ProjectPage />} />
                            <Route
                                path="/:id"
                                element={<SingleProjectPage />}
                            />
                        </Routes>
                    }
                />
            </Routes>
        </DashboardContainer>
    );
};

export default index;
