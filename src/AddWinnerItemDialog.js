import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const AddWinnerItemDialog = ({ open, handleClose, handleAddItem }) => {
  const [newItem, setNewItem] = useState({
    msisdn: "",
    points: undefined,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const onAddNewItem = (newItem) => {
    handleAddItem(newItem);
    setNewItem({
      msisdn: "",
      points: undefined,
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Winner Item</DialogTitle>
      <DialogContent>
        <TextField
          label="eg. 213123"
          name="msisdn"
          value={newItem.msisdn}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2, marginTop: 2 }}
        />
        <TextField
          label="eg. 200"
          name="points"
          value={newItem.points}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2, marginTop: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          color="error"
          disabled={!newItem.points || !newItem.msisdn.length}
          onClick={() => onAddNewItem(newItem)}
          variant="contained"
        >
          Add Item
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddWinnerItemDialog;
