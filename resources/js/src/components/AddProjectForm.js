import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import CustomButton from "./CustomButton";

const AddProjectForm = ({ open, loading, handleSubmit, handleClose }) => {
    const [data, setData] = React.useState({
        name: "",
        description: "",
    });

    const handleOnChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleSubmit(data);
    };

    return (
        <Dialog open={open} fullWidth={true} maxWidth="sm">
            <DialogContent>
                <Box sx={{ mb: 2 }}>
                    <Typography>Create Project</Typography>
                </Box>
                <Box
                    component="form"
                    onSubmit={handleOnSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="name"
                        label="Name"
                        value={data.name}
                        id="name"
                        autoFocus
                        onChange={handleOnChange}
                    />
                    <TextField
                        margin="dense"
                        fullWidth
                        value={data.description}
                        name="description"
                        label="Description (Optional)"
                        id="description"
                        multiline
                        rows={5}
                        onChange={handleOnChange}
                    />
                    <Grid container spacing={4}>
                        <Grid item xs>
                            <Button
                                type="button"
                                fullWidth
                                variant="outlined"
                                size="large"
                                sx={{ mb: 0.5, mt: 1 }}
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <CustomButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{ mb: 0.5, mt: 1 }}
                                disabled={loading}
                            >
                                Submit
                            </CustomButton>
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AddProjectForm;
