import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import MainContainer from "../../components/MainContainer";

const ContactUs = () => {
    const [data, setData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleOnChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <MainContainer routeName="Contact Us" imgUrl="/images/two_engrs.jpg">
            <Box sx={{ mt: 10 }}>
                <Grid container spacing={4}>
                    <Grid item md={6} container spacing={2}>
                        <Grid item>
                            <img
                                src="/images/lady_on_a_call.jpg"
                                alt="Call center agent"
                                loading="lazy"
                                width="100%"
                                style={{ borderRadius: 4 }}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <Box sx={{ padding: 4 }} component={Card}>
                                <Typography
                                    component="p"
                                    variant="h5"
                                    color="#000080"
                                >
                                    Email Us:
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={6}>
                            <Box sx={{ padding: 4 }} component={Card}>
                                <Typography
                                    component="p"
                                    variant="h5"
                                    color="#000080"
                                >
                                    Call Us:
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: 5,
                            }}
                            component={Card}
                        >
                            <Typography component="h6" variant="h5">
                                Need a quick answer?
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{ mt: 2 }}
                            >
                                <TextField
                                    margin="dense"
                                    required
                                    fullWidth
                                    label="Full Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    onChange={handleOnChange}
                                />
                                <TextField
                                    margin="dense"
                                    required
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleOnChange}
                                />
                                <TextField
                                    margin="dense"
                                    required
                                    fullWidth
                                    label="Subject"
                                    name="subject"
                                    autoComplete="subject"
                                    onChange={handleOnChange}
                                />
                                <TextField
                                    margin="dense"
                                    fullWidth
                                    value={data.message}
                                    name="message"
                                    label="Enter Message"
                                    multiline
                                    rows={5}
                                    onChange={handleOnChange}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    sx={{ mb: 0.5, mt: 1 }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </MainContainer>
    );
};

export default ContactUs;
