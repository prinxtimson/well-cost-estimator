import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import AuthContainer from "../../components/AuthContainer";
import CustomButton from "../../components/CustomButton";

const ForgotPasswordForm = ({ loading }) => {
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
                    <Typography>Request Reset Password</Typography>
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
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <CustomButton
                        type="submit"
                        fullWidth
                        size="large"
                        variant="contained"
                        sx={{ mt: 1 }}
                        disabled={loading}
                    >
                        Request Reset
                    </CustomButton>
                    <Box
                        sx={{
                            marginTop: 4,
                        }}
                    >
                        <Typography textAlign="center">
                            Remember password?{" "}
                            <Link to="/login" variant="body2">
                                Sign in
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </AuthContainer>
    );
};

export default ForgotPasswordForm;
