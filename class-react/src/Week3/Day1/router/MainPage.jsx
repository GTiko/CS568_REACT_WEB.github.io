import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function MainPage() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  function sendData() {
    navigate("/page1", { state: { name: name } });
  }

  return (
    <>
      <h1>Main Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={sendData}>useNavigate</button>
      <Link></Link>
    </>
  );
}
