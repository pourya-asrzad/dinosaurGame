import Styles from "./Dingo.module.scss";

const Dingo = () => {
  return (
    <div className={Styles.dingo}>
      <div className={Styles.mainhead}>
        <div className={Styles.head_1}></div>
        <div className={Styles.head_2}>
          <div className={Styles.eye}></div>
        </div>
      </div>
      <div className={Styles.mouth}>
        <div className={Styles.head_4}></div>
        <div className={Styles.head_3}></div>
      </div>
      <div className={Styles.mouth_end}>
        <div className={Styles.head_5}></div>
        <div className={Styles.head_6}></div>
      </div>
      <div className={Styles.body_1_container}>
        <div className={Styles.body_1}></div>
        <div className={Styles.body_2}></div>
      </div>
      <div className={Styles.body_3_container}>
        <div className={Styles.body_4_F}></div>
        <div className={Styles.body_4_W}></div>
        <div className={Styles.body_3}></div>
        <div className={Styles.body_4}></div>
      </div>
      <div className={Styles.body_4_container}>
        <div className={Styles.body_5_F}></div>
        <div className={Styles.body_5_W}></div>
        <div className={Styles.body_4_2}></div>
        <div className={Styles.body_5}></div>
        <div className={Styles.Body_hand_5}></div>
      </div>
      <div className={Styles.Body_hand_side}>
        <div className={Styles.Body_hand_1}></div>
        <div className={Styles.Body_hand_2}></div>
        <div className={Styles.Body_hand_3}></div>
        <div className={Styles.Body_hand_4}></div>
      </div>
      <div className={Styles.body_main}>
        <div className={Styles.body_main_1}></div>
        <div className={Styles.body_main_2}></div>
      </div>
    </div>
  );
};

export default Dingo;
