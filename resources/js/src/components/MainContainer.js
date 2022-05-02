import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import { blue } from "@mui/material/colors";

import Copyright from "./Copyright";
import MainHeader from "./MainHeader";

const theme = createTheme();

const MainContainer = ({ children, alerts, routeName, imgUrl }) => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleToggleNavMenu = (event) => {
        setOpen(!open);
        setAnchorEl(event.currentTarget);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
                component="main"
                maxWidth={false}
                disableGutters={true}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#f5f8fb",
                }}
            >
                <Box
                    sx={{
                        height: 450,
                        display: "flex",
                        backgroundImage: `url("${imgUrl}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        <MainHeader
                            handleToggleNavMenu={handleToggleNavMenu}
                            open={open}
                            anchorEl={anchorEl}
                        />
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                            }}
                        >
                            <Typography
                                component="h6"
                                variant="h2"
                                sx={{ fontWeight: "bold" }}
                            >
                                {routeName}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

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
                <Container sx={{ flexGrow: 1 }}>{children}</Container>
                <Copyright sx={{ mt: 1, mb: 1 }} color="#000080" />
            </Container>
        </ThemeProvider>
    );
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(MainContainer);
