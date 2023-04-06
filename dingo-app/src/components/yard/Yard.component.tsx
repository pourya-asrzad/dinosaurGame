import Styles from "./Yard.module.scss";
import bush1 from "../../assets/images/bush1.svg";
import bush2 from "../../assets/images/bush2.svg";
import bush3 from "../../assets/images/bush3.svg";
import Dingo from "../dingo/Dingo.component";
import { useState } from "react";
const Yard = () => {
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

  return (
    <div>
      <h1 className={Styles["game-header"]}>dinosaur game 🦕</h1>
      <div className={Styles.Yard}>
        <div className={Styles["playground"]}>
          <Dingo className={Styles["dinosaur"] + " " + Styles[dingoUp]} />
          <div className={Styles["bushes"]}>
            {/* <img src={bush1} alt="bush1" />
            <img src={bush2} alt="bush2" /> */}
            <img src={bush3} alt="bush3" />
          </div>
          <div className={Styles["hr"]}></div>
        </div>
      </div>
      ;
    </div>
  );
};
export default Yard;
