import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";

import CustomButton from "../../components/CustomButton";
import MainMenu from "../../components/MainMenu";

const pages = [
    { text: "About us", url: "/about-us" },
    { text: "Pricing", url: "/pricing" },
    { text: "Contact us", url: "/contact-us" },
];

const Header = ({ handleToggleNavMenu, open, anchorEl }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Link
                        to="/"
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Avatar
                            variant="square"
                            alt="Well Cost Estimator"
                            src="/images/logo.png"
                            sx={{ width: 80, height: 40, marginX: 1 }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="h5"
                            sx={{ color: "#fff" }}
                        >
                            Well Cost Estimator
                        </Typography>
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {pages.map((page) => (
                                <Link
                                    key={page.text}
                                    //onClick={handleCloseNavMenu}
                                    style={{
                                        my: 2,
                                        color: "#fff",
                                        display: "block",
                                        margin: "0 10px",
                                    }}
                                    to={page.url}
                                >
                                    <Typography
                                        variant="div"
                                        component="h6"
                                        fontSize={15}
                                    >
                                        {page.text}
                                    </Typography>
                                </Link>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Link
                                //onClick={handleCloseNavMenu}
                                style={{
                                    my: 2,
                                    color: "#fff",
                                    display: "block",
                                    margin: "0 10px",
                                }}
                                to="/login"
                            >
                                <Typography
                                    variant="div"
                                    component="h6"
                                    fontSize={15}
                                >
                                    Login
                                </Typography>
                            </Link>

                            <Link to="/register">
                                <CustomButton
                                    variant="contained"
                                    size="small"
                                    sx={{ color: "#fff" }}
                                >
                                    Create Account
                                </CustomButton>
                            </Link>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }} />
                        {open ? (
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleToggleNavMenu}
                                color="inherit"
                            >
                                <CloseIcon sx={{ color: "#fff" }} />
                            </IconButton>
                        ) : (
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleToggleNavMenu}
                                color="inherit"
                            >
                                <MenuIcon sx={{ color: "#fff" }} />
                            </IconButton>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <MainMenu open={open} anchorEl={anchorEl} />
        </Box>
    );
};

export default Header;
