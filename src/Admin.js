import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Box,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tab,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import AddNewItemDialog from "./AddNewItemDialog";
import api from "./api";

const Admin = () => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await api.getAllData();
    setData(response);
  };

  const handleAddItem = async (newItem) => {
    await api.createItem({
      ...newItem,
      type: newItem.type.toUpperCase(),
      prizes: newItem.prizes.map((p) => ({ title: p })),
    });
    setOpenDialog(false);
    await fetchData();

    const tableContainer = document.getElementById("table-container");
    tableContainer.scrollTop = tableContainer.scrollHeight;
  };

  const handleDeleteItem = async (itemId) => {
    await api.deleteItem(itemId);
    setDeleteItemId(null);
    fetchData();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
      }}
    >
      <Container fixed>
        <Box
          sx={{
            fontSize: 36,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            lineHeight: "64px",
            paddingLeft: 4,
            paddingRight: 4,
            marginTop: 4,
          }}
        >
          Admin
        </Box>
        <TableContainer
          component={Paper}
          sx={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Prizes</TableCell>
                <TableCell>Winners</TableCell>
                <TableCell>Short Code</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>
                    {row.prizes.map((prize, index) => (
                      <span key={index}>
                        {prize.title}
                        <br />
                      </span>
                    ))}
                  </TableCell>
                  <TableCell>
                    {row.winners.map((winner, index) => (
                      <span key={index}>
                        {`(msisdn ${winner.msisdn}, ${
                          winner.points || "0"
                        } Points)`}
                        <br />
                      </span>
                    ))}
                  </TableCell>
                  <TableCell>{row.shortCode}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => setDeleteItemId(row.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", marginTop: 4, justifyContent: "center" }}>
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpenDialog(true)}
          >
            Add New Item
          </Button>
        </Box>
        <AddNewItemDialog
          open={openDialog}
          handleClose={() => setOpenDialog(false)}
          handleAddItem={handleAddItem}
        />

        <Dialog
          open={deleteItemId !== null}
          onClose={() => setDeleteItemId(null)}
        >
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this item?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteItemId(null)}>Cancel</Button>
            <Button
              onClick={() => {
                handleDeleteItem(deleteItemId);
              }}
              color="error"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Admin;
