import { useEffect, useState } from "react";
import dinasour from "../../assets/images/dinasour.svg";
import dinasourMove1 from "../../assets/images/move1.svg";
import dinasourMove2 from "../../assets/images/move2.svg";
import { useTimer } from "../../hooks/timer.hook";
type dingo = {
  className?: string;
  ref: any;
};
const Dingo = ({ className, ref }: dingo) => {
  const [changePicture, setChangePicture] = useState<any>(dinasour);

  useEffect(() => {
    const time = setInterval(() => {
      if (changePicture === dinasourMove2) {
        setChangePicture(dinasourMove1);
      } else {
        setChangePicture(dinasourMove2);
      }
    }, 100);
    return () => {
      clearInterval(time);
    };
  }, [changePicture]);
  return (
    <>
      <img ref={ref} className={className} src={changePicture} alt="dino" />
    </>
  );
};

export default Dingo;
