import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ProjectSummary = ({ project }) => {
    // const { project_timeline } = project;
    // const [timeline, setTimeline] = React.useState(0);

    // React.useEffect(() => {
    //     let sub_total = 0;
    //     project_timeline.forEach(
    //         (val) => (sub_total = sub_total + parseInt(val.total || 0))
    //     );
    //     let total = (sub_total * (10 / 100))+sub_total;

    //     setTimeline(total)
    // }, []);

    return (
        <Box
            sx={{
                marginTop: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 5,
                backgroundColor: "#ffffff",
                borderRadius: 1,
            }}
        >
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Typography>Well Name</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>{project.name}</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Typography>Client</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>{project.client}</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Typography>Job Type</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            {project.project_meta
                                .find((val) => val.meta_key === "job_type")
                                .meta_value.replace(/[\"]+/g, "")}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Typography>Rig Type</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            {project.project_meta
                                .find((val) => val.meta_key === "rig_type")
                                .meta_value.replace(/[\"]+/g, "")}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Typography>Location</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            {project.project_meta
                                .find((val) => val.meta_key === "well_location")
                                .meta_value.replace(/[\"]+/g, "")}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Typography>Well Deviation</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            {project.project_meta
                                .find(
                                    (val) => val.meta_key === "well_deviation"
                                )
                                .meta_value.replace(/[\"]+/g, "")}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Typography>Completion Type</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            {project.project_meta
                                .find(
                                    (val) => val.meta_key === "completions_type"
                                )
                                .meta_value.replace(/[\"]+/g, "")}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 3 }}>
                <Box>
                    <Typography variant="h5" component="h5">
                        Operating Time {"&"} Cost
                    </Typography>
                </Box>
                <Grid container>
                    <Grid item xs>
                        <Typography>Operating Time (Days)</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>{project.operating_time}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs>
                        <Typography>Operating Cost ($)</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>${project.well_cost}</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 3 }}>
                <Box>
                    <Typography variant="h5" component="h6">
                        Well Cost Summary
                    </Typography>
                </Box>
                <Box>
                    <Grid container>
                        <Grid item xs>
                            <Typography>
                                Site Survey & Rig Operations
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>$0.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>Drilling Consumables</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>$0.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>Drilling Tangibles</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>$0.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>Drilling Services</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>$0.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>
                                Drilling Formation Evaluation
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>$0.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>Drilling Logistics</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>$0.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>
                                Drilling Personnel and Admin
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>$0.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>Estimated Taxes</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>$0.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>Estimated WHT</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>$0.00</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectSummary;
