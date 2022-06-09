import React from "react";
import { styled } from "@mui/material/styles";
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
import Paper from "@mui/material/Paper";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd), &:nth-of-type(even)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
    fontWeight: "bold",
}));

const ProjectCost = ({ project }) => {
    const { project_cost } = project;
    return (
        <Paper
            sx={{
                marginTop: 3,
                overflowX: "auto",
                marginX: "auto",
                backgroundColor: "#ffffff",
            }}
        >
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Cost Items</TableCell>
                            <TableCell align="right">Unit</TableCell>
                            <TableCell align="right">Unit Cost ($)</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Total Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Site Survey & Rig Operations
                            </TableCell>
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Site Survey & Rig Operations"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </TableCell>
                        </StyledTableRow>
                        {project_cost.map(
                            (row) =>
                                row.sub_title ===
                                    "Site Survey & Rig Operations" && (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.unit}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.unit_cost)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.quantity)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            $
                                            {parseFloat(row.total)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                    </TableRow>
                                )
                        )}
                    </TableBody>
                    <TableBody>
                        <StyledTableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Drilling Consumables
                            </TableCell>
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Drilling Consumables"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </TableCell>
                        </StyledTableRow>
                        {project_cost.map(
                            (row) =>
                                row.sub_title === "Drilling Consumables" && (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.unit}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.unit_cost)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.quantity)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            $
                                            {parseFloat(row.total)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                    </TableRow>
                                )
                        )}
                    </TableBody>
                    <TableBody>
                        <StyledTableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Drilling Tangibles
                            </TableCell>
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Drilling Tangibles"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </TableCell>
                        </StyledTableRow>
                        {project_cost.map(
                            (row) =>
                                row.sub_title === "Drilling Tangibles" && (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.unit}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.unit_cost)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.quantity)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            $
                                            {parseFloat(row.total)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                    </TableRow>
                                )
                        )}
                    </TableBody>
                    <TableBody>
                        <StyledTableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Drilling Services
                            </TableCell>
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Drilling Services"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </TableCell>
                        </StyledTableRow>
                        {project_cost.map(
                            (row) =>
                                row.sub_title === "Drilling Services" && (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.unit}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.unit_cost)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.quantity)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            $
                                            {parseFloat(row.total)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                    </TableRow>
                                )
                        )}
                    </TableBody>
                    <TableBody>
                        <StyledTableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Drilling Formation Evaluation
                            </TableCell>
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Drilling Formation Evaluation"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </TableCell>
                        </StyledTableRow>
                        {project_cost.map(
                            (row) =>
                                row.sub_title ===
                                    "Drilling Formation Evaluation" && (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.unit}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.unit_cost)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.quantity)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            $
                                            {parseFloat(row.total)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                    </TableRow>
                                )
                        )}
                    </TableBody>
                    <TableBody>
                        <StyledTableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Drilling Logistics
                            </TableCell>
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Drilling Logistics"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </TableCell>
                        </StyledTableRow>
                        {project_cost.map(
                            (row) =>
                                row.sub_title === "Drilling Logistics" && (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.unit}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.unit_cost)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.quantity)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            $
                                            {parseFloat(row.total)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                    </TableRow>
                                )
                        )}
                    </TableBody>
                    <TableBody>
                        <StyledTableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Drilling Personnel and Admin
                            </TableCell>
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                $
                                {project_cost
                                    .reduce((total, val) => {
                                        if (
                                            val.sub_title ===
                                            "Drilling Personnel and Admin"
                                        ) {
                                            return (
                                                total + parseFloat(val.total)
                                            );
                                        }
                                        return total;
                                    }, 0)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </TableCell>
                        </StyledTableRow>
                        {project_cost.map(
                            (row) =>
                                row.sub_title ===
                                    "Drilling Personnel and Admin" && (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.unit}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.unit_cost)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.quantity)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                        <TableCell align="right">
                                            $
                                            {parseFloat(row.total)
                                                .toFixed(2)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                        </TableCell>
                                    </TableRow>
                                )
                        )}
                    </TableBody>
                    <TableHead>
                        <StyledTableRow>
                            <TableCell>
                                Total (Tangibles and intangibles)
                            </TableCell>
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right">
                                $
                                {project_cost
                                    .reduce(
                                        (total, val) =>
                                            total + parseFloat(val.total),

                                        0
                                    )
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </TableCell>
                        </StyledTableRow>

                        <StyledTableRow>
                            <TableCell>Estimated Taxes</TableCell>
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right">
                                $
                                {(
                                    project_cost.reduce(
                                        (total, val) =>
                                            total + parseFloat(val.total),

                                        0
                                    ) * 0.05
                                )
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </TableCell>
                        </StyledTableRow>

                        <StyledTableRow>
                            <TableCell>Estimated WHT</TableCell>
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right" />
                            <TableCell align="right">
                                $
                                {(
                                    parseFloat(
                                        project_cost.find(
                                            (val) =>
                                                val.name === "Communications"
                                        ).total
                                    ) *
                                        0.05 +
                                    0.1 *
                                        (parseFloat(
                                            project_cost.find(
                                                (val) =>
                                                    val.name ===
                                                    "Helicopter Services"
                                            ).total
                                        ) +
                                            parseFloat(
                                                project_cost.find(
                                                    (val) =>
                                                        val.name ===
                                                        "Flight Charges"
                                                ).total +
                                                    project_cost.find(
                                                        (val) =>
                                                            val.name ===
                                                            "Tickets"
                                                    ).total
                                            ))
                                )
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </TableCell>
                        </StyledTableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default ProjectCost;
