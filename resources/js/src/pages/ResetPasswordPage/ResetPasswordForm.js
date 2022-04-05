import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import AuthContainer from "../../components/AuthContainer";

const ResetPasswordForm = ({ loading }) => {
    const [data, setData] = React.useState({});
    const handleSubmit = () => {};

    return (
        <AuthContainer>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 3,
                    backgroundColor: "#ffffff",
                    borderRadius: 1,
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="password"
                        label="New Password"
                        type="password"
                        id="password"
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="password-confirmation"
                        label="Confirm New Password"
                        type="password"
                        id="password-confirmation"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1 }}
                        size="large"
                        disabled={loading}
                    >
                        Change Password
                    </Button>
                </Box>
            </Box>
        </AuthContainer>
    );
};

export default ResetPasswordForm;
