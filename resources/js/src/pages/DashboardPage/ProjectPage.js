import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    getAllProjects,
    clearProject,
    createProject,
} from "../../actions/project";

import CustomButton from "../../components/CustomButton";
import AddProjectForm from "../../components/AddProjectForm";

const theme = createTheme();

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}));

const ProjectPage = ({
    loading,
    projects,
    getAllProjects,
    clearProject,
    createProject,
}) => {
    const [open, setOpen] = React.useState(false);
    const [orderBy, setOrderBy] = React.useState("calories");
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const navigate = useNavigate();

    const handleDialogToggle = () => navigate("/dashboard/add-project");

    const handleSubmit = (data) => createProject(data, handleOnSuccessfull);

    const handleOnSuccessfull = (data) => {
        handleDialogToggle();
        navigate(`${data.id}`);
    };

    const handleChangePage = () => {};

    const handleChangeRowsPerPage = () => {};

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleClick = (event, id) => {
        navigate(`${id}`);
    };

    React.useEffect(() => {
        getAllProjects();

        return clearProject;
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2, padding: 2, backgroundColor: "white" }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant="h5" noWrap component="p">
                                Project
                            </Typography>
                        </Grid>
                        <Grid item xs container justifyContent="flex-end">
                            <Grid item>
                                <CustomButton
                                    type="button"
                                    variant="contained"
                                    size="small"
                                    onClick={handleDialogToggle}
                                >
                                    Create Project
                                </CustomButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Container maxWidth="lg">
                    <AddProjectForm
                        open={open}
                        loading={loading}
                        handleClose={handleDialogToggle}
                        handleSubmit={handleSubmit}
                    />
                    <Box
                        sx={{
                            marginTop: 3,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: 3,
                            backgroundColor: "#ffffff",
                            borderRadius: 1,
                        }}
                    >
                        <Paper sx={{ width: "100%", mb: 2 }} elevation={0}>
                            <TableContainer elevation={0} component={Paper}>
                                <Table
                                    sx={{ minWidth: 750 }}
                                    aria-labelledby="tableTitle"
                                >
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell>
                                                Name
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                Well Cost
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                Operating Time
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {projects?.data?.map((row, index) => {
                                            const isItemSelected = isSelected(
                                                row.name
                                            );
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <StyledTableRow
                                                    hover
                                                    onClick={(event) =>
                                                        handleClick(
                                                            event,
                                                            row.id
                                                        )
                                                    }
                                                    role="checkbox"
                                                    aria-checked={
                                                        isItemSelected
                                                    }
                                                    tabIndex={-1}
                                                    key={row.name}
                                                    selected={isItemSelected}
                                                >
                                                    <StyledTableCell
                                                        component="th"
                                                        id={labelId}
                                                        scope="row"
                                                    >
                                                        {row.name}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">
                                                        {row.well_cost}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">
                                                        {row.operating_time}Days
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            );
                                        })}
                                        {emptyRows > 0 && (
                                            <StyledTableRow
                                                style={{
                                                    height: 53 * emptyRows,
                                                }}
                                            >
                                                <StyledTableCell colSpan={6} />
                                            </StyledTableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[25]}
                                component="div"
                                count={projects?.data?.length || 0}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

const mapStateToProps = (state) => ({
    loading: state.project.loading,
    project: state.project.project,
    projects: state.project.projects,
});

export default connect(mapStateToProps, {
    getAllProjects,
    clearProject,
    createProject,
})(ProjectPage);
