import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Step3Form from "./Step3Form";

const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
];

const DrillingInfoForm = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [data, setData] = React.useState({
        name: "",
        description: "",
    });

    const handleOnChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
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
            <Box sx={{ mb: 2 }}>
                <Typography>Drilling Information</Typography>
            </Box>
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
                        ) : activeStep === 1 ? (
                            <Step2Form
                                data={data}
                                handleOnChange={handleOnChange}
                            />
                        ) : (
                            <Step3Form
                                data={data}
                                handleOnChange={handleOnChange}
                            />
                        )}
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1
                                ? "Finish"
                                : "Next"}
                        </Button>
                    </Box>
                </React.Fragment>
            </Box>
        </Box>
    );
};

export default DrillingInfoForm;
