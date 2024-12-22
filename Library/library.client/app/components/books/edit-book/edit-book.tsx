import { Book } from "@/app/models/books-model";
import { Modal, Box, Typography, Button } from "@mui/material";

interface EditBookProps {
  book: Book;
  onCancel: () => void;
}

const EditBook = ({ book, onCancel }: EditBookProps) => {
  return (
    <Modal
      open
      onClose={onCancel}
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
          {"Edit this book:"}
        </Typography>
        {/* <TextField
          value={input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNewInput(event.target.value);
          }}
        /> */}
        <pre>{JSON.stringify(book, null, 2)}</pre>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button onClick={onCancel} variant="outlined" color="secondary">
            Cancel
          </Button>
          {/* <Button onClick={handleOk}>Change value</Button> */}
        </Box>
      </Box>
    </Modal>
  );
};

export default EditBook;
