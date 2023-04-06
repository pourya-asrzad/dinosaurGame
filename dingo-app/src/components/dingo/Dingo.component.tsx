import dinasour from "../../assets/images/dinasour.svg";
import dinasourMove1 from "../../assets/images/move1.svg";
import dinasourMove2 from "../../assets/images/move2.svg";
import { useTimer } from "../../hooks/timer.hook";
type dingo = {
  className?: string;
};
const Dingo = ({ className }: dingo) => {
  const timeNumber = useTimer(100);
  // console.log(timeNumber);
  let dino = <img className={className} src={dinasour} alt="dino" />;
  if (timeNumber === 1) {
    dino = <img className={className} src={dinasourMove1} alt="dino" />;
  } else {
    dino = <img className={className} src={dinasourMove2} alt="dino" />;
  }
  return <>{dino}</>;
};

export default Dingo;
