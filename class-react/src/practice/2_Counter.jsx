import { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);
    // const style = {
    //   fontSize:30,
    //   fontWeight:"bold"
    // }
  let x = "badge m-2 badge-"
  x += (count === 0) ? "warning" : "primary"

  return (
    <>
      <h1 style={{fontSize:30}}  className={x} >{format(count)}</h1><br/>
      <button className="btn btn-secondary btn-md m-2" onClick={()=>{setCount(IncrementByOne(count))}}>Increment</button>
      <button className="btn btn-secondary btn-md m-2" onClick={()=>{setCount(DecrementByOne(count))}}>Decrement</button>
    </>
  );
}
function format(count){
  return count === 0 ? "zero" : count < 0 ? 0 : count;
}
function IncrementByOne(count){
    return ++count;
}
function DecrementByOne(count){
  return count <= 0 ? 0 : --count;
}
export default Counter;