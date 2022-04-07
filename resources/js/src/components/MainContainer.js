import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";

import Copyright from "./Copyright";
import MainHeader from "./MainHeader";

const theme = createTheme();

const MainContainer = ({ children, alerts = [] }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth={false} disableGutters={true}>
                <MainHeader />
                <Stack sx={{ width: "100%" }} spacing={2}>
                    {alerts.map((alert) => (
                        <Snackbar
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(alert.id)}
                            key={alert.id}
                            autoHideDuration={6000}
                        >
                            <Alert
                                severity={alert.alertType}
                                variant="filled"
                                sx={{ width: "100%" }}
                            >
                                {alert.msg}
                            </Alert>
                        </Snackbar>
                    ))}
                </Stack>
                <Container>{children}</Container>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
};

export default MainContainer;
