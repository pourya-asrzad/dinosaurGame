import { useEffect, useState } from "react";

export function useRandomClass() {
  const [randomNumber, setRandomNumber] = useState(1);
  useEffect(() => {
    const time = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 3);
      setRandomNumber(randomNum);
    }, 1500);

    return () => {
      clearInterval(time);
    };
  });
  return randomNumber;
}
