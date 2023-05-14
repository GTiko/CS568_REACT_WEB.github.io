import { useReducer } from "react";

const InitialState = {
  name: "Bob",
  age: 10,
  salary: 1000,
};

function reducer(state, action) {
  switch (action.type) {
    case "IncAge": {
      return {
        ...state,
        age: state.age + 1,
      };
    }
    case "ChangeName": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "IncSalary": {
      return {
        ...state,
        salary: state.salary + 100,
      };
    }

    default:
      return { state };
  }
}

export default function ReducerApp() {
  const [state, despatch] = useReducer(reducer, InitialState);
  function handleInputName(e) {
    despatch({
      type: "ChangeName",
      payload: e.target.value,
    });
  }
  return (
    <>
        name : {state.name} <br/>
        <input type="text"  onChange={handleInputName}/>
        <button onClick={handleInputName} >change name</button> <br/>
        age : {state.age}
        <button onClick={()=>{despatch({type:"IncAge"})}} >Increase Age</button> <br/>
        salary : {state.salary}
        <button onClick={()=>{despatch({type:"IncSalary"})}} >Increase salary</button> <br/>
    </>
  );
}
