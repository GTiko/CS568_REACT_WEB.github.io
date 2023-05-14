export default function SearchByName(
  e,
  studentData,
  emailOfStudent,
  setStudent,
  setGender,
  setHobbies,
  setIsFormHidden,
  setIsNotFound
) {
  e.preventDefault();
  const std = studentData.find((each) => each.email === emailOfStudent);
  if (std) {
    setStudent({
      _id: std._id,
      firstName: std.firstName,
      lastName: std.lastName,
      DOB: std.DOB,
      email: std.email,
      phoneNumber: std.phoneNumber,
      favoriteColor: std.favoriteColor,
      colorName: std.favoriteColor,
      courseSatisfaction: std.courseSatisfaction,
      education: std.education,
      luckNumber: std.luckNumber,
      about: std.about,
    });
    setGender(std.gender);
    setHobbies(std.hobbies);
    setIsFormHidden(false);
    setIsNotFound(true);
    document.getElementById("searchInput").style.borderBlockColor = "";
  } else {
    setIsNotFound(false);
    document.getElementById("searchInput").style.borderBlockColor = "red";
    setIsFormHidden(true);
  }
}
