import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSearchParams, useParams } from "react-router-dom";

import AuthContainer from "../../components/AuthContainer";
import CustomButton from "../../components/CustomButton";

import { connect } from "react-redux";
import { resetPassword } from "../../actions/auth";

const ResetPasswordForm = ({ loading, resetPassword }) => {
    const { token } = useParams();
    const [searchParams] = useSearchParams();
    const [data, setData] = React.useState({
        email: searchParams.get("email"),
        token,
        password: "",
        password_confirmation: "",
    });

    const handleOnChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPassword(data);
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
                        onChange={handleOnChange}
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="password_confirmation"
                        label="Confirm New Password"
                        type="password"
                        id="password_confirmation"
                        onChange={handleOnChange}
                    />
                    <CustomButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1 }}
                        size="large"
                        disabled={loading}
                    >
                        Reset Password
                    </CustomButton>
                </Box>
            </Box>
        </AuthContainer>
    );
};

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
});

export default connect(mapStateToProps, { resetPassword })(ResetPasswordForm);
