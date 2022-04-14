import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import PhoneInput from "react-phone-input-2";
import { connect } from "react-redux";

import CustomButton from "../../components/CustomButton";
import { getProfile, editAccount, clearProfile } from "../../actions/profile";

import "react-phone-input-2/lib/material.css";

const ProfilePage = ({
    loading,
    profile,
    getProfile,
    editAccount,
    clearProfile,
}) => {
    const [formRef, setFormRef] = React.useState(null);
    const [data, setData] = React.useState({
        email: "",
        firstname: "",
        lastname: "",
        phone: "",
        city: "",
        region: "",
        country: "",
    });

    const handleOnChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        editAccount(data);
    };

    React.useEffect(() => {
        getProfile();

        return clearProfile;
    }, []);

    React.useEffect(() => {
        setData({
            email: profile?.email || "",
            firstname: profile?.profile?.firstname || "",
            lastname: profile?.profile?.lastname || "",
            phone: profile?.profile?.phone || "",
            city: profile?.profile?.city || "",
            region: profile?.profile?.region || "",
            country: profile?.profile?.country || "",
        });
    }, [profile]);

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
                    <Typography>Your Profile</Typography>
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
                        value={data.firstname}
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
                        value={data.lastname}
                        id="lastname"
                        label="Lastname"
                        name="lastname"
                        autoComplete="lastname"
                        onChange={handleOnChange}
                    />
                    <Box sx={{ mt: 1, mb: 0.5 }}>
                        <PhoneInput
                            country={"ng"}
                            value={data.phone}
                            onChange={(phone) => setData({ ...data, phone })}
                            inputProps={{
                                name: "phone",
                                required: true,
                            }}
                            containerStyle={{
                                width: "100%",
                            }}
                            inputStyle={{
                                width: "100%",
                                paddingBottom: 15,
                                paddingTop: 15,
                            }}
                        />
                    </Box>
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        value={data.city}
                        id="city"
                        label="City"
                        name="city"
                        autoComplete="city"
                        onChange={handleOnChange}
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        value={data.region}
                        id="region"
                        label="State/Region"
                        name="region"
                        autoComplete="region"
                        onChange={handleOnChange}
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        value={data.country}
                        id="country"
                        label="Country"
                        name="country"
                        autoComplete="country"
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
                        Save Changes
                    </CustomButton>
                </Box>
            </Box>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    loading: state.profile.loading,
    profile: state.profile.profile,
});

export default connect(mapStateToProps, {
    getProfile,
    editAccount,
    clearProfile,
})(ProfilePage);
