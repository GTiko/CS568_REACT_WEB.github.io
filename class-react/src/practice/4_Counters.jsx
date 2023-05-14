import React, { useState } from 'react';

function Counter(props){
  const [count, setCount] = useState(props.value);
  let color = "badge m-2 badge-"
  color += (count === 0) ? "warning" : "primary";
  // console.log(props.counters)
  return(
    <>
    <h2 className={color} style={{fontSize:30}}>{count <= 0 ? 0 :count}</h2>
    <button className='btn btn-secondary btn-md m-2' onClick={()=>{setCount(count+1)}}>Increment</button>
    <button className='btn btn-secondary btn-md m-2' onClick={()=>{setCount(count <= 0 ? 0 : count-1)}}>Decrement</button>
    <button className='btn btn-danger btn-md m-2' onClick={()=>props.onDelete(props.id)}>delete</button>    
    </>
  );
}

export default Counter;