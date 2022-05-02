import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import Container from "./Container";
import CustomButton from "../../components/CustomButton";

const index = () => {
    return (
        <Container>
            <Grid container>
                <Grid item md>
                    <Typography
                        variant="h2"
                        component="h6"
                        color="#fff"
                        fontWeight={900}
                    >
                        Welcome to Well Cost Estimator
                    </Typography>
                    <Box
                        sx={{
                            marginTop: 3,
                            maxWidth: 300,
                        }}
                    >
                        <Link to="/register">
                            <CustomButton
                                variant="contained"
                                fullWidth
                                size="large"
                            >
                                Get Started
                            </CustomButton>
                        </Link>
                    </Box>
                </Grid>
                <Grid item md />
            </Grid>
        </Container>
    );
};

export default index;
