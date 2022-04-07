import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Copyright from "./Copyright";

const theme = createTheme({
    palette: {
        background: {
            default: blue[800],
            paper: blue[800],
        },
    },
});

const AuthContainer = ({ children, alerts = [] }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth={false}>
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
                <Box
                    sx={{
                        marginY: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Link to="/">
                        <Avatar
                            variant="square"
                            alt="Well Cost Estimator"
                            src="/images/logo.png"
                            sx={{ width: 80, height: 40 }}
                        />
                    </Link>
                </Box>
                <Container maxWidth="xs">{children}</Container>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
};

export default AuthContainer;
