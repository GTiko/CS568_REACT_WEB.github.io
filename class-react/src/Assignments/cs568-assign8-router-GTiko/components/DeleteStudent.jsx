export default function DeleteStudent(id, studentsData, setStudentsData) {
  const existingStd = studentsData.filter((std) => std._id !== id);
  setStudentsData(existingStd);
}
