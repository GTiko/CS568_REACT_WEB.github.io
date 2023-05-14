import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ShowStd from "./ShowStudent";

function AddStd(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");
    const [addPermission, setAddPermission] = useState(false);
    const [updatePermission, setUpdatePermission] = useState(true);

    function clearProperty(){
      setAge("");
      setName("");
      setId("");
    }

    useEffect(()=>{
      console.log("student displayed")
    },[])

  return (
    <>
      <ShowStd student={props.student} setStudent={props.setStudent} 
      setAge={setAge} setName={setName} setId={setId} setPermission={setAddPermission} setUpdatePermission={setUpdatePermission}/>
      
      <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br />
      <input type="number" placeholder="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/><br />
      
      <button  
      className="btn btn-secondary  mt-3" disabled={addPermission}
      onClick={()=>{addStd(name, age, props.setStudent, props.student, clearProperty)}}
      >Add student</button><br/><br/>
      
      <input type="text" placeholder="id" value={id} onChange={(e)=>{setName(e.target.value)}} disabled="disabled" /><br />

      <button 
      className="btn btn-secondary  mt-3" disabled={updatePermission}
      onClick={()=>{updateStd(props.student,props.setStudent, name, age, id, clearProperty, setAddPermission, setUpdatePermission)}}
      >Update</button>
    </>
  );
}

function addStd(name, age, setStudent, student, clearProperty){
    let newStdArr = [...student];
    let newStd = {id:uuidv4(), name:name, age:age}
    let item = student.find(std => std.name === name && std.age === age);
    if(!item && name !== ""){
      newStdArr.push(newStd);
      setStudent(newStdArr);
      clearProperty();
    }else{
      console.log("empty input or user already exists!");
      clearProperty();
    }
}



function updateStd(student, setStudent, name, age, id, clearProperty, setPermission, setUpdatePermission){
  let newStd = [...student];
  for(let each of newStd){
    if(each.id === id){
      each.name = name;
      each.age = age;
      break;
    }
  }
  setStudent(newStd);
  setPermission(false);
  setUpdatePermission(true);
  clearProperty();
}

export default AddStd;