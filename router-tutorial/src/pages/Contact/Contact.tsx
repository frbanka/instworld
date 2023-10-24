import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { FormControl, TextField } from "@mui/material";
import "./Contact.css";

function createData(name: string, calories: string, fat: number) {
  return { name, calories, fat };
}
const rows = [
  createData("dead man in bathroom", "Kansas", 63465324),
  createData("Ice cream sandwich", "Ohio", 9552525),
  createData("Eclair", "Baltimore", 1625222),
  createData("Cupcake", "Chicago", 335677347),
  createData("Gingerbread", "Kansas", 11575488),
];
const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Case</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const Contact = () => {
  return (
    <div>
      <div className="form">
        <FormControl sx={{ width: "350px", rowGap: "15px" }}>
          <TextField label="Email Adress" />
          <TextField label="Phone" required />
          <TextField label="Location" required />
          <TextField
            label="What's the case?"
            multiline
            maxRows={6}
            required
            helperText="short information about the case"
          />
        </FormControl>
      </div>
      <div className="table">
        <BasicTable />
      </div>
      <div className="container">
        <h1>got a job? tell us what to hunt</h1>
      </div>
    </div>
  );
};
