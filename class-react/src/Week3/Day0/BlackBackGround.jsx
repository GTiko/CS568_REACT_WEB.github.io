import { useState } from "react";

export default function BlackBackGround() {
  const [invertColor, setInvertColor] = useState({
    color: "white",
    btnColor: "black",
    btnBackGround: "white",
    backGroundColor: "black",
  });

  const btnArr = document.getElementsByTagName("button");
  for (let each of btnArr) {
    each.style.color = invertColor.btnColor;
    each.style.backgroundColor = invertColor.btnBackGround;
  }
  document.body.style.color = invertColor.color;
  document.body.style.backgroundColor = invertColor.backGroundColor;

  function changeMode() {
    setInvertColor({
      btnColor: invertColor.btnColor === "black" ? "white" : "black",
      color: invertColor.color === "black" ? "white" : "black",
      btnBackGround: invertColor.btnBackGround === "white" ? "black" : "white",
      backGroundColor: invertColor.backGroundColor === "black" ? "white" : "black",
    });
  }

  return (
    <div style={{ color: invertColor.color }}>
      Hello there
      <button onClick={changeMode}>btn1</button>
    </div>
  );
}
