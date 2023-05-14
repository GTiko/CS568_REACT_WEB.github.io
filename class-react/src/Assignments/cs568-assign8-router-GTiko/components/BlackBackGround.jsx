import { useEffect, useState } from "react";

export default function BlackBackGround() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("Theme")) || [
      { color: "black", backGroundColor: "white" },
    ]
  );

  useEffect(() => {
    localStorage.setItem("Theme", JSON.stringify(theme));
  }, [theme]);

  const [invertColor, setInvertColor] = useState({
    color: theme[0].color === "black" ? "white" : "black",
    backGroundColor:
      theme[0].backGroundColor === "#000033" ? "white" : "#000033",
  });

  document.body.style.color = theme[0].color;
  document.body.style.backgroundColor = theme[0].backGroundColor;

  function changeMode() {
    setInvertColor({
      color: invertColor.color === "white" ? "black" : "white",
      backGroundColor:
        invertColor.backGroundColor === "#000033" ? "white" : "#000033",
    });

    setTheme([
      {
        color: invertColor.color,
        backGroundColor: invertColor.backGroundColor,
      },
    ]);
  }

  return (
    <span style={{ color: invertColor.color }}>
      <button id="theme" className="btn btn-secondary" onClick={changeMode}>
        Theme
      </button>
    </span>
  );
}
