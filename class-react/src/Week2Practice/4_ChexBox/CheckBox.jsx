import { useState } from "react";

export default function CheckBox() {
  const [hobbies, setHobbies] = useState([]);

  function handleChange(e){
    const {value, checked} = e.target;
    if(checked){
        const newHobbies = [...hobbies, value];
        setHobbies(newHobbies);
    }else{
        const newHobbies = [...hobbies];
        const item = newHobbies.filter(each => each !== value);
        setHobbies(item);
    }
  }
console.log(hobbies);

//   const onKeyDown = (e) => {
//     if (isNaN(e.key) && e.keyCode !== 8 && e.keyCode !== 46){
//         console.log(e.key)
//     }
// };

  
  return (
  <form >
    Hobbies : <br /> 
    <input type="checkbox"  name="soccer" value="Soccer" onChange={handleChange}/> Soccer <br /> 
    <input type="checkbox"  name="soccer" value="Foot ball" onChange={handleChange}/> Foot Ball  <br /> 
    <input type="checkbox"  name="soccer" value="Basket Ball" onChange={handleChange}/> Basket Ball <br /> 
    <input type="checkbox"  name="soccer" value="Base Ball" onChange={handleChange}/> Base Ball <br /> 
     
    {/* <input type="text" onKeyDown={(e)=>onKeyDown(e)}/> <br />  */}

    {/* <label>Username (must be at least 5 characters):</label>
    <input type="text" id="username" name="username" minLength="5"></input>
    <input type="number" min={0} max={3} /> */}
    <button type="submit">submit</button>
  </form>
  );
}
