import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const DashboardMenu = ({ anchorEl, open, handleClose, logoutUser }) => {
    return (
        <React.Fragment>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "#fff",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                        backgroundColor: "#fff",
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <Link to="settings/profile">
                    <MenuItem>
                        <Avatar /> Profile
                    </MenuItem>
                </Link>
                <Link to="settings/change-password">
                    <MenuItem>
                        <ListItemIcon>
                            <LockIcon fontSize="small" />
                        </ListItemIcon>
                        Change Password
                    </MenuItem>
                </Link>
                <Divider />
                <MenuItem onClick={logoutUser}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default DashboardMenu;
