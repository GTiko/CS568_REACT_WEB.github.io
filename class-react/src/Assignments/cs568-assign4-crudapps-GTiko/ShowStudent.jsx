function ShowStd(props) {
    return (
    <>
    <h1>Student List</h1>
      <table >
        <thead>
        <tr>
          {props.student.length !== 0 ?
            <>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Remove</th>
              <th>Update</th>
            </>
           :
           <th><h1>Student List is empty</h1></th>
          }
          </tr>
        </thead>
        {props.student.map((std) => (
          <thead key={std.id}>
            <tr>
              <td> {std.id} </td>
              <td> {std.name} </td>
              <td> {std.age} </td>
              <td>
                <button
                  className="btn btn-danger m-1 " onClick={() => {
                    deleteStd(std.id, props.setStudent, props.student);
                  }} > delete
                </button>
              </td>
              <td>
              <button
                className="btn btn-primary m-1 "  onClick={()=>{
                updateStd(std.id, std.name, std.age, props.setId, props.setAge, props.setName, props.setPermission, props.setUpdatePermission)
              }} > update</button>
              </td>
            </tr>
          </thead>
        ))}
      </table><br/>
    </>
  );
}

function deleteStd(id, setStudent, student) {
  setStudent(student.filter((std) => std.id !== id));
}

function updateStd(id, name, age, setId, setAge, setName, setPermission, setUpdatePermission) {
  setAge(age);
  setName(name);
  setId(id);
  setPermission(true);
  setUpdatePermission(false);
}

export default ShowStd;