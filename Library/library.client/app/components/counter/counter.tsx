"use client";
import { Button } from "@mui/material";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <Button onClick={handleClick}> Clicked {count} times </Button>;
};
