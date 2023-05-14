import { useState } from "react";
import Counter from "./4_Counters";
import Items from "./counterData.json";

function MultiCounter() {
  const [counters, setCounters] = useState(Items);
  return (
    <div>
       <button className='btn btn-secondary btn-md m-2' onClick={()=>{reset(counters, setCounters)}}>reset</button>
      {counters.map((item) => (
        <div key={item.id}>
          <Counter value={item.value} onDelete={()=>{deleteCounter(item.id, setCounters, counters)}} counters={counters} />
        </div>
      ))}
    </div>
  ); 
}

function deleteCounter(id, setCounters, counters) {
  setCounters(counters.filter((i) => i.id !== id));
};
function reset(counters, setCounters){
  let x = [...counters]
  let y = x.map((c)=>{c.value = 0; return c; })
  console.log(x);
  setCounters(y);
};

export default MultiCounter;