import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
    createTheme,
    ThemeProvider,
    styled,
    useTheme,
} from "@mui/material/styles";
import { blue } from "@mui/material/colors";

import Copyright from "./Copyright";
import DashboardMenu from "./DashboardMenu";

import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),

    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(1, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "center",
}));

const theme = createTheme({
    palette: {
        background: {
            default: "#f5f8fb",
            paper: "#f5f8fb",
        },
        secondary: {
            main: "#fff",
        },
    },
});

const DashboardContainer = ({ children, logoutUser, alerts }) => {
    const mediaTheme = useTheme();
    const matchUpMd = useMediaQuery(mediaTheme.breakpoints.up("md"));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(true);
    const menuOpen = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    React.useEffect(() => {
        setOpen(matchUpMd);
    }, [matchUpMd]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    open={open}
                    color="secondary"
                    variant="outlined"
                    elevation={0}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            edge="start"
                            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: "flex" }}>
                            <IconButton
                                size="large"
                                aria-label="show 4 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={2} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-controls={
                                    menuOpen ? "account-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={menuOpen ? "true" : undefined}
                                onClick={handleClick}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <DashboardMenu
                            open={menuOpen}
                            anchorEl={anchorEl}
                            handleClose={handleClose}
                            logoutUser={logoutUser}
                        />
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: { xs: open ? drawerWidth : 0, md: drawerWidth },
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: {
                                xs: open ? drawerWidth : 0,
                                md: drawerWidth,
                            },
                            boxSizing: "border-box",
                            backgroundColor: blue[800],
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <Avatar
                            variant="square"
                            alt="Well Cost Estimator"
                            src="/images/logo.png"
                            sx={{ width: 60, height: 30 }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="h6"
                            sx={{ color: "#fff" }}
                        >
                            Well Cost Estimator
                        </Typography>
                    </DrawerHeader>
                    <List>
                        {["Project", "Subscription", "Settings"].map(
                            (text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText
                                        primary={text}
                                        sx={{ color: "#ffffff" }}
                                    />
                                </ListItem>
                            )
                        )}
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
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
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {children}
                    </Box>
                    <Copyright />
                </Main>
            </Box>
        </ThemeProvider>
    );
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps, { logoutUser })(DashboardContainer);
