[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/KYEvFlgB)
# CS568 - Assignment 1 - ES6

## Microtasks
It is a nice refresher on ES6. There are 6 micrsotasks.

1. Create arrow functions with zero, one, multiple parameters. Return values with/without curly brackets.
2. Practice call/bind/apply. Borrow and carry a function.
3. Implement a child class and super class. NodeJS is the fastest way to execute your code. Refer the following code. You just need package.json.

*package.json*
```
{
  "name": "lesson-1",
  "version": "1.0.0",
  "type": "module"
}
```
*Person.js*
```
class Person {
  constructor(age){
    this.age = age;
  }
  sayYourAge = () => 'My age is ' + this.age;
}
export default Person;
```
*Student.js*
```
import Person from './person.js';
class Student extends Person {
 constructor(name) {
   super(17);
   this.name = name;
 }
 sayHi = () => `Hi. I am ${this.name} and ${this.age} years old`;
}
export default Student;
```

*App.js*
```
import Student from './student.js';
import {minutesInHour} from './helper.js';
import {sayHi} from './helper.js';

const student1 = new Student('Bob');
console.log(student1.sayHi());
console.log(student1.sayYourAge());
console.log(sayHi());
console.log(minutesInHour);
```

4. Practice destructuring.
```
function sayHi({name}) ...

const obj = {
  name: 'name',
  age: 'age'
}

sayHi(obj);
```
5. Practice spread operator.
6. Practice splice, slice, map, find, findIndex, filter array methods. 

## Main task
Write code that **finds an object in an array then removes it by its id**. In this course, you will be writing a simple app with CRUD operations. Do this task seriously and use the same technique in the coming classes.

The Student object:
```
{
  "id": "your student id" // it is unique. You can find an object by this id
  "name": "your name"
}
```

The array is consists of the Student objects.

