import { useEffect, useState } from "react";
import "./ToDoList.css";
import {v4 as uuidv4 } from 'uuid'

function ToDoList() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("Todo" || [])));
  const [id, setId] = useState("");
  const [day, setDay] = useState("");
  const [activity, setActivity] = useState("");
  const [status, setStatus] = useState("");
  let [isAddHidden, setIsAddHidden] = useState(false);
  let [isEditHidden, setIsEditHidden] = useState(true);

    useEffect(()=>{
        localStorage.setItem("Todo", JSON.stringify(data))
    },[data])

  return (
    <>
      {data.length === 0 ? (
        <>
          <h1>No todo to complete </h1>
          <table>
          <thead>
        <tr>
          <td>
            <input type="text" value={id} 
              placeholder="Id" disabled={true}
              />
          </td>
          <td>
            <input type="text" 
              placeholder="Day" value={day} 
              onChange={e=>setDay(e.target.value)}
            />
          </td>
          <td>
            <input type="text"  
              placeholder="Activity" value={activity}
              onChange={(e)=>{setActivity(e.target.value)}}
              />
          </td>
          <td>
            <input type="text"  
              placeholder="Status" value={status}
              onChange={(e)=>{setStatus(e.target.value)}}
            />
          </td>
          <td id="AddUpdate">
            <button 
            className="btn btn-secondary" hidden={isAddHidden}
            onClick={()=>{AddTodo({id:uuidv4().slice(0,4), day, activity, status})}}
            >Add</button>

            <button 
            className="btn btn-success" hidden={isEditHidden}
            onClick={()=>{updateTodo({id, day, activity, status})}}
            >Update</button>
          </td>
        </tr>
      </thead>
          </table>
        </>
      ) : (
        <>
          <h1>Todo's</h1>
        <table>
          <thead>
          <tr>
          <td>
            <input type="text" value={id}
              placeholder="Id" disabled={true}
              />
          </td>
          <td>
            <input type="text" 
              placeholder="Day" value={day}
              onChange={e=>setDay(e.target.value)}
            />
          </td>
          <td>
            <input type="text"  
              placeholder="Activity" value={activity}
              onChange={(e)=>{setActivity(e.target.value)}}
              />
          </td>
          <td>
            <input type="text"  
              placeholder="Status" value={status}
              onChange={(e)=>{setStatus(e.target.value)}}
            />
          </td>
          <td id="AddUpdate">
            <button 
            className="btn btn-secondary" hidden={isAddHidden}
            onClick={()=>{AddTodo({id:uuidv4().slice(0,4), day, activity, status})}}
            >Add</button>

            <button 
            className="btn btn-success" hidden={isEditHidden}
            onClick={()=>{updateTodo({id, day, activity, status})}}
            >Update</button>
          </td>
          </tr>
         </thead>
            <thead>
              <tr>
                <th>Id</th>
                <th>Day</th>
                <th>Activity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <thead>
              {data.map((each) => (
                <tr key={each.id}>
                  <td>{each.id}</td>
                  <td>{each.day}</td>
                  <td>{each.activity}</td>
                  <td>{each.status}</td>
                  <td id="deleteEdit">
                    <button className="btn btn-warning"
                    onClick={()=>{editTodo(each.id)}}
                    >Edit</button>

                    <button className="btn btn-danger"
                    onClick={()=>{deleteTodo(each.id)}}
                    >Delete</button>
                  </td>
                </tr>
              ))}
            </thead>
          </table>
        </>
      )}
    </>
  );

  function clearValues(){
    setActivity("");
    setStatus("");
    setDay("");
    setId("");
  }

  function AddTodo(todoValues){
    if(todoValues.activity === ""){
        
    }
    let newData = [...data];
    newData.push(todoValues);
    setData(newData);
    clearValues();
    }

    function deleteTodo(id){
        setData(data.filter(each=> each.id !== id));
    }

    function editTodo(id){
        const toEdit = data.find(each => each.id === id);
        setActivity(toEdit.activity);
        setStatus(toEdit.status);
        setDay(toEdit.day);
        setId(toEdit.id);
        setIsEditHidden(false);
        setIsAddHidden(true);
    }

    function updateTodo(valueToUpdate){
        let newData = [...data];
        for(let each of newData){
            if(each.id === valueToUpdate.id){
                each.activity = valueToUpdate.activity;
                each.day = valueToUpdate.day;
                each.status = valueToUpdate.status;
                break;
            }
        }
        setData(newData);
        setIsAddHidden(false);
        setIsEditHidden(true);
        clearValues()
    }
}

export default ToDoList;