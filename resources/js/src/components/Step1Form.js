import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

const Step1Form = () => {
    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id="rig-type-select-label">Rig Type</InputLabel>
                <Select
                    labelId="rig-type-select-label"
                    id="rig_type"
                    value={data.rig_type}
                    label="Rig Type"
                    onChange={handleOnChange}
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
            <FormControl fullWidth>
                <InputLabel id="location-select-label">Location</InputLabel>
                <Select
                    labelId="location-select-label"
                    id="location"
                    value={data.location}
                    label="Location"
                    onChange={handleOnChange}
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
                value={data.name}
                onChange={handleOnChange}
            />
            <FormControl fullWidth>
                <InputLabel id="well-head-type-select-label">
                    Well Head Type
                </InputLabel>
                <Select
                    labelId="well-head-type-select-label"
                    id="well_head_type_type"
                    value={data.well_head_type}
                    label="Well Head Type"
                    onChange={handleOnChange}
                >
                    {['20 x 13 3/8" x 9 5/8" - 5K WH', "Swamp", "Water"].map(
                        (text) => (
                            <MenuItem value={text} key={text}>
                                {text}
                            </MenuItem>
                        )
                    )}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Step1Form;
