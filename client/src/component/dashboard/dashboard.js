import React, { useState, useEffect } from "react";
import "./FormTable.css";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Table, Grid, Container } from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const apiEndpoint = `${BASE_URL}/getForm`;
const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    customTableContainer: {
        overflowX: "initial",
    },
    container: {
        maxHeight: 1040,
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#003366",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const FormTable = () => {
    const classes = useStyles();
    const [form, setForm] = useState([]);
    const [page, setPage] = React.useState(10);
    const [rowsPerPage, setRowsPerPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(1);
    };
    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, form.length - page * rowsPerPage);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(apiEndpoint);

            setForm(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="bgStyle">
            <Grid container direction="column">
                <Container>
                    <Paper className={classes.root}>
                        <TableContainer component={Paper}>
                            <Table stickyHeader className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="right">Request Id</StyledTableCell>
                                        <StyledTableCell align="right">Time of Request</StyledTableCell>
                                        <StyledTableCell align="right">Time elapsed</StyledTableCell>
                                        <StyledTableCell align="right">Current Status</StyledTableCell>



                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {form
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((p, index) => {
                                            return (
                                                <TableRow key={index}>
                                                    <StyledTableCell align="right">
                                                        {p.requestId}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">
                                                        {p.timeRequest}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">
                                                        {p.timeElapsed}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">
                                                        {p.current}
                                                    </StyledTableCell>


                                                </TableRow>
                                            );
                                        })}
                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15]}
                            component="div"
                            count={form.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Container>
            </Grid>
        </div>
    );
};

export default FormTable;