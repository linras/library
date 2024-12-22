import { Button } from "@mui/material";

interface IKeyboardProps {
  handleLetterClick: (letter: string) => void;
}

// Zmień literki w Keyboard tak, każda z nich  zawierała stan.
// Np. letter: „A”, wasPressed: false. Następnie,
// podczas onLetterClick zmień stan i dodaj atrybut Button disabled, który będzie wyłączał
// dostępne litery po kliknięciu na nie.
// Podpowiedź: Litera powinna zostać nowym komponentem ze swoim stanem lokalnym.

interface IHangmanLetterProps extends IKeyboardProps {
  letter: string;
  index: number;
}

const HangmanLetter = ({
  handleLetterClick,
  letter,
  index,
}: IHangmanLetterProps) => {
  return (
    <Button onClick={() => handleLetterClick(letter)} key={index}>
      {letter}
    </Button>
  );
};

const Keyboard = ({ handleLetterClick }: IKeyboardProps) => {
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
