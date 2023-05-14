import { useState, useEffect } from "react";
import PersonalInfo from "../components/PersonalInfo";
import Favorite from "../components/Favorites";
import Education from "../components/Education";
import { hobbiesList, educationList } from "../models/DataList";
import { NavBar } from "../components/NavBar";
import { HandleSubmitForAdd } from "../components/HandleEvents";

export default function AddStudent() {
  const [studentData, setStudentData] = useState(
    JSON.parse(localStorage.getItem("Student")) || []
  );
  const [hobbies, setHobbies] = useState([]);
  const [gender, setGender] = useState("");
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

  useEffect(() => {
    localStorage.setItem("Student", JSON.stringify(studentData));
  }, [studentData]);

  return (
    <>
      <NavBar />

      <form
        onSubmit={(e) => {
          HandleSubmitForAdd(
            e,
            student,
            setStudent,
            hobbies,
            setHobbies,
            gender,
            setGender,
            studentData,
            setStudentData
          );
        }}
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

          <button
            className="btn btn-secondary"
            onSubmit={(e) => {
              HandleSubmitForAdd(
                e,
                student,
                setStudent,
                hobbies,
                setHobbies,
                gender,
                setGender,
                studentData,
                setStudentData
              );
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
