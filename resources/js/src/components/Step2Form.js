import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

const Step2Form = ({
    data,
    handleOnChange,
    handleIgpInfoChange,
    handleWellTestInfoChange,
}) => {
    return (
        <Box sx={{ maxWidth: 420, width: "100%" }}>
            {(data.job_type === "Drilling" ||
                data.job_type === "Drilling and Completion") && (
                <>
                    <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                        <InputLabel id="well-head-type-select-label">
                            Well Head Type
                        </InputLabel>
                        <Select
                            labelId="well-head-type-select-label"
                            name="well_head_type"
                            value={data.well_head_type || ""}
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
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="surface_casing"
                        label="Surface Casing Depth (ft)"
                        value={data.surface_casing || ""}
                        onChange={handleOnChange}
                        size="small"
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="intermmediate_casing"
                        label="Intermmediate Casing Depth (ft)"
                        value={data.intermmediate_casing || ""}
                        onChange={handleOnChange}
                        size="small"
                    />
                    <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                        <InputLabel id="coring-select-label">
                            Coring Required? (Y/N)
                        </InputLabel>
                        <Select
                            labelId="coring-select-label"
                            name="coring_required"
                            value={data.coring_required || ""}
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
                    <Box
                        sx={{
                            display:
                                data.coring_required === "YES"
                                    ? "block"
                                    : "none",
                            padding: 1,
                        }}
                    >
                        <TextField
                            margin="dense"
                            required
                            fullWidth
                            name="length_of_core_section"
                            label="Length of Core Section (ft)"
                            value={
                                data.coring_info?.length_of_core_section || ""
                            }
                            onChange={handleOnChange}
                            size="small"
                        />
                        <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                            <InputLabel id="no-of-core-runs-select-label">
                                No of Core Runs
                            </InputLabel>
                            <Select
                                labelId="no-of-core-runs-select-label"
                                name="no_of_core_runs"
                                value={data.coring_info?.no_of_core_runs || ""}
                                label="No of Core Runs"
                                onChange={handleOnChange}
                                size="small"
                            >
                                {[1, 2, 3, 4].map((text) => (
                                    <MenuItem value={text} key={text}>
                                        {text}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </>
            )}
            {data.job_type === "Drilling" && (
                <TextField
                    margin="dense"
                    required
                    fullWidth
                    name="liner_depth"
                    label="Liner Depth (ft)"
                    value={data.liner_depth || ""}
                    onChange={handleOnChange}
                    size="small"
                />
            )}
            {data.job_type === "Drilling and Completion" && (
                <>
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="liner_top_depth"
                        label="Liner Top Depth (ft)"
                        value={data.liner_top_depth || ""}
                        onChange={handleOnChange}
                        size="small"
                    />

                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="liner_bottom_depth"
                        label="Liner Bottom Depth (ft)"
                        value={data.liner_bottom_depth || ""}
                        onChange={handleOnChange}
                        size="small"
                    />

                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="total_well"
                        label="Total Well Depth (ft)"
                        value={data.total_well || ""}
                        onChange={handleOnChange}
                        size="small"
                    />
                </>
            )}
            {data.job_type !== "Drilling" && (
                <>
                    <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                        <InputLabel id="completions-type-select-label">
                            Completions Type
                        </InputLabel>
                        <Select
                            labelId="completions-type-select-label"
                            name="completions_type"
                            value={data.completions_type || ""}
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
                    <Box
                        sx={{
                            display: data.completions_type ? "block" : "none",
                            padding: 1,
                        }}
                    >
                        <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                            <InputLabel id="xmas-tree-type-select-label">
                                Xmas Tree Type
                            </InputLabel>
                            <Select
                                labelId="xmas-tree-type-select-label"
                                name="ct_xmas_tree_type"
                                value={
                                    data.completions_type_info
                                        ?.ct_xmas_tree_type || ""
                                }
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
                        {["Single", "Single Selective"].includes(
                            data.completions_type
                        ) ? (
                            <Box>
                                <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                                    <InputLabel id="turbing-size-select-label">
                                        Turbing Size
                                    </InputLabel>
                                    <Select
                                        labelId="turbing-size-select-label"
                                        name="turbing_size"
                                        value={
                                            data.completions_type_info
                                                ?.turbing_size || ""
                                        }
                                        label="Turbing Size"
                                        onChange={handleOnChange}
                                        size="small"
                                    >
                                        {[
                                            '7" 13% Chrome Tbq',
                                            '4-1/2" 13% Chrome Tbq',
                                            '3-1/2" 13% Chrome Tbq',
                                            '5-1/2" N80 17ppf HCS Tbg',
                                            '4-1/2" N80 12.75ppf HCS Tbg',
                                            '3-1/2" N80 9.3ppf HCS',
                                            '2-7/8" N80 4.7ppf HCS Tbg',
                                            '2-3/8" N80 4.7ppf HCS Tbg',
                                        ].map((text) => (
                                            <MenuItem value={text} key={text}>
                                                {text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <TextField
                                    margin="dense"
                                    fullWidth
                                    name="turbing_length"
                                    label="Turbing Length (ft)"
                                    value={
                                        data.completions_type_info
                                            ?.turbing_length || ""
                                    }
                                    onChange={handleOnChange}
                                    size="small"
                                />
                            </Box>
                        ) : (
                            <Box>
                                <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                                    <InputLabel id="turbing-size-select-label">
                                        Turbing Size (L/S)
                                    </InputLabel>
                                    <Select
                                        labelId="turbing-size-select-label"
                                        name="turbing_size_ls"
                                        value={
                                            data.completions_type_info
                                                ?.turbing_size_ls || ""
                                        }
                                        label="Turbing Size (L/S)"
                                        onChange={handleOnChange}
                                        size="small"
                                    >
                                        {[
                                            '7" 13% Chrome Tbq',
                                            '4-1/2" 13% Chrome Tbq',
                                            '3-1/2" 13% Chrome Tbq',
                                            '5-1/2" N80 17ppf HCS Tbg',
                                            '4-1/2" N80 12.75ppf HCS Tbg',
                                            '3-1/2" N80 9.3ppf HCS',
                                            '2-7/8" N80 4.7ppf HCS Tbg',
                                            '2-3/8" N80 4.7ppf HCS Tbg',
                                        ].map((text) => (
                                            <MenuItem value={text} key={text}>
                                                {text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <TextField
                                    margin="dense"
                                    fullWidth
                                    name="turbing_length_ls"
                                    label="Turbing Length (L/S)"
                                    value={
                                        data.completions_type_info
                                            ?.turbing_length_ls || ""
                                    }
                                    onChange={handleOnChange}
                                    size="small"
                                />
                                <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                                    <InputLabel id="turbing-size-select-label">
                                        Turbing Size (S/S)
                                    </InputLabel>
                                    <Select
                                        labelId="turbing-size-select-label"
                                        name="turbing_size_ss"
                                        value={
                                            data.completions_type_info
                                                ?.turbing_size_ss || ""
                                        }
                                        label="Turbing Size (S/S)"
                                        onChange={handleOnChange}
                                        size="small"
                                    >
                                        {[
                                            '7" 13% Chrome Tbq',
                                            '4-1/2" 13% Chrome Tbq',
                                            '3-1/2" 13% Chrome Tbq',
                                            '5-1/2" N80 17ppf HCS Tbg',
                                            '4-1/2" N80 12.75ppf HCS Tbg',
                                            '3-1/2" N80 9.3ppf HCS',
                                            '2-7/8" N80 4.7ppf HCS Tbg',
                                            '2-3/8" N80 4.7ppf HCS Tbg',
                                        ].map((text) => (
                                            <MenuItem value={text} key={text}>
                                                {text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <TextField
                                    margin="dense"
                                    fullWidth
                                    name="turbing_length_ss"
                                    label="Turbing Length (S/S)"
                                    value={
                                        data.completions_type_info
                                            ?.turbing_length_ss || ""
                                    }
                                    onChange={handleOnChange}
                                    size="small"
                                />
                            </Box>
                        )}
                    </Box>

                    <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                        <InputLabel id="igp-required-select-label">
                            IGP Required?
                        </InputLabel>
                        <Select
                            labelId="igp-required-select-label"
                            name="igp_required"
                            value={data.igp_required || ""}
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
                                data.igp_required === "YES" ? "block" : "none",
                            padding: 1,
                        }}
                    >
                        <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                            <InputLabel id="type-of-perforating-select-label">
                                Type of Perforating
                            </InputLabel>
                            <Select
                                labelId="type-of-perforating-select-label"
                                name="type_of_perforating"
                                value={data.igp_info?.type_of_perforating || ""}
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
                        {data.igp_info?.zones?.map((val, ind) => (
                            <Grid
                                key={ind}
                                container
                                spacing={0.5}
                                alignItems="center"
                            >
                                <Grid item xs={4}>
                                    <Typography>
                                        Zone {ind + 1} Length, MD
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        margin="dense"
                                        fullWidth
                                        name="from"
                                        label="From"
                                        value={val.from || ""}
                                        onChange={(e) =>
                                            handleIgpInfoChange(e, ind)
                                        }
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        margin="dense"
                                        fullWidth
                                        name="to"
                                        label="To"
                                        value={val.to || ""}
                                        onChange={(e) =>
                                            handleIgpInfoChange(e, ind)
                                        }
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <FormControl
                                        fullWidth
                                        sx={{ mb: 0.5, mt: 1 }}
                                    >
                                        <InputLabel id="igp-select-label">
                                            IGP
                                        </InputLabel>
                                        <Select
                                            labelId="igp-select-label"
                                            name="igp"
                                            value={val.igp || ""}
                                            label="IGP"
                                            onChange={(e) =>
                                                handleIgpInfoChange(e, ind)
                                            }
                                            size="small"
                                        >
                                            {["YES", "NO"].map((text) => (
                                                <MenuItem
                                                    value={text}
                                                    key={text}
                                                >
                                                    {text}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        ))}
                    </Box>

                    <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                        <InputLabel id="well-test-required-select-label">
                            Well Test Required?
                        </InputLabel>
                        <Select
                            labelId="well-test-required-select-label"
                            name="well_test_required"
                            value={data.well_test_required || ""}
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
                            padding: 1,
                        }}
                    >
                        {data.well_test_info?.map((val, ind) => (
                            <Grid
                                container
                                key={ind}
                                spacing={0.5}
                                alignItems="center"
                            >
                                <Grid item xs={4}>
                                    <Typography>
                                        Zone {ind + 1} Length, MD
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        margin="dense"
                                        fullWidth
                                        name="from"
                                        label="From"
                                        value={val.from || ""}
                                        onChange={(e) =>
                                            handleWellTestInfoChange(e, ind)
                                        }
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        margin="dense"
                                        fullWidth
                                        name="to"
                                        label="To"
                                        value={val.to || ""}
                                        onChange={(e) =>
                                            handleWellTestInfoChange(e, ind)
                                        }
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <FormControl
                                        fullWidth
                                        sx={{ mb: 0.5, mt: 1 }}
                                    >
                                        <InputLabel id="tcp-dst-select-label">
                                            TCP/DST
                                        </InputLabel>
                                        <Select
                                            labelId="tcp-dst-select-label"
                                            name="tcp_dst"
                                            value={val.tcp_dst || ""}
                                            label="TCP/DST"
                                            onChange={(e) =>
                                                handleWellTestInfoChange(e, ind)
                                            }
                                            size="small"
                                        >
                                            {["YES", "NO"].map((text) => (
                                                <MenuItem
                                                    value={text}
                                                    key={text}
                                                >
                                                    {text}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        ))}
                    </Box>

                    <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                        <InputLabel id="cement-squeeze-required-select-label">
                            Cement Squeeze Required?
                        </InputLabel>
                        <Select
                            labelId="cement-squeeze-required-select-label"
                            name="cement_squeeze_required"
                            value={data.cement_squeeze_required || ""}
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

                    <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                        <InputLabel id="ct-nitrogen-lift-select-label">
                            CT Nitrogen Lift?
                        </InputLabel>
                        <Select
                            labelId="ct-nitrogen-lift-select-label"
                            name="ct_nitrogen_lift"
                            value={data.ct_nitrogen_lift || ""}
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
                </>
            )}
            {data.job_type === "Drilling and Completion" && (
                <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                    <InputLabel id="xmas-tree-type-select-label">
                        Xmas Tree Type
                    </InputLabel>
                    <Select
                        labelId="xmas-tree-type-select-label"
                        name="xmas_tree_type"
                        value={data.xmas_tree_type || ""}
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
            )}
            {(data.job_type !== "Drilling" ||
                data.job_type !== "Drilling and Completion") && (
                <>
                    <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                        <InputLabel id="liner-casing-in-well-select-label">
                            Liner Casing in Well?
                        </InputLabel>
                        <Select
                            labelId="liner-casing-in-well-select-label"
                            name="liner_casing_in_well"
                            value={data.liner_casing_in_well || ""}
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

                    <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                        <InputLabel id="cement-plug-inside-well-select-label">
                            Cement Plug Inside Well?
                        </InputLabel>
                        <Select
                            labelId="cement-plug-inside-well-select-label"
                            name="cement_plug_inside_well"
                            value={data.cement_plug_inside_well || ""}
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
                </>
            )}
            {(data.job_type === "Workover" ||
                data.job_type === "Rigless Workover") && (
                <>
                    <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                        <InputLabel id="packer-milling-select-label">
                            Packer Milling Required?
                        </InputLabel>
                        <Select
                            labelId="packer-milling-select-label"
                            name="packer_milling_required"
                            value={data.packer_milling_required || ""}
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

                    <FormControl fullWidth sx={{ mb: 0.5, mt: 1 }}>
                        <InputLabel id="retrieve-existing-igp-select-label">
                            Retrieve Existing IGP?
                        </InputLabel>
                        <Select
                            labelId="retrieve-existing-igp-select-label"
                            name="retrieve_existing_igp"
                            value={data.retrieve_existing_igp || ""}
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
                </>
            )}
        </Box>
    );
};

export default Step2Form;
