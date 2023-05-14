import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import stdList from "./data.json";

function UnOrdered() {
  let [students, setStudents] = useState(stdList);
  if(stdList.length === 0) return<>{stdList.length === 0 && "Please create a new tag"}<h1>There are no</h1></>
  return (
    <>
      <h1>Students Of MIU</h1>
      <ul>
        {students.map((std) => (
          <li key={std.id}>
            name: {std.name}, Address: {std.address}
            <button style={{marginLeft:10}} onClick={() => deleteStd(std.id)}>delete</button>
            <button style={{marginLeft:10}} onClick={()=>{updateStd(std.id)}}>update</button>
          </li>
        ))}
      </ul>
    <StudentForm setStudents = {setStudents} students = {students}/>
    </>
  );
  function deleteStd(id) {
    setStudents(students.filter((std) => std.id !== id));
  }
  function updateStd(id) {}
}

function StudentForm({setStudents, students}){
    let [name, setName] = useState("");
    let [address, setAddress] = useState("");
    
    const std = {id :uuidv4(), name : name, address: address};
    const newStudents = [...students];
    newStudents.push(std);
   
    return(
       <>
        <input type="text" placeholder="name" value={name} onChange={e=> setName(e.target.value)}/>
        <input type="text" placeholder="address" value={address} onChange={e=>setAddress(e.target.value)}/><br/>
        <button onClick={()=>{setStudents(newStudents)}}>create students</button>
       </>
   );
}

export default UnOrdered;