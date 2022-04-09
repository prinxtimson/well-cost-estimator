import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import AuthContainer from "../../components/AuthContainer";
import CustomButton from "../../components/CustomButton";

import { connect } from "react-redux";
import { createAccount } from "../../actions/auth";

const RegistrationForm = ({ loading, createAccount, isAuthenticated }) => {
    const [data, setData] = React.useState({
        fistname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleOnChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        createAccount(data);
    };

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
                        onChange={handleOnChange}
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="lastname"
                        label="Lastname"
                        name="lastname"
                        autoComplete="lastname"
                        onChange={handleOnChange}
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleOnChange}
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
                        onChange={handleOnChange}
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="password_confirmation"
                        label="Confirm Password"
                        type="password"
                        id="password_confirmation"
                        onChange={handleOnChange}
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
                            <Link
                                to="#"
                                variant="body2"
                                style={{ color: "#155fcc" }}
                            >
                                Terms of Services
                            </Link>{" "}
                            and our{" "}
                            <Link
                                to="#"
                                variant="body2"
                                style={{ color: "#155fcc" }}
                            >
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
                            <Link
                                to="/login"
                                variant="body2"
                                style={{ color: "#155fcc" }}
                            >
                                Login
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </AuthContainer>
    );
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
});

export default connect(mapStateToProps, { createAccount })(RegistrationForm);
