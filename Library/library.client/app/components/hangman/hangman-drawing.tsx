import React from "react";

interface HangmanDrawingProps {
  incorrectGuesses: number;
}

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({
  incorrectGuesses,
}) => {
  const parts = [
    <circle
      cx="50"
      cy="20"
      r="10"
      key="head"
      stroke="black"
      strokeWidth="2"
      fill="white"
    />, // Head
    <circle
      cx="50"
      cy="40"
      r="15"
      key="body"
      stroke="black"
      strokeWidth="2"
      fill="white"
    />, // Body
    <circle
      cx="50"
      cy="65"
      r="20"
      key="base"
      stroke="black"
      strokeWidth="2"
      fill="white"
    />, // Base
    <line
      x1="50"
      y1="10"
      x2="50"
      y2="0"
      key="hatTop"
      stroke="black"
      strokeWidth="2"
    />, // Hat Top
    <line
      x1="40"
      y1="10"
      x2="60"
      y2="10"
      key="hatBrim"
      stroke="black"
      strokeWidth="2"
    />, // Hat Brim
    <line
      x1="35"
      y1="40"
      x2="15"
      y2="30"
      key="leftArm"
      stroke="brown"
      strokeWidth="2"
    />, // Left Arm
    <line
      x1="65"
      y1="40"
      x2="85"
      y2="30"
      key="rightArm"
      stroke="brown"
      strokeWidth="2"
    />, // Right Arm
    <circle cx="45" cy="18" r="1" key="leftEye" fill="black" />, // Left Eye
    <circle cx="55" cy="18" r="1" key="rightEye" fill="black" />, // Right Eye
    <line
      x1="50"
      y1="20"
      x2="50"
      y2="25"
      key="nose"
      stroke="orange"
      strokeWidth="2"
    />, // Nose
    <path
      d="M 45 28 Q 50 32 55 28"
      key="mouth"
      stroke="black"
      strokeWidth="2"
      fill="none"
    />, // Mouth
  ];

  return (
    <svg height="100" width="100">
      {parts.slice(0, incorrectGuesses)}
    </svg>
  );
};

export default HangmanDrawing;
