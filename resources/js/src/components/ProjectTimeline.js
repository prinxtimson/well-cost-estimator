import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ProjectTimeline = ({ project }) => {
    const { project_timeline } = project;
    const [subTotal, setSubTotal] = React.useState(0);
    const [contingency, setContingency] = React.useState(0);

    React.useEffect(() => {
        let total = 0;
        project_timeline.forEach(
            (val) => (total = total + parseInt(val.total || 0))
        );
        setSubTotal(total);
        setContingency(total * (10 / 100));
    }, []);

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
                            <TableCell>Operation Items</TableCell>
                            <TableCell align="right">Depth (ft)</TableCell>
                            <TableCell align="right">RIH</TableCell>
                            <TableCell align="right">Drill</TableCell>
                            <TableCell align="right">Circulate</TableCell>
                            <TableCell align="right">POH</TableCell>
                            <TableCell align="right">Casing/Cmt</TableCell>
                            <TableCell align="right">WH Work</TableCell>
                            <TableCell align="right">Total (days)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {project_timeline?.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {Math.ceil(row.depth || 0)}
                                </TableCell>
                                <TableCell align="right">
                                    {Math.ceil(row.rih || 0)}
                                </TableCell>
                                <TableCell align="right">
                                    {Math.ceil(row.drill || 0)}
                                </TableCell>
                                <TableCell align="right">
                                    {Math.ceil(row.circulate || 0)}
                                </TableCell>
                                <TableCell align="right">
                                    {Math.ceil(row.poh || 0)}
                                </TableCell>
                                <TableCell align="right">
                                    {Math.ceil(row.casing || 0)}
                                </TableCell>
                                <TableCell align="right">
                                    {Math.ceil(row.wh_work || 0)}
                                </TableCell>
                                <TableCell align="center">
                                    {Math.ceil(row.total || 0)}
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell align="right">Sub Total</TableCell>
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell align="center">
                                {Math.ceil(subTotal || 0)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">
                                Contingency (10%)
                            </TableCell>
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell align="center">
                                {Math.ceil(contingency || 0)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Total</TableCell>
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell align="center">
                                {Math.ceil(subTotal + contingency || 0)}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default ProjectTimeline;
