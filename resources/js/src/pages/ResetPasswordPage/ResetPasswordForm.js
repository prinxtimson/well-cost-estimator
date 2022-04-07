import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import AuthContainer from "../../components/AuthContainer";
import CustomButton from "../../components/CustomButton";

const ResetPasswordForm = ({ loading }) => {
    const [data, setData] = React.useState({});
    const handleSubmit = () => {};

    return (
        <AuthContainer>
            <Box
                sx={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 3,
                    backgroundColor: "#ffffff",
                    borderRadius: 1,
                }}
            >
                <Box sx={{ mb: 2 }}>
                    <Typography>Reset Password</Typography>
                </Box>
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
                    <CustomButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1 }}
                        size="large"
                        disabled={loading}
                    >
                        Change Password
                    </CustomButton>
                </Box>
            </Box>
        </AuthContainer>
    );
};

export default ResetPasswordForm;
