import { useState } from "react";
import studentData from "./studentData.json";
import AddStd from "./studentAdd";
import "./student.css"

function Students() {
  const [student, setStudent] = useState(studentData);
  return (
    <div className="Center">
      <AddStd student={student} setStudent={setStudent} />
    </div>
  );
}

export default Students;