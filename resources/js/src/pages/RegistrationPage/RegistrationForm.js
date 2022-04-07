import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import AuthContainer from "../../components/AuthContainer";
import CustomButton from "../../components/CustomButton";

const RegistrationForm = ({ loading }) => {
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
                    <Typography>Create Account</Typography>
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
                        id="firstname"
                        label="Firstname"
                        name="firstname"
                        autoComplete="firstname"
                        autoFocus
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="lastname"
                        label="Lastname"
                        name="lastname"
                        autoComplete="lastname"
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="password-confirmation"
                        label="Confirm Password"
                        type="password"
                        id="password-confirmation"
                        autoComplete="current-password"
                    />
                    <CustomButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mb: 0.5, mt: 1 }}
                        size="large"
                        disabled={loading}
                    >
                        Create Account
                    </CustomButton>
                    <Box>
                        <Typography>
                            By clicking the “Create Account” button, you agree
                            to our{" "}
                            <Link to="/terms-and-condtions" variant="body2">
                                Terms of Services
                            </Link>{" "}
                            and our{" "}
                            <Link to="/terms-and-condtions" variant="body2">
                                Privacy Policies
                            </Link>
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            marginTop: 4,
                        }}
                    >
                        <Typography textAlign="center">
                            Already have an account?{" "}
                            <Link to="/login" variant="body2">
                                Login
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </AuthContainer>
    );
};

export default RegistrationForm;
