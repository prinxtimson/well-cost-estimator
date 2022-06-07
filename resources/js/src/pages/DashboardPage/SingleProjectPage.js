import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { getProjectByID, clearProject } from "../../actions/project";
import ProjectSummary from "../../components/ProjectSummary";
import ProjectTimeline from "../../components/ProjectTimeline";
import ProjectCost from "../../components/ProjectCost";

const AntTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
        backgroundColor: "#1890ff",
    },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: "none",
        minWidth: 0,
        [theme.breakpoints.up("sm")]: {
            minWidth: 0,
        },
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(1),
        color: "rgba(0, 0, 0, 0.85)",
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        "&:hover": {
            color: "#40a9ff",
            opacity: 1,
        },
        "&.Mui-selected": {
            color: "#1890ff",
            fontWeight: theme.typography.fontWeightMedium,
        },
        "&.Mui-focusVisible": {
            backgroundColor: "#d1eaff",
        },
    })
);

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
};

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

    if (loading || !project) {
        return <Typography>Loading.....</Typography>;
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ width: "100%", bgcolor: "#ffffff" }}>
                <AntTabs
                    value={value}
                    onChange={handleChange}
                    //indicatorColor="secondary"
                    //textColor="inherit"
                    //variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <AntTab label="Project Summary" {...a11yProps(0)} />
                    <AntTab label="Operating Time" {...a11yProps(1)} />
                    <AntTab label="Project Cost" {...a11yProps(2)} />
                </AntTabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ProjectSummary project={project} />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <ProjectTimeline project={project} />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <ProjectCost project={project} />
            </TabPanel>
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
