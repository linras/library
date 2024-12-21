import { Box, Typography } from "@mui/material";

interface IProps {
  word: string;
  guessedLetters: string[];
}

const HangmanWord = ({ word, guessedLetters }: IProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
      {word.split("").map((value, index) => (
        <Typography key={index} mr={3} variant="h4">
          {guessedLetters.includes(value) ? value : "_"}
        </Typography>
      ))}
    </Box>
  );
};

export default HangmanWord;
