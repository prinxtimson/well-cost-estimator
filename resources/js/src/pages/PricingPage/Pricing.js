import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

import MainContainer from "../../components/MainContainer";

const Pricing = () => {
    return (
        <MainContainer routeName="Pricing" imgUrl="/images/engr_working.jpg">
            <Box sx={{ padding: 5, mt: 5 }}>
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === "Enterprise" ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: "center" }}
                                    subheaderTypographyProps={{
                                        align: "center",
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === "light"
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent sx={{ padding: 2 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "baseline",
                                            mb: 2,
                                        }}
                                    >
                                        <Typography
                                            component="h2"
                                            variant="h3"
                                            color="text.primary"
                                        >
                                            N{tier.price}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="text.secondary"
                                        >
                                            /mo
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions sx={{ mb: 2 }}>
                                    <Button
                                        fullWidth
                                        variant={tier.buttonVariant}
                                    >
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </MainContainer>
    );
};

export default Pricing;

const tiers = [
    {
        title: "Free",
        price: "0",
        description: [
            "Lorem ipsum dolor sit",
            "Nulla sollicitudin felis",
            "Curabitur euismod nisi",
            "Sed sed ultrices felis",
        ],
        buttonText: "Sign up for free",
        buttonVariant: "outlined",
    },
    {
        title: "Pro",
        subheader: "Most popular",
        price: "15",
        description: [
            "Lorem ipsum dolor sit",
            "elit in mattis dictum",
            "Pellentesque mi odio",
            "elit in mattis dictum",
        ],
        buttonText: "Get started",
        buttonVariant: "contained",
    },
    {
        title: "Enterprise",
        price: "30",
        description: [
            "Donec sollicitudin ante",
            "Lorem ipsum dolor",
            "Curabitur euismod nisi",
            "Nunc vulputate",
        ],
        buttonText: "Get Started",
        buttonVariant: "outlined",
    },
];
