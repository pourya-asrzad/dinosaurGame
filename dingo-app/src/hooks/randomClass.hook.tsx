import { useEffect, useState } from "react";

export function useRandomClass(randomRange: number, changeTime: number) {
  const [randomNumber, setRandomNumber] = useState(1);
  useEffect(() => {
    const time = setInterval(() => {
      const randomNum = Math.floor(Math.random() * randomRange);
      setRandomNumber(randomNum);
    }, changeTime);

    return () => {
      clearInterval(time);
    };
  }, [randomNumber]);
  return randomNumber;
}
