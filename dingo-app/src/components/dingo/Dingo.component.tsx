import dinasour from "../../assets/images/dinasour.svg";
type dingo = {
  className?: string;
};
const Dingo = ({ className }: dingo) => {
  return <img className={className} src={dinasour} alt="" />;
};

export default Dingo;
