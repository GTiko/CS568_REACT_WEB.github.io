import { v4 as uuidv4 } from "uuid";
import ClearForm from "./ClearForm";

export function HandleSubmitForEdit(
  e,
  student,
  studentData,
  setStudentData,
  hobbies,
  gender,
  setNameOfStudent,
  setIsFormHidden
) {
  e.preventDefault();
  const newData = [...studentData];
  for (let each of newData) {
    if (each._id === student._id) {
      each.firstName = student.firstName;
      each.lastName = student.lastName;
      each.DOB = student.DOB;
      each.email = student.email;
      each.phoneNumber = student.phoneNumber;
      each.favoriteColor = student.favoriteColor;
      each.colorName = student.favoriteColor;
      each.courseSatisfaction = student.courseSatisfaction;
      each.education = student.education;
      each.hobbies = hobbies;
      each.gender = gender;
      each.luckNumber = student.luckNumber;
      each.about = student.about;
    }
  }
  setStudentData(newData);
  setNameOfStudent("");
  setIsFormHidden(true);
}

export function HandleSubmitForAdd(
  e,
  student,
  setStudent,
  hobbies,
  setHobbies,
  gender,
  setGender,
  studentData,
  setStudentData
) {
  e.preventDefault();
  let newStudent = {
    _id: uuidv4().slice(0, 5),
    firstName: student.firstName,
    lastName: student.lastName,
    DOB: student.DOB,
    phoneNumber: student.phoneNumber,
    email: student.email,
    favoriteColor: student.favoriteColor,
    colorName: student.favoriteColor,
    courseSatisfaction: student.courseSatisfaction,
    education: student.education,
    hobbies: hobbies,
    gender: gender,
    luckNumber: student.luckNumber,
    about: student.about,
  };
  console.log("newStd: ", newStudent);
  setStudentData([...studentData, newStudent]);
  ClearForm(setStudent, setGender, setHobbies);
}
