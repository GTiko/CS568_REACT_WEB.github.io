import Student from "./Student.js";
import { minutesInHour, sayHi } from "./helper.js";

//  #1

const power = (base, exp) => Math.pow(base, exp);
console.log("#1   :  " + power(2, 3));

//  #2

const Person1 = {
  name: "",
  grade: [],
  setName: function (name) {
    this.name = name;
  },
  setGrade: function (...grade) {
    this.grade = [...grade];
  },
};
const Person2 = {
  name: "",
  grade: [],
};
Person1.setName.call(Person2, "Mesiye");
Person1.setGrade.apply(Person2, [90, 95, 98]);
console.log("#2.1 :  " + Person2.name);
console.log("#2.2 :  [" + Person2.grade + "]");

//  #3

const student1 = new Student("Bob");
console.log("#3.1 :  " + student1.sayHi());
console.log("#3.2 :  " + student1.sayYourAge());
console.log("#3.3 :  " + sayHi());
console.log("#3.4 :  " + minutesInHour);

//  #4

const obj = {
  name: "name",
  age: "age",
};

function sayMyName({ name }) {
  console.log("#4   :  " + name);
}

sayMyName(obj);

//  #5

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [2, 4, 5, 6, 7, 8];
const arr = new Set([...arr1, ...arr2]);
console.log("#5   :  " + [...arr]);

//  #6

//  # Splice
const days = ["monday", "tuesday", "thursday", "friday", "saturday", "sunday"];
days.splice(2, 0, "wednesday");
console.log(days);

//  # Split
const text = "the quick brown fox jumps over the lazy dog";
const textArr = text.split(" ");
console.log(textArr);

//  # Map
const number = [2, 5, 9];
const pow = number.map((item) => item * item);
console.log(pow);

//  # find
const item = days.find((day) => day == "monday");
console.log(item);

//  # findIndex
const index = days.findIndex((day) => day == "sunday");
console.log(index);

//  # filter
const filterArr = days.filter((day) => day == "sunday");
console.log(filterArr);

//     Main task
let data = [
  {
    id: 1,
    name: "Mr. A",
  },
  {
    id: 2,
    name: "Mr. B",
  },
  {
    id: 3,
    name: "Mr. C",
  },
  {
    id: 4,
    name: "Mr. D",
  },
];

const newValue = data.filter((item) => item.id != 1);
console.log(newValue);
