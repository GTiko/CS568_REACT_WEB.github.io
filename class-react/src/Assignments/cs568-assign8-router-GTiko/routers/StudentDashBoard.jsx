import { useEffect, useState } from "react";
import DeleteStudent from "../components/DeleteStudent";
import { useNavigate } from "react-router-dom";
import { DashBoardNavBar } from "../components/NavBar";

export default function StudentDashBoard() {
  const [studentsData, setStudentsData] = useState(
    JSON.parse(localStorage.getItem("Student")) || []
  );
  const navigate = useNavigate();
  function detail(id, firstName) {
    navigate(`/students/${id}`, { state: { firstName: firstName } });
  }

  useEffect(() => {
    localStorage.setItem("Student", JSON.stringify(studentsData));
  }, [studentsData]);
  return (
    <>
      <DashBoardNavBar />
      <table>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Full Name</th>
            <th>Detail</th>
            <th>Delete</th>
          </tr>
        </thead>
        <thead>
          {studentsData.map((std) => (
            <tr key={std._id}>
              <td>{std._id}</td>
              <td>
                {std.firstName} {std.lastName}
              </td>
              <td>
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => {
                    detail(std._id, std.firstName);
                  }}
                >
                  Detail
                </button>
              </td>
              <td style={{ width: 150 }}>
                <button
                  className="btn btn-danger w-100"
                  onClick={() => {
                    DeleteStudent(std._id, studentsData, setStudentsData);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </>
  );
}
