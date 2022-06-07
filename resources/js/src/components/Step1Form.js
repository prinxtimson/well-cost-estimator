import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

const Step1Form = ({ data, handleOnChange }) => {
    return (
        <Box sx={{ maxWidth: 420, width: "100%" }}>
            <TextField
                margin="dense"
                required
                fullWidth
                name="name"
                label="Well Name"
                value={data.name || ""}
                onChange={handleOnChange}
                size="small"
            />
            <TextField
                margin="dense"
                required
                fullWidth
                name="client"
                label="Client"
                value={data.client || ""}
                onChange={handleOnChange}
                size="small"
            />
            <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                <InputLabel id="rig-type-select-label">Job Type</InputLabel>
                <Select
                    labelId="job-type-select-label"
                    name="job_type"
                    value={data.job_type || ""}
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
                    value={data.rig_type || ""}
                    label="Rig Type"
                    onChange={handleOnChange}
                    size="small"
                >
                    {[
                        "Med1 Light Land Rig",
                        "Heavy Land Rig",
                        "Light Land Rig",
                        "Med Light Land Rig",
                        "Heavy Swamp Rig",
                        "Light Swamp Rig",
                        "Jack UP 01 (160K)",
                        "Jack UP 02 (180K)",
                        "Floaters (3000FT - 4000FT)",
                        "Floaters (4000FT - 6000FT)",
                        "Floaters (6000FT+)",
                        "HWU",
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
                    value={data.well_location || ""}
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
            <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                <InputLabel id="well-deviation-select-label">
                    Well Deviation
                </InputLabel>
                <Select
                    labelId="well-deviation-select-label"
                    name="well_deviation"
                    value={data.well_deviation || ""}
                    label="Well Deviation"
                    onChange={handleOnChange}
                    size="small"
                >
                    {[
                        "Vertical",
                        "Deviation < 45 deg",
                        "Deviation > 45 deg",
                        "Horizontal",
                    ].map((text) => (
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
                value={data.rig_move_time || ""}
                onChange={handleOnChange}
                size="small"
            />

            <TextField
                margin="dense"
                required
                fullWidth
                name="production_casing"
                label="Production Casing Depth (ft)"
                value={data.production_casing || ""}
                onChange={handleOnChange}
                size="small"
            />
        </Box>
    );
};

export default Step1Form;
