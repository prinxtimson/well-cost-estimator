import React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const MainMenu = ({ open, anchorEl }) => {
    const id = open && Boolean(anchorEl) ? "transition-popper" : undefined;

    return (
        <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            transition
            placement="bottom-start"
            sx={{ width: "100%" }}
        >
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper
                        sx={{
                            width: "100%",
                        }}
                        elevation={0}
                        square
                    >
                        <MenuList>
                            <Divider />
                            <Link to="/login">
                                <MenuItem>
                                    <Typography
                                        variant="div"
                                        component="h6"
                                        fontSize={15}
                                        textAlign="center"
                                    >
                                        Login
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to="/register">
                                <MenuItem>
                                    <CustomButton variant="contained" fullWidth>
                                        Create Account
                                    </CustomButton>
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Paper>
                </Fade>
            )}
        </Popper>
    );
};

export default MainMenu;
