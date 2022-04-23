import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Step2Form = ({ data, handleOnChange }) => {
    return (
        <Box>
            <TextField
                margin="dense"
                required
                fullWidth
                name="surface_casing_depth"
                label="Surface Casing Depth (ft)"
                value={data.name}
                onChange={handleOnChange}
            />
            <TextField
                margin="dense"
                required
                fullWidth
                name="intermmediate_casing_depth"
                label="Intermmediate Casing Depth (ft)"
                value={data.name}
                onChange={handleOnChange}
            />
            <TextField
                margin="dense"
                required
                fullWidth
                name="production_casing_depth"
                label="Production Casing Depth (ft)"
                value={data.name}
                onChange={handleOnChange}
            />
            <TextField
                margin="dense"
                required
                fullWidth
                name="liner_top_depth"
                label="Liner Top Depth (ft)"
                value={data.name}
                onChange={handleOnChange}
            />
            <TextField
                margin="dense"
                required
                fullWidth
                name="liner_bottom_depth"
                label="Liner Bottom Depth (ft)"
                value={data.name}
                onChange={handleOnChange}
            />
            <TextField
                margin="dense"
                required
                fullWidth
                name="total_well_depth"
                label="Total Well Depth (ft)"
                value={data.name}
                onChange={handleOnChange}
            />
        </Box>
    );
};

export default Step2Form;
