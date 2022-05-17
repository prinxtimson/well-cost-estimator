import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import AuthContainer from "../../components/AuthContainer";
import CustomButton from "../../components/CustomButton";

import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";

const LoginForm = ({ loading, loginUser }) => {
    const [data, setData] = React.useState({
        email: "",
        password: "",
    });

    const handleOnChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        const { email, password } = data;
        e.preventDefault();
        loginUser({ email: email.trim(), password });
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
                    <Typography>Account Login</Typography>
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
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <CustomButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{ mb: 0.5 }}
                        disabled={loading}
                    >
                        Login
                    </CustomButton>
                    <Grid container>
                        <Grid item xs>
                            <Link
                                to="/forgot-password"
                                variant="body2"
                                style={{ color: "#155fcc" }}
                            >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item></Grid>
                    </Grid>
                    <Box
                        sx={{
                            marginTop: 4,
                        }}
                    >
                        <Typography textAlign="center">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                variant="body2"
                                style={{ color: "#155fcc" }}
                            >
                                Sign up
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </AuthContainer>
    );
};

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
});

export default connect(mapStateToProps, { loginUser })(LoginForm);
