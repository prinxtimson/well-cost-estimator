import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ProjectSummary = ({ project }) => {
    const { project_cost } = project;
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
                        <Typography>
                            {Math.round(project.operating_time)}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs>
                        <Typography>Operating Cost ($)</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            $
                            {parseFloat(project.well_cost)
                                .toFixed(2)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </Typography>
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
                            <Typography>
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Site Survey & Rig Operations"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>Drilling Consumables</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Drilling Consumables"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>Drilling Tangibles</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Drilling Tangibles"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>Drilling Services</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Drilling Services"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>
                                Drilling Formation Evaluation
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Drilling Formation Evaluation"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>Drilling Logistics</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Drilling Logistics"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>
                                Drilling Personnel and Admin
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Drilling Personnel and Admin"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>Estimated Taxes</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                $
                                {(
                                    project_cost.reduce(
                                        (total, val) =>
                                            total + parseFloat(val.total),

                                        0
                                    ) * 0.05
                                )
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Typography>Estimated WHT</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                $
                                {(
                                    parseFloat(
                                        project_cost.find(
                                            (val) =>
                                                val.name === "Communications"
                                        ).total
                                    ) *
                                        0.05 +
                                    0.1 *
                                        (parseFloat(
                                            project_cost.find(
                                                (val) =>
                                                    val.name ===
                                                    "Helicopter Services"
                                            ).total
                                        ) +
                                            parseFloat(
                                                project_cost.find(
                                                    (val) =>
                                                        val.name ===
                                                        "Flight Charges"
                                                ).total +
                                                    project_cost.find(
                                                        (val) =>
                                                            val.name ===
                                                            "Tickets"
                                                    ).total
                                            ))
                                )
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectSummary;
