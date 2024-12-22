"use client";
import { Button } from "@mui/material";
import { useState } from "react";
import { InputModal } from "../input-modal/input-modal";

interface IProps {
  defaultName: string;
}

export const Greeting = ({ defaultName }: IProps) => {
  const [name, setName] = useState<string>(defaultName);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeName = (newName: string) => {
    setName(newName);
    handleClose();
  };

  return (
    <div>
      Hello, {name}!
      <Button
        onClick={handleOpen}
        color="secondary"
        variant="contained"
        sx={{ ml: 2 }}
      >
        Change name
      </Button>
      {open && (
        <InputModal
          handleClose={handleClose}
          handleChangeName={handleChangeName}
          customText="Change your name:"
        />
      )}
    </div>
  );
};
