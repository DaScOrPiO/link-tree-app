import { FiMoon } from "react-icons/fi";
import { BsSunFill } from "react-icons/bs";

export default function DarkMode(props) {
 

  return (
    <div className="dark" onClick={props.handleClick}>
      {props.dark ? <BsSunFill size="50px" /> : <FiMoon size="50px" />}
    </div>
  );
}
