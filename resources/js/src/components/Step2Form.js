import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import PlusIcon from "@mui/icons-material/AddCircle";

const Step2Form = ({ data, handleOnChange }) => {
    const [arr, setArr] = React.useState([]);
    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");
    return (
        <Box sx={{ maxWidth: 750, width: "100%" }}>
            <Grid container spacing={2}>
                {(data.job_type === "Drilling" ||
                    data.job_type === "Drilling and Completion") && (
                    <>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="well-head-type-select-label">
                                    Well Head Type
                                </InputLabel>
                                <Select
                                    labelId="well-head-type-select-label"
                                    name="well_head_type"
                                    value={data.well_head_type}
                                    label="Well Head Type"
                                    onChange={handleOnChange}
                                    size="small"
                                >
                                    {[
                                        "20 x 13-3/8 x 9-5/8 - 5k WH",
                                        "20 x 13-3/8 x 9-5/8 - 10k WH",
                                        "20 x 13-3/8 x 9-5/8 - 15k WH",
                                        "13-5/8 x 9-5/8 - 5k WH",
                                        "9-5/8 - 5k WH",
                                        "Compact - 5k WH",
                                        "SMS LST (Splitter) Conv - 5k WH",
                                        "SMS LST (Splitter) Smart - 5k WH",
                                    ].map((text) => (
                                        <MenuItem value={text} key={text}>
                                            {text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="none"
                                required
                                fullWidth
                                name="surface_casing_depth"
                                label="Surface Casing Depth (ft)"
                                value={data.surface_casing_depth}
                                onChange={handleOnChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="none"
                                required
                                fullWidth
                                name="intermmediate_casing_depth"
                                label="Intermmediate Casing Depth (ft)"
                                value={data.intermmediate_casing_depth}
                                onChange={handleOnChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="coring-select-label">
                                    Coring Required? (Y/N)
                                </InputLabel>
                                <Select
                                    labelId="coring-select-label"
                                    name="coring_required"
                                    value={data.coring_required}
                                    label="Coring Required"
                                    onChange={handleOnChange}
                                    size="small"
                                >
                                    {["YES", "NO"].map((text) => (
                                        <MenuItem value={text} key={text}>
                                            {text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </>
                )}

                <Grid item xs={12} sm={6}>
                    <TextField
                        margin="none"
                        required
                        fullWidth
                        name="production_casing_depth"
                        label="Production Casing Depth (ft)"
                        value={data.production_casing_depth}
                        onChange={handleOnChange}
                        size="small"
                    />
                </Grid>
                {data.job_type === "Drilling" && (
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="none"
                            required
                            fullWidth
                            name="liner_depth"
                            label="Liner Depth (ft)"
                            value={data.liner_depth}
                            onChange={handleOnChange}
                            size="small"
                        />
                    </Grid>
                )}
                {data.job_type === "Drilling and Completion" && (
                    <>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="none"
                                required
                                fullWidth
                                name="liner_top_depth"
                                label="Liner Top Depth (ft)"
                                value={data.liner_top_depth}
                                onChange={handleOnChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="none"
                                required
                                fullWidth
                                name="liner_bottom_depth"
                                label="Liner Bottom Depth (ft)"
                                value={data.liner_bottom_depth}
                                onChange={handleOnChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="none"
                                required
                                fullWidth
                                name="total_well_depth"
                                label="Total Well Depth (ft)"
                                value={data.total_well_depth}
                                onChange={handleOnChange}
                                size="small"
                            />
                        </Grid>
                    </>
                )}
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="well-deviation-select-label">
                            Well Deviation
                        </InputLabel>
                        <Select
                            labelId="well-deviation-select-label"
                            name="well_deviation"
                            value={data.well_deviation}
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
                </Grid>
                {data.job_type !== "Drilling" && (
                    <>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="completions-type-select-label">
                                    Completions Type
                                </InputLabel>
                                <Select
                                    labelId="completions-type-select-label"
                                    name="completions_type"
                                    value={data.completions_type}
                                    label="Completions Type"
                                    onChange={handleOnChange}
                                    size="small"
                                >
                                    {[
                                        "Single",
                                        "Single Selective",
                                        "Dual",
                                        "Dual Selective",
                                    ].map((text) => (
                                        <MenuItem value={text} key={text}>
                                            {text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="igp-required-select-label">
                                    IGP Required?
                                </InputLabel>
                                <Select
                                    labelId="igp-required-select-label"
                                    name="igp_required"
                                    value={data.igp_required}
                                    label="IGP Required?"
                                    onChange={handleOnChange}
                                    size="small"
                                >
                                    {["YES", "NO"].map((text) => (
                                        <MenuItem value={text} key={text}>
                                            {text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Box
                                sx={{
                                    display:
                                        data.igp_required === "YES"
                                            ? "block"
                                            : "none",
                                    padding: 2,
                                }}
                            >
                                <FormControl fullWidth>
                                    <InputLabel id="type-of-perforating-select-label">
                                        Type of Perforating
                                    </InputLabel>
                                    <Select
                                        labelId="type-of-perforating-select-label"
                                        name="type_of_perforating"
                                        value={data.type_of_perforating}
                                        label="Type of Perforating"
                                        onChange={handleOnChange}
                                        size="small"
                                    >
                                        {["Wireline", "TCP/DST"].map((text) => (
                                            <MenuItem value={text} key={text}>
                                                {text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                {arr.map((val, ind) => (
                                    <Grid container>
                                        <Grid item xs={4}>
                                            Zone {ind} Length, MD
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                margin="dense"
                                                fullWidth
                                                name="from"
                                                label="From"
                                                value={data.from}
                                                onChange={handleOnChange}
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                margin="dense"
                                                fullWidth
                                                name="to"
                                                label="To"
                                                value={data.to}
                                                onChange={handleOnChange}
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <FormControl fullWidth>
                                                <InputLabel id="igp-select-label">
                                                    IGP
                                                </InputLabel>
                                                <Select
                                                    labelId="igp-select-label"
                                                    name="igp"
                                                    value={val.igp}
                                                    label="IGP"
                                                    onChange={handleOnChange}
                                                    size="small"
                                                >
                                                    {["YES", "NO"].map(
                                                        (text) => (
                                                            <MenuItem
                                                                value={text}
                                                                key={text}
                                                            >
                                                                {text}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                ))}

                                <IconButton
                                    color="primary"
                                    aria-label="add"
                                    component="span"
                                >
                                    <PlusIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="well-test-required-select-label">
                                    Well Test Required?
                                </InputLabel>
                                <Select
                                    labelId="well-test-required-select-label"
                                    name="well_test_required"
                                    value={data.well_test_required}
                                    label="Well Test Required?"
                                    onChange={handleOnChange}
                                    size="small"
                                >
                                    {["YES", "NO"].map((text) => (
                                        <MenuItem value={text} key={text}>
                                            {text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Box
                                sx={{
                                    display:
                                        data.well_test_required === "YES"
                                            ? "block"
                                            : "none",
                                    padding: 2,
                                }}
                            >
                                {arr.map((val, ind) => (
                                    <Grid container>
                                        <Grid item xs={4}>
                                            Zone {ind} Length, MD
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                margin="dense"
                                                fullWidth
                                                name="from"
                                                label="From"
                                                value={val.from}
                                                onChange={handleOnChange}
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                margin="dense"
                                                fullWidth
                                                name="to"
                                                label="To"
                                                value={val.to}
                                                onChange={handleOnChange}
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <FormControl fullWidth>
                                                <InputLabel id="tcp-dst-select-label">
                                                    TCP/DST
                                                </InputLabel>
                                                <Select
                                                    labelId="tcp-dst-select-label"
                                                    name="tcp_dst"
                                                    value={val.tcp_dst}
                                                    label="TCP/DST"
                                                    onChange={handleOnChange}
                                                    size="small"
                                                >
                                                    {["YES", "NO"].map(
                                                        (text) => (
                                                            <MenuItem
                                                                value={text}
                                                                key={text}
                                                            >
                                                                {text}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                ))}
                                <IconButton
                                    color="primary"
                                    aria-label="add"
                                    component="span"
                                >
                                    <PlusIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="cement-squeeze-required-select-label">
                                    Cement Squeeze Required?
                                </InputLabel>
                                <Select
                                    labelId="cement-squeeze-required-select-label"
                                    name="cement_squeeze_required"
                                    value={data.cement_squeeze_required}
                                    label="Cement Squeeze Required?"
                                    onChange={handleOnChange}
                                    size="small"
                                >
                                    {["YES", "NO"].map((text) => (
                                        <MenuItem value={text} key={text}>
                                            {text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="ct-nitrogen-lift-select-label">
                                    CT Nitrogen Lift?
                                </InputLabel>
                                <Select
                                    labelId="ct-nitrogen-lift-select-label"
                                    name="ct_nitrogen_lift"
                                    value={data.ct_nitrogen_lift}
                                    label="CT Nitrogen Lift?"
                                    onChange={handleOnChange}
                                    size="small"
                                >
                                    {["YES", "NO"].map((text) => (
                                        <MenuItem value={text} key={text}>
                                            {text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </>
                )}
                {data.job_type === "Drilling and Completion" && (
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="xmas-tree-type-select-label">
                                Xmas Tree Type
                            </InputLabel>
                            <Select
                                labelId="xmas-tree-type-select-label"
                                name="xmas_tree_type"
                                value={data.xmas_tree_type}
                                label="Xmas Tree Type"
                                onChange={handleOnChange}
                                size="small"
                            >
                                {[
                                    '4-1/2" Single  X 5k Tree',
                                    '4-1/2" Single  X 10k Tree',
                                    '4-1/2" Single  X 15k Tree',
                                    '3-1/2" Single X 5k Tree',
                                    '3-1/2" Dual X 5k Tree',
                                    '2-3/8" Dual X 5k Tree',
                                    "Compact 5k Tree",
                                    "SMS LST (Splitter) Conv - 5k Tree",
                                    "SMS LST (Splitter) Smart - 5k Tree",
                                ].map((text) => (
                                    <MenuItem value={text} key={text}>
                                        {text}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                )}
                {(data.job_type !== "Drilling" ||
                    data.job_type !== "Drilling and Completion") && (
                    <>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="liner-casing-in-well-select-label">
                                    Liner Casing in Well?
                                </InputLabel>
                                <Select
                                    labelId="liner-casing-in-well-select-label"
                                    name="liner_casing_in_well"
                                    value={data.liner_casing_in_well}
                                    label="Liner Casing in Well?"
                                    onChange={handleOnChange}
                                    size="small"
                                >
                                    {["YES", "NO"].map((text) => (
                                        <MenuItem value={text} key={text}>
                                            {text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="cement-plug-inside-well-select-label">
                                    Cement Plug Inside Well?
                                </InputLabel>
                                <Select
                                    labelId="cement-plug-inside-well-select-label"
                                    name="cement_plug_inside_well"
                                    value={data.cement_plug_inside_well}
                                    label="Cement Plug Inside Well?"
                                    onChange={handleOnChange}
                                    size="small"
                                >
                                    {["YES", "NO"].map((text) => (
                                        <MenuItem value={text} key={text}>
                                            {text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </>
                )}
                {(data.job_type === "Workover" ||
                    data.job_type === "Rigless Workover") && (
                    <>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="packer-milling-select-label">
                                    Packer Milling Required?
                                </InputLabel>
                                <Select
                                    labelId="packer-milling-select-label"
                                    name="packer_milling_required"
                                    value={data.packer_milling_required}
                                    label="Packer Milling Required?"
                                    onChange={handleOnChange}
                                    size="small"
                                >
                                    {["YES", "NO"].map((text) => (
                                        <MenuItem value={text} key={text}>
                                            {text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="retrieve-existing-igp-select-label">
                                    Retrieve Existing IGP?
                                </InputLabel>
                                <Select
                                    labelId="retrieve-existing-igp-select-label"
                                    name="retrieve_existing_igp"
                                    value={data.retrieve_existing_igp}
                                    label="Retrieve Existing IGP?"
                                    onChange={handleOnChange}
                                    size="small"
                                >
                                    {["YES", "NO"].map((text) => (
                                        <MenuItem value={text} key={text}>
                                            {text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </>
                )}
            </Grid>
        </Box>
    );
};

export default Step2Form;
