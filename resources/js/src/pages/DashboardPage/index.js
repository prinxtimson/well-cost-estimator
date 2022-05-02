import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardContainer from "../../components/DashboardContainer";
import ProjectPage from "./ProjectPage";
import SingleProjectPage from "./SingleProjectPage";
import SubscriptionPage from "./SubscriptionPage";
import BillingPlansPage from "./BillingPlansPage";
import SettingsPage from "./SettingsPage";
import AddProjectPage from "./AddProjectPage";

const index = () => {
    return (
        <DashboardContainer>
            <Routes>
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
                <Route path="add-project" element={<AddProjectPage />} />
                <Route path="settings/*" element={<SettingsPage />} />
            </Routes>
        </DashboardContainer>
    );
};

export default index;
