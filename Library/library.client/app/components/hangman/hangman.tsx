"use client";
import { useState } from "react";
import HangmanDrawing from "./hangman-drawing";
import HangmanWord from "./hangman-word";
import Keyboard from "./keyboard";
import { Button } from "@mui/material";
import { InputModal } from "../input-modal/input-modal";

const Hangman = () => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState<number>(0);
  const [word, setWord] = useState("Dumplings".toUpperCase()); // TODO: Dodać modal który zmienia to słowo
  const [openChangeWordModal, setOpenChangeWordModal] =
    useState<boolean>(false);
  //podpowiedź: zobacz w  Greeting changeName

  const handleLetterClick = (letter: string) => {
    const normalizedLetter = letter.toUpperCase();
    if (word.includes(normalizedLetter)) {
      setGuessedLetters([...guessedLetters, normalizedLetter]);
    } else {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  };

  const handleChangeWord = (newWord: string) => {
    setWord(newWord.toUpperCase());
    setOpenChangeWordModal(false);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
  };

  return (
    <>
      <HangmanDrawing incorrectGuesses={incorrectGuesses} />
      <HangmanWord word={word} guessedLetters={guessedLetters} />
      <Button onClick={() => setOpenChangeWordModal(true)}>Change word</Button>
      {openChangeWordModal && (
        <InputModal
          handleClose={() => setOpenChangeWordModal(false)}
          handleChangeName={handleChangeWord}
        />
      )}
      <Keyboard handleLetterClick={handleLetterClick} />
    </>
  );
};

export default Hangman;
