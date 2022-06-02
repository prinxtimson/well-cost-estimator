import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

const Step1Form = ({ data, handleOnChange }) => {
    return (
        <Box sx={{ maxWidth: 380, width: "100%" }}>
            <TextField
                margin="dense"
                required
                fullWidth
                name="name"
                label="Well Name"
                value={data.name}
                onChange={handleOnChange}
                size="small"
            />
            <TextField
                margin="dense"
                required
                fullWidth
                name="client"
                label="Client"
                value={data.client}
                onChange={handleOnChange}
                size="small"
            />
            <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                <InputLabel id="rig-type-select-label">Job Type</InputLabel>
                <Select
                    labelId="job-type-select-label"
                    name="job_type"
                    value={data.job_type}
                    label="Job Type"
                    onChange={handleOnChange}
                    size="small"
                >
                    {[
                        "Drilling",
                        "Drilling and Completion",
                        "Initial Completion",
                        "Workover",
                        "Rigless Workover",
                    ].map((text) => (
                        <MenuItem value={text} key={text}>
                            {text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                <InputLabel id="rig-type-select-label">Rig Type</InputLabel>
                <Select
                    labelId="rig-type-select-label"
                    name="rig_type"
                    value={data.rig_type}
                    label="Rig Type"
                    onChange={handleOnChange}
                    size="small"
                >
                    {[
                        "Heavy Land Rig",
                        "Light Land Rig",
                        "Medium Light Land Rig",
                        "Heavy Swamp Rig",
                        "Light Swamp Rig",
                    ].map((text) => (
                        <MenuItem value={text} key={text}>
                            {text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                <InputLabel id="location-select-label">
                    Well Location
                </InputLabel>
                <Select
                    labelId="location-select-label"
                    name="well_location"
                    value={data.well_location}
                    label="Well Location"
                    onChange={handleOnChange}
                    size="small"
                >
                    {["Land", "Swamp", "Water"].map((text) => (
                        <MenuItem value={text} key={text}>
                            {text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                margin="dense"
                required
                fullWidth
                name="rig_move_time"
                label="Rig Move Time"
                value={data.rig_move_time}
                onChange={handleOnChange}
                size="small"
            />
        </Box>
    );
};

export default Step1Form;
