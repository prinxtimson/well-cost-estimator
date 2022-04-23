import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { connect } from "react-redux";
import { paySubscription } from "../../actions/subscription";

import CustomButton from "../../components/CustomButton";

const BillingPlansPage = ({ paySubscription }) => {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 3,
                    backgroundColor: "#ffffff",
                    borderRadius: 1,
                }}
            >
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" noWrap component="p">
                        Billing Plans
                    </Typography>
                </Box>
                <Box>
                    <Box sx={{ mt: 2, mb: 2 }}>
                        <Typography>Basic Plan</Typography>
                        <Grid container>
                            <Grid item xs>
                                <Typography>Details about plan</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography>N5,000 per Month</Typography>
                            </Grid>
                            <Grid item xs>
                                <CustomButton
                                    onClick={() =>
                                        paySubscription({
                                            plan_name: "Basic",
                                            plan_id: "PLN_ly1rp5asgslyuzp",
                                        })
                                    }
                                    sx={{ color: "#fff" }}
                                >
                                    Select
                                </CustomButton>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />
                    <Box sx={{ mt: 2, mb: 2 }}>
                        <Typography>Essential Plan</Typography>
                        <Grid container>
                            <Grid item xs>
                                <Typography>Details about plan</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography>N10,000 per Month</Typography>
                            </Grid>
                            <Grid item xs>
                                <CustomButton sx={{ color: "#fff" }}>
                                    Select
                                </CustomButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { paySubscription })(BillingPlansPage);
