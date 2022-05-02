import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Chip from "@mui/material/Chip";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { connect } from "react-redux";

import { getPaymentMethods } from "../../actions/subscription";

const PaymentMethods = ({ loading, cards, getPaymentMethods }) => {
    React.useEffect(() => {
        getPaymentMethods();
    }, []);

    console.log(cards);
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    marginTop: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 3,
                    backgroundColor: "#ffffff",
                    borderRadius: 1,
                }}
            >
                <Box sx={{ mb: 2 }}>
                    <Typography>Payment Methods</Typography>
                </Box>
                <Box>
                    <List
                        sx={{
                            width: "100%",
                        }}
                    >
                        {cards.map((card, index) => (
                            <div key={index}>
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar></ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Grid
                                                container
                                                //justifyContent="space-around"
                                                alignItems="center"
                                            >
                                                <Grid item xs>
                                                    <Typography
                                                        variant="h6"
                                                        noWrap
                                                        component="p"
                                                    >{`${card.brand
                                                        .charAt(0)
                                                        .toUpperCase()}${card.brand.slice(
                                                        1
                                                    )}Card ...${
                                                        card.last4
                                                    }`}</Typography>
                                                </Grid>
                                                <Grid item xs>
                                                    {card.reusable ? (
                                                        <Chip
                                                            label="Active"
                                                            color="success"
                                                            size="small"
                                                        />
                                                    ) : (
                                                        <Chip
                                                            label="Inactive"
                                                            color="error"
                                                            size="small"
                                                        />
                                                    )}
                                                </Grid>
                                            </Grid>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                    </List>
                </Box>
            </Box>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    cards: state.subscription.cards,
    loading: state.subscription.loading,
});

export default connect(mapStateToProps, { getPaymentMethods })(PaymentMethods);
