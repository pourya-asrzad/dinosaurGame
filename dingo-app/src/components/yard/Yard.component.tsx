import Styles from "./Yard.module.scss";
import bush1 from "../../assets/images/bush1.svg";
import bush2 from "../../assets/images/bush2.svg";
import bush3 from "../../assets/images/bush3.svg";
import Dingo from "../dingo/Dingo.component";
import { useState } from "react";
import { useRandomClass } from "../../hooks/randomClass.hook";
const Yard = () => {
  const randomNumber = useRandomClass(3, 1500);
  const [dingoUp, setDingoUp] = useState("dinosaur");
  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
      setDingoUp("dinosaurUp");
      setTimeout(() => {
        setDingoUp(" ");
      }, 500);
    }
  };
  let bush = <img src={bush3} alt="bush3" />;
  if (randomNumber === 0) {
    bush = <img src={bush3} alt="bush3" />;
  } else if (randomNumber === 1) {
    bush = <img src={bush2} alt="bush2" />;
  } else if (randomNumber === 2) {
    bush = <img src={bush1} alt="bush1" />;
  }

  return (
    <div>
      <h1 className={Styles["game-header"]}>dinosaur game 🦕</h1>
      <div className={Styles.Yard}>
        <div className={Styles["playground"]}>
          <Dingo className={Styles["dinosaur"] + " " + Styles[dingoUp]} />
          <div className={Styles["bushes"]}>{bush}</div>
          <div className={Styles["hr"]}></div>
        </div>
      </div>
      ;
    </div>
  );
};
export default Yard;
