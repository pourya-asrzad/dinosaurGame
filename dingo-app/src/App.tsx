import Dingo from "./components/dingo/Dingo.component";
import bush1 from "./assets/images/bush1.svg";
import bush2 from "./assets/images/bush2.svg";
import bush3 from "./assets/images/bush3.svg";
function App() {
  return (
    <div>
      <img src={bush1} alt="" />
      <img src={bush2} alt="" />
      <img src={bush3} alt="" />
      <Dingo />
    </div>
  );
}

export default App;
