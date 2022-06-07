import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Step1Form from "../../components/Step1Form";
import Step2Form from "../../components/Step2Form";
import { connect } from "react-redux";

import {
    createProject,
    getAllProjects,
    clearProject,
} from "../../actions/project";
import { useNavigate } from "react-router-dom";
import { calcTimeline } from "../../utils/timeline";

const steps = ["Step 1", "Step 2"];

const AddProjectPage = ({
    loading,
    createProject,
    getAllProjects,
    clearProject,
}) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [data, setData] = React.useState({
        name: "",
        description: "description",
    });
    const navigate = useNavigate();

    React.useEffect(() => {
        getAllProjects();

        return clearProject;
    }, []);

    const handleOnChange = (e) => {
        if (
            ["length_of_core_section", "no_of_core_runs"].includes(
                e.target.name
            )
        ) {
            setData({
                ...data,
                coring_info: {
                    ...data.coring_info,
                    [e.target.name]: e.target.value,
                },
            });
        } else if (e.target.name === "coring_required") {
            if (e.target.value === "YES") {
                setData({
                    ...data,
                    [e.target.name]: e.target.value,
                    coring_info: {},
                });
            } else
                setData({
                    ...data,
                    [e.target.name]: e.target.value,
                    coring_info: null,
                });
        } else if (e.target.name === "completions_type") {
            setData({
                ...data,
                [e.target.name]: e.target.value,
                completions_type_info: {},
            });
        } else if (
            [
                "ct_xmas_tree_type",
                "turbing_size",
                "turbing_length",
                "turbing_size_ls",
                "turbing_length_ls",
                "turbing_size_ss",
                "turbing_length_ss",
            ].includes(e.target.name)
        ) {
            setData({
                ...data,
                completions_type_info: {
                    ...data.completions_type_info,
                    [e.target.name]: e.target.value,
                },
            });
        } else if (e.target.name === "igp_required") {
            if (e.target.value === "YES") {
                setData({
                    ...data,
                    [e.target.name]: e.target.value,
                    igp_info: {
                        type_of_perforating: "",
                        zones: [{}, {}, {}],
                    },
                });
            } else
                setData({
                    ...data,
                    [e.target.name]: e.target.value,
                    igp_info: null,
                });
        } else if (e.target.name === "type_of_perforating") {
            setData({
                ...data,
                igp_info: { ...data.igp_info, [e.target.name]: e.target.value },
            });
        } else if (e.target.name === "well_test_required") {
            if (e.target.value === "YES") {
                setData({
                    ...data,
                    [e.target.name]: e.target.value,
                    well_test_info: [{}, {}, {}],
                });
            } else
                setData({
                    ...data,
                    [e.target.name]: e.target.value,
                    well_test_info: null,
                });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const handleIgpInfoChange = (e, index) => {
        let igpInfo = data.igp_info.zones;
        igpInfo[index][e.target.name] = e.target.value;
        setData({ ...data, igp_info: { ...data.igp_info, zones: igpInfo } });
    };

    const handleWellTestInfoChange = (e, index) => {
        let well_test_info = data.well_test_info;
        well_test_info[index][e.target.name] = e.target.value;
        setData({ ...data, well_test_info });
    };

    // const add = (param) => {
    //     if (param === "igp") {
    //         setData({
    //             ...data,
    //             igp_info: {
    //                 ...data.igp_info,
    //                 zones: [
    //                     ...data.igp_info.zones,
    //                     { from: "", to: "", igp: "" },
    //                 ],
    //             },
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             well_test_info: [
    //                 ...data.well_test_info,
    //                 { from: "", to: "", tcp_dst: "" },
    //             ],
    //         });
    //     }
    // };

    // const remove = (param, index) => {
    //     if (param === "igp") {
    //         let igp_arr = data.igp_info.zones;
    //         igp_arr.splice(index, 1);
    //         setData({
    //             ...data,
    //             igp_info: { ...data.igp_info, zones: [...igp_arr] },
    //         });
    //     } else {
    //         let well_test_arr = data.well_test_info;
    //         well_test_arr.splice(index, 1);
    //         setData({ ...data, well_test_info: [...well_test_arr] });
    //     }
    // };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const isStep1Complete = () => {
        const {
            name,
            client,
            job_type,
            rig_type,
            well_location,
            rig_move_time,
        } = data;
        const result =
            name &&
            client &&
            job_type &&
            rig_type &&
            well_location &&
            rig_move_time;

        return result;
    };

    const handleSubmit = () => {
        const timeline = calcTimeline(data);
        createProject({ ...data, timeline }, handleOnSuccessfull);
    };

    const handleOnSuccessfull = (id) => {
        setData({ name: "", description: "" });
        navigate(`/dashboard/project/${id}`);
    };

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 3,
                    backgroundColor: "#ffffff",
                    borderRadius: 1,
                }}
            >
                <Box>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        <Box sx={{ mt: 2, mb: 1 }}>
                            {activeStep === 0 ? (
                                <Step1Form
                                    data={data}
                                    handleOnChange={handleOnChange}
                                />
                            ) : (
                                <Step2Form
                                    data={data}
                                    handleOnChange={handleOnChange}
                                    // add={add}
                                    // remove={remove}
                                    handleIgpInfoChange={handleIgpInfoChange}
                                    handleWellTestInfoChange={
                                        handleWellTestInfoChange
                                    }
                                />
                            )}
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
                            {activeStep === steps.length - 1 ? (
                                <Button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                >
                                    Submit
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleNext}
                                    disabled={!isStep1Complete()}
                                >
                                    Next
                                </Button>
                            )}
                        </Box>
                    </React.Fragment>
                </Box>
            </Box>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    loading: state.project.loading,
});

export default connect(mapStateToProps, {
    createProject,
    getAllProjects,
    clearProject,
})(AddProjectPage);
