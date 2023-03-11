import { FiMoon } from "react-icons/fi";
import { BsSunFill } from "react-icons/bs";
import { useState } from "react";

export default function DarkMode(props) {
  const [IsDark, setIsDark] = useState(props.dark);
  const modeSwitch = () => {
    setIsDark((prev) => !prev);
    const container = document.querySelector("#general");
    // const dark = container.classList.contains(".dark");
    if (container.classList.contains("dark")) {
      container.classList.remove("dark");
      container.classList.add("light");
    } else {
      container.classList.remove("light");
      container.classList.add("dark");
    }
    // if (container && dark) {
    //   container.removeAttribute("id");
    //   container.setAttribute("id", "light");
    // } else {
    //   container.removeAttribute("id");
    //   container.setAttribute("id", "dark");
    // }
  };

  return (
    <div className="btn" onClick={modeSwitch}>
      {IsDark ? <BsSunFill size="50px" /> : <FiMoon size="50px" />}
    </div>
  );
}
