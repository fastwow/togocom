import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  Chip,
  Box,
} from "@mui/material";
import AddWinnerItemDialog from "./AddWinnerItemDialog";

const AddNewItemDialog = ({ open, handleClose, handleAddItem }) => {
  const [openAddWinnerDialog, setOpenAddWinnerDialog] = useState(false);
  const [newItem, setNewItem] = useState({
    date: "",
    type: "daily",
    prizes: [],
    winners: [],
  });

  const onAddWinner = () => {
    setOpenAddWinnerDialog(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddChip = (event, name) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      setNewItem((prevState) => ({
        ...prevState,
        [name]: [...prevState[name], event.target.value.trim()],
      }));
      event.target.value = "";
    }
  };

  const handleDeleteChip = (chipIndex, name) => {
    setNewItem((prevState) => ({
      ...prevState,
      [name]: prevState[name].filter((_, index) => index !== chipIndex),
    }));
  };

  const onAddNewItem = (newItem) => {
    handleAddItem(newItem);
    setNewItem({
      date: "",
      type: "daily",
      prizes: [],
      winners: [],
    });
  };

  const handleAddWinnerItem = (winnerItem) => {
    console.log(winnerItem);

    setNewItem((prevState) => ({
      ...prevState,
      winners: [...prevState.winners, winnerItem],
    }));
    setOpenAddWinnerDialog(false);
  };

  console.log(newItem);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Item</DialogTitle>
        <DialogContent>
          <TextField
            label="eg. 31/12/2024"
            name="date"
            value={newItem.date}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
          <TextField
            label="Short Code"
            name="shortCode"
            value={newItem.shortCode}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
          <Select
            label="Type"
            name="type"
            value={newItem.type}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="super">Super</MenuItem>
          </Select>
          {/* <TextField
          label="Winners"
          name="winners"
          onKeyDown={(e) => handleAddChip(e, "winners")}
          fullWidth
          sx={{ marginBottom: 2 }}
        /> */}
          <Button onClick={onAddWinner}>Add Winner</Button>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {newItem.winners.map((winner, index) => (
              <Chip
                key={index}
                label={`(msisdn ${winner.msisdn}, ${
                  winner.points || 0
                } Points)`}
                onDelete={() => handleDeleteChip(index, "winners")}
                sx={{ marginRight: 1, marginBottom: 1 }}
              />
            ))}
          </Box>
          <TextField
            label="Prizes"
            name="prizes"
            onKeyDown={(e) => handleAddChip(e, "prizes")}
            fullWidth
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {newItem.prizes.map((prize, index) => (
              <Chip
                key={index}
                label={prize}
                onDelete={() => handleDeleteChip(index, "prizes")}
                sx={{ marginRight: 1, marginBottom: 1 }}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            color="error"
            disabled={
              !newItem.date || !newItem.winners.length || !newItem.prizes.length
            }
            onClick={() => onAddNewItem(newItem)}
            variant="contained"
          >
            Add Item
          </Button>
        </DialogActions>
      </Dialog>
      <AddWinnerItemDialog
        open={openAddWinnerDialog}
        handleClose={() => setOpenAddWinnerDialog(false)}
        handleAddItem={handleAddWinnerItem}
      />
    </>
  );
};

export default AddNewItemDialog;
