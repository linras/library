"use client";
import { Button } from "@mui/material";
import { useState } from "react";
import { GreetingModal } from "./greeting-modal";

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
        <GreetingModal
          handleClose={handleClose}
          handleChangeName={handleChangeName}
        />
      )}
    </div>
  );
};
