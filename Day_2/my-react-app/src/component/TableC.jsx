import React from 'react'
import {TableContainer,Table,TableHead,TableRow,TableCell, TableBody, Typography} from '@mui/material'

function createData(name, age, ID) {
    return { name, age, ID };
  }
  
  const rows = [
    createData('Adi', 21, 12),
    createData('Adish', 20, 13),
    createData('Abhinandh', 20, 6),
  ];
const TableC = () => {
  return (
    <div>
        <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><Typography>Name</Typography></TableCell>
                    <TableCell><Typography>Age</Typography></TableCell>
                    <TableCell><Typography>ID</Typography></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell>Adi</TableCell>
                <TableCell>21</TableCell>
                <TableCell>12</TableCell>
                </TableRow>
            </TableBody>
            <TableBody>
                <TableRow>
                <TableCell>Adish</TableCell>
                <TableCell>20</TableCell>
                <TableCell>13</TableCell>
                </TableRow>
            </TableBody>
            <TableBody>
                <TableRow>
                <TableCell>Abhinandh</TableCell>
                <TableCell>20</TableCell>
                <TableCell>6</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default TableC