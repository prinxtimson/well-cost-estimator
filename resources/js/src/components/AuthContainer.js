import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { connect } from "react-redux";

import Copyright from "./Copyright";

const theme = createTheme({
    palette: {
        background: {
            default: blue[600],
            paper: blue[600],
        },
    },
});

const AuthContainer = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth={false}>
                <Avatar
                    variant="square"
                    alt="Well Cost Estimator"
                    src="/images/logo.png"
                    sx={{ width: 100, height: 50, marginY: 3, marginX: "auto" }}
                />
                <Container maxWidth="xs">{children}</Container>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
};

export default AuthContainer;
