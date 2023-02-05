import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  tableContainer: {
    backgroundColor: "red",
    width: "auto !important",
    padding: "1.25rem 1.5rem",
  },
  tableHeader: {
    fontWeight: "bold !important",
    "&:hover": {
      backgroundColor: "green !important",
      cursor: "pointer",
    },
  },
});

const UsersTable = ({ users }) => {
  const classes = useStyles();
  const [sortOrder, setSortOrder] = useState({ key: "", order: "" });

  const handleSort = (key) => {
    let newOrder = "asc";
    if (sortOrder.key === key && sortOrder.order === "asc") {
      newOrder = "desc";
    }
    setSortOrder({ key, order: newOrder });
  };

  const sortedUsers = users?.sort((a, b) => {
    if (sortOrder.order === "asc") {
      return a[sortOrder.key] > b[sortOrder.key] ? 1 : -1;
    }
    return b[sortOrder.key] > a[sortOrder.key] ? 1 : -1;
  });

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="users table">
        <TableHead>
          <TableRow>
            <TableCell
              className={classes.tableHeader}
              onClick={() => handleSort("email")}
            >
              Email
            </TableCell>
            <TableCell
              className={classes.tableHeader}
              onClick={() => handleSort("first_name")}
            >
              First Name
            </TableCell>
            <TableCell
              className={classes.tableHeader}
              onClick={() => handleSort("last_name")}
            >
              Last Name
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedUsers?.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.first_name}</TableCell>
              <TableCell>{user.last_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
