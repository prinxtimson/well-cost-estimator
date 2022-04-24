import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { getProjectByID, clearProject } from "../../actions/project";

const SingleProjectPage = ({
    project,
    loading,
    getProjectByID,
    clearProject,
}) => {
    const [value, setValue] = React.useState(0);
    const { id } = useParams();

    React.useEffect(() => {
        getProjectByID(id);

        return clearProject;
    }, [id]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ width: "100%", bgcolor: "#ffffff" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    //indicatorColor="secondary"
                    //textColor="inherit"
                    //variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Project Info" />
                    <Tab label="Drilling Info" />
                    <Tab label="Item Three" />
                </Tabs>
            </Box>
            <Container maxWidth="lg">
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
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Typography>Well Name</Typography>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Typography>Client</Typography>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Typography>Job Type</Typography>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Typography>Rig Type</Typography>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Typography>Location</Typography>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Typography>Well Deviation</Typography>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Typography>Completion Type</Typography>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Box>
                            <Typography>Operating Time {"&"} Cost</Typography>
                        </Box>
                        <Grid container>
                            <Grid item xs>
                                <Typography>Operating Time (Days)</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography>0</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Typography>Operating Cost (Days)</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography>0.00</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Box>
                            <Typography>Well Cost Summary</Typography>
                        </Box>
                        <Box>
                            <Grid container>
                                <Grid item xs></Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

const mapStateToProps = (state) => ({
    loading: state.project.loading,
    project: state.project.project,
});

export default connect(mapStateToProps, { getProjectByID, clearProject })(
    SingleProjectPage
);
