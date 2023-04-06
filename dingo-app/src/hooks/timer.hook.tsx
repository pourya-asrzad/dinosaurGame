import { useEffect, useState } from "react";

export function useTimer(changeTime: number) {
  const [InterNumber, setNumber] = useState(1);
  useEffect(() => {
    const time = setInterval(() => {
      if (InterNumber === 1) {
        setNumber(2);
      } else {
        setNumber(1);
      }
    }, changeTime);

    return () => {
      clearInterval(time);
    };
  }, [InterNumber]);
  return InterNumber;
}
