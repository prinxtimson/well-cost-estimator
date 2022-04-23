import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link, useSearchParams } from "react-router-dom";

import { connect } from "react-redux";
import {
    getAllSubscriptions,
    confirmPayment,
} from "../../actions/subscription";

import CustomButton from "../../components/CustomButton";

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

const SubscriptionPage = ({
    loading,
    subscription,
    getAllSubscriptions,
    confirmPayment,
}) => {
    const [searchParams] = useSearchParams();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = () => {};

    const handleChangeRowsPerPage = () => {};

    React.useEffect(() => {
        const trxref = searchParams.get("trxref");

        if (trxref) {
            confirmPayment(trxref);
        }

        getAllSubscriptions();
    }, []);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <Box
                    sx={{
                        mb: 2,
                        padding: 2,
                        backgroundColor: "#ffffff",
                    }}
                >
                    <Link to="/dashboard/billing" style={{ color: "#fff" }}>
                        <CustomButton sx={{ color: "#fff" }}>
                            Upgrade Plan
                        </CustomButton>
                    </Link>
                </Box>
                <Container maxWidth="lg">
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
                                                Plan ID
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                Plan Name
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                Amount
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                Due Date
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                Status
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {subscription?.data?.map(
                                            (row, index) => {
                                                const labelId = `enhanced-table-checkbox-${index}`;

                                                return (
                                                    <StyledTableRow
                                                        hover
                                                        tabIndex={-1}
                                                        key={row.id}
                                                    >
                                                        <StyledTableCell
                                                            id={labelId}
                                                            scope="row"
                                                        >
                                                            {row.paystack_id}
                                                        </StyledTableCell>
                                                        <StyledTableCell
                                                            component="th"
                                                            scope="row"
                                                        >
                                                            {row.name}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="right">
                                                            {row.amount}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="right">
                                                            {row.ends_at}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="right">
                                                            {row.operating_time}
                                                        </StyledTableCell>
                                                    </StyledTableRow>
                                                );
                                            }
                                        )}
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
                                count={subscription?.data?.length || 0}
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
    loading: state.subscription.loading,
    subscriptions: state.subscription.subscriptions,
});

export default connect(mapStateToProps, {
    getAllSubscriptions,
    confirmPayment,
})(SubscriptionPage);
