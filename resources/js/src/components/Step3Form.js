import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Step3Form = ({ data, handleOnChange }) => {
    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id="well-deviation-select-label">
                    Well Deviation
                </InputLabel>
                <Select
                    labelId="well-deviation-select-label"
                    id="well_deviation"
                    value={data.location}
                    label="Well Deviation"
                    onChange={handleOnChange}
                >
                    {["Land", "Swamp", "Water"].map((text) => (
                        <MenuItem value={text} key={text}>
                            {text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="coring-required-select-label">
                    Coring Required?
                </InputLabel>
                <Select
                    labelId="coring-required-select-label"
                    id="coring_required"
                    value={data.location}
                    label="Coring Required?"
                    onChange={handleOnChange}
                >
                    {["Yes", "No"].map((text) => (
                        <MenuItem value={text} key={text}>
                            {text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Step3Form;
