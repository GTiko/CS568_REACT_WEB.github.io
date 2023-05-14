const Student1 = {
  name: "",
  age: "",
  setName: (name) => {
    this.name = name;
  },
  setAge: (age) => {
    this.age = age;
  },
  getAllData: () => {
    return this.name + ", " + this.age;
  },
};

const Student2 = {
  name: "",
  age: "",
};

Student1.setName.call(Student2, "Bob");
Student1.setAge.call(Student2, 23);

console.log(Student1.getAllData.call(Student2));