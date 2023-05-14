export default function ClearForm(setStudent, setGender, setHobbies) {
  setStudent({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    DOB: "",
    email: "",
    favoriteColor: "#b456e6",
    colorName: "#b456e6",
    courseSatisfaction: 5,
    education: "",
    about: "",
    luckNumber: "",
  });
  setGender("");
  setHobbies([]);
}
