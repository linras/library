import { Button } from "@mui/material";

interface IProps {
  handleLetterClick: (letter: string) => void;
}

const Keyboard = ({ handleLetterClick }: IProps) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <>
      {letters.map((letter, index) => (
        <Button onClick={() => handleLetterClick(letter)} key={index}>
          {letter}
        </Button>
      ))}
    </>
  );
};

export default Keyboard;
