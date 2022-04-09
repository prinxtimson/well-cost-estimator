import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import CustomButton from "../../components/CustomButton";

import { connect } from "react-redux";
import { changePassword } from "../../actions/auth";

const ChangePasswordPage = ({ loading, changePassword }) => {
    const [data, setData] = React.useState({
        current_password: "",
        password: "",
        password_confirmation: "",
    });
    const [formRef, setFormRef] = React.useState(null);

    const handleOnChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        changePassword(data, handleOnSuccessful);
    };

    const handleOnSuccessful = () => {
        formRef?.reset();
    };

    return (
        <Container maxWidth="sm">
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
                    <Typography>Change Password</Typography>
                </Box>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                    ref={(ref) => setFormRef(ref)}
                >
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="current_password"
                        label="Current Password"
                        type="password"
                        id="current_password"
                        autoFocus
                        onChange={handleOnChange}
                    />
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
                        size="large"
                        sx={{ mb: 0.5, mt: 1 }}
                        disabled={loading}
                    >
                        Change Password
                    </CustomButton>
                </Box>
            </Box>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
});

export default connect(mapStateToProps, { changePassword })(ChangePasswordPage);
