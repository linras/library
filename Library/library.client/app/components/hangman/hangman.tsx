"use client";
import { useState } from "react";
import HangmanDrawing from "./hangman-drawing";
import HangmanWord from "./hangman-word";
import Keyboard from "./keyboard";

const Hangman = () => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState<number>(0);
  const word = "Dumplings".toUpperCase();

  const handleLetterClick = (letter: string) => {
    const normalizedLetter = letter.toUpperCase();
    if (word.includes(normalizedLetter)) {
      setGuessedLetters([...guessedLetters, normalizedLetter]);
    } else {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  return (
    <>
      <HangmanDrawing incorrectGuesses={incorrectGuesses} />
      <HangmanWord word={word} guessedLetters={guessedLetters} />
      <Keyboard handleLetterClick={handleLetterClick} />
    </>
  );
};

export default Hangman;
