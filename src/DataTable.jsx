import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import * as React from 'react';

function createData(ingredient, quantity, unit, price) {
    return { ingredient, quantity, unit, price };
}

const rows = [
    createData('Flour', 100, 'g', 0.5),
    createData('Sugar', 50, 'g', 0.25),
    createData('Butter', 50, 'g', 0.75),
    createData('Eggs', 2, 'pcs', 0.5),
    createData('Milk', 200, 'ml', 0.5),
];

export default function DataTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Data table">
                <TableHead>
                    <TableRow>
                        <TableCell>Ingredient</TableCell>
                        <TableCell align="left">Quantity</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.ingredient}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.ingredient}
                            </TableCell>
                            <TableCell align="left">{row.quantity}</TableCell>
                            <TableCell align="right">{row.unit}</TableCell>
                            <TableCell align="right">{row.price.toFixed(2)}</TableCell>
                            </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}