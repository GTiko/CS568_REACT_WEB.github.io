export function ToDoList() {
  return (
    <>
      <h1>todo</h1>
      <input type="text" id="input" />
      <button onClick={AddToDo}>+</button>
    </>
  );
}

function AddToDo() {
  const root = document.getElementById("root");
  const div = document.createElement("div");
  let input = document.getElementById("input").value;
  div.innerHTML += `<input type='radio'> ${input} <button>delete</button><br/>`;
  return root.append(div);
}
