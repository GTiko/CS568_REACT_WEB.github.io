import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export default function ShowStudentDetails() {
  const [studentData] = useState(
    JSON.parse(localStorage.getItem("Student")) || []
  );

  const { studentId } = useParams();
  const { state } = useLocation();

  const std = studentData.find((each) => each._id === studentId);

  return (
    <div>
      <NavBar />
      {!std ? (
        <h2 style={{ color: "red" }}>Student Doesn't exist</h2>
      ) : (
        <div style={{ marginLeft: "40%" }}>
          <h2 style={{ color: "blue" }}>
            Student Details for {state.firstName}
          </h2>
          <ul>
            <li>First Name: {std.firstName}</li>
            <li>Last Name: {std.lastName}</li>
            <li>Date Of Birth: {std.DOB}</li>
            <li>Email: {std.email}</li>
            <li>Phone Number: {std.phoneNumber}</li>
            <li>Favorite Color: {std.favoriteColor}</li>
            <li>Course Satisfaction: {std.courseSatisfaction}</li>
            <li>Education: {std.education}</li>
            <li>
              Hobbies:
              <ul>
                {std.hobbies.map((each, index) => (
                  <li key={index}>{each}</li>
                ))}
              </ul>
            </li>
            <li>Lucky Number: {std.luckNumber}</li>
            <li>About: {std.about}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
