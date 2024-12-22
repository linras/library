import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface IProps {
  handleClose: () => void;
  handleChangeName: (newName: string) => void;
  customText?: string;
}

export const InputModal = ({
  handleClose,
  handleChangeName,
  customText,
}: IProps) => {
  const [input, setNewInput] = useState<string>("");

  const handleOk = () => {
    handleChangeName(input);
  };

  return (
    <Modal
      open
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {customText ? customText : "Change your input:"}
        </Typography>
        <TextField
          value={input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNewInput(event.target.value);
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleOk}>Change value</Button>
        </Box>
      </Box>
    </Modal>
  );
};
