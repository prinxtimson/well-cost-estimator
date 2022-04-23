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
                <InputLabel id="completions-type-select-label">
                    Completions Type
                </InputLabel>
                <Select
                    labelId="completions-type-select-label"
                    id="completions_type"
                    value={data.location}
                    label="Completions Type"
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
                <InputLabel id="xmas-tree-type-select-label">
                    Xmas Tree Type
                </InputLabel>
                <Select
                    labelId="xmas-tree-type-select-label"
                    id="xmas_tree_type"
                    value={data.location}
                    label="Xmas Tree Type"
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
                <InputLabel id="igp-required-select-label">
                    IGP Required?
                </InputLabel>
                <Select
                    labelId="igp-required-select-label"
                    id="igp_required"
                    value={data.location}
                    label="IGP Required?"
                    onChange={handleOnChange}
                >
                    {["Yes", "No"].map((text) => (
                        <MenuItem value={text} key={text}>
                            {text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="well-test-required-select-label">
                    Well Test Required?
                </InputLabel>
                <Select
                    labelId="well-test-required-select-label"
                    id="well_test_required"
                    value={data.location}
                    label="Well Test Required?"
                    onChange={handleOnChange}
                >
                    {["Yes", "No"].map((text) => (
                        <MenuItem value={text} key={text}>
                            {text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="cement-squeeze-required-select-label">
                    Cement Squeeze Required?
                </InputLabel>
                <Select
                    labelId="cement-squeeze-required-select-label"
                    id="cement_squeeze_required"
                    value={data.location}
                    label="Cement Squeeze Required?"
                    onChange={handleOnChange}
                >
                    {["Yes", "No"].map((text) => (
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
            <FormControl fullWidth>
                <InputLabel id="ct-nitrogen-lift-select-label">
                    CT Nitrogen Lift?
                </InputLabel>
                <Select
                    labelId="ct-nitrogen-lift-select-label"
                    id="ct_nitrogen_lift"
                    value={data.location}
                    label="CT Nitrogen Lift?"
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
