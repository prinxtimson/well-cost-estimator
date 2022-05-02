import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import MainContainer from "../../components/MainContainer";

const AboutUs = () => {
    return (
        <MainContainer routeName="About Us" imgUrl="/images/oil_Engr.jpg">
            <Box>
                <Typography component="h2" variant="h5">
                    About Us
                </Typography>
            </Box>
        </MainContainer>
    );
};

export default AboutUs;
