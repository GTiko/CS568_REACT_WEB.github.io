import { useState } from "react";
export default function Increment() {
  let [counter, setCounter] = useState([{ name: "Mesiye", id: 1 }]);
  return (
    <>
      <div>counter: {counter[0].id}</div>
      <button onClick={incrementByOne}>Increment</button>
    </>
  );
  function incrementByOne() {
    const newCount = [...counter];
    newCount[0].id++;
    setCounter(newCount);
  }
}
