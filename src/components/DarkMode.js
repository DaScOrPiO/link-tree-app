import { FiMoon } from "react-icons/fi";
import { BsSunFill } from "react-icons/bs";
import { useState } from "react";

export default function DarkMode(props) {
  const [IsDark, setIsDark] = useState(props.dark);
  const modeSwitch = () => {
    setIsDark((prev) => !prev);
    const container = document.querySelector(".general");
    const dark = document.querySelector('#dark')
    if (container && dark) {
      container.removeAttribute("id");
      container.setAttribute("id", "light");
    } else {
      container.removeAttribute("id");
      container.setAttribute("id", "dark");
    }
  };

  return (
    <div className="dark" onClick={modeSwitch}>
      {IsDark ? <BsSunFill size="50px" /> : <FiMoon size="50px" />}
    </div>
  );
}
