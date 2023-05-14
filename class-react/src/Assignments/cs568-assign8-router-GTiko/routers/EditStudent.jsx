import { useEffect, useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import Favorite from "../components/Favorites";
import Education from "../components/Education";
import { hobbiesList, educationList } from "../models/DataList";
import { NavBar } from "../components/NavBar";
import { HandleSubmitForEdit } from "../components/HandleEvents";
import SearchByName from "../components/SearchByEmail";

export default function EditStudent() {
  const [isNotFound, setIsNotFound] = useState(true);
  const [isFormHidden, setIsFormHidden] = useState(true);
  const [emailOfStudent, setEmailOfStudent] = useState("");
  let [hobbies, setHobbies] = useState([]);
  const [gender, setGender] = useState("");
  const [studentData, setStudentData] = useState(
    JSON.parse(localStorage.getItem("Student")) || []
  );

  hobbies = new Set(hobbies);
  hobbies = [...hobbies];

  const [student, setStudent] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    DOB: "",
    phoneNumber: "",
    email: "",
    favoriteColor: "#b456e6",
    colorName: "#b456e6",
    courseSatisfaction: 5,
    education: "",
    luckNumber: "",
    about: "",
  });

  function handleNameOfStudent(e) {
    setEmailOfStudent(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem("Student", JSON.stringify(studentData));
  }, [studentData]);

  return (
    <>
      <NavBar />
      <form
        onSubmit={(e) => {
          HandleSubmitForEdit(
            e,
            student,
            studentData,
            setStudentData,
            hobbies,
            gender,
            setEmailOfStudent,
            setIsFormHidden
          );
        }}
        hidden={isFormHidden}
      >
        <PersonalInfo
          student={student}
          setStudent={setStudent}
          gender={gender}
          setGender={setGender}
        />

        <Favorite
          student={student}
          setStudent={setStudent}
          hobbies={hobbies}
          setHobbies={setHobbies}
          hobbiesList={hobbiesList}
        />

        <div>
          <Education
            student={student}
            setStudent={setStudent}
            educationList={educationList}
          />

          <div style={{ textAlign: "center" }}>
            <button
              className="btn btn-success"
              onSubmit={(e) => {
                HandleSubmitForEdit(
                  e,
                  student,
                  studentData,
                  setStudentData,
                  hobbies,
                  gender,
                  setEmailOfStudent,
                  setIsFormHidden
                );
              }}
            >
              Update
            </button>
          </div>
        </div>
      </form>
      <br />

      <div style={{ textAlign: "center" }}>
        <div style={{ color: "red" }} hidden={isNotFound}>
          Student not Found
        </div>
        <input
          id="searchInput"
          type="email"
          name="emailOfStudent"
          placeholder="Enter email of student to edit"
          value={emailOfStudent}
          onChange={handleNameOfStudent}
        />
        &nbsp;
        <button
          className="btn btn-secondary"
          onClick={(e) => {
            SearchByName(
              e,
              studentData,
              emailOfStudent,
              setStudent,
              setGender,
              setHobbies,
              setIsFormHidden,
              setIsNotFound
            );
          }}
        >
          Search
        </button>
      </div>
    </>
  );
}
