import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

// Week1 - Week2
// import Image from './practice/1_images';
// import Counter from './practice/2_Counter';
// import UnOrdered from './practice/3_Unordered';
// import Counter from './practice/4_Counters';
// import MultiCounter from './practice/5_MultiCounter';
// import Students from './Assignments/cs568-assign4-crudapps-GTiko/Students';
// import ToDoList from './Week2Practice/1_ToDo/ToDoList';
// import StudentForm from './Assignments/cs568-assign6-forms-GTiko/StudentForm';
import StudentForm from './Assignments/cs568-assign7-axios-GTiko/StudentFrom';
// import MovieApp from './Week2Practice/3_ExamPractice/MovieApp';
// import CheckBox from './Week2Practice/4_ChexBox/CheckBox';
// import RouterApp from "./Week3/Day1/RouterApp";

// Week3
    // Assign 8
// import BlackBackGround from "./Week3/Day0/BlackBackGround";
// import StudentApp from "./Assignments/cs568-assign8-router-GTiko/StudentsApp";

// import ReducerApp from "./Week3/day2/1_Reducer/Reducer";

    // Assign 9
// import LazyApp from "./Assignments/cs568-assign9-hoc-GTiko/LazyApp";
// import ClassBasedWithCountApp from "./Assignments/cs568-assign9-hoc-GTiko/classBasedWithCountApp";
// import FunctionalWithCountApp from "./Assignments/cs568-assign9-hoc-GTiko/functionalWithCountApp";


// import Day3 from "./Week3/day3/day3";
// import TestUserLoaderData from "./Week3/day3/1_useLoader/TestUseLoaderApp";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* Week1-Week2 */}
    {/* <Image/> */}
    {/* <Counter /> */}
    {/* <UnOrdered/> */}
    {/* <Counter/> */}
    {/* <MultiCounter/> */}
    {/* <Students/> */}
    {/* <ToDoList/> */}
    {/* <StudentForm/> */}
    <StudentForm/>
    {/* <MovieApp/> */}
    {/* <CheckBox/> */}

    {/* Week3 */}
    {/* <BlackBackGround/> */}
    {/* <RouterApp/> */}

{/* Assign 8 */}
    {/* <StudentApp/> */}

{/*Practice on useReducer  */}
    {/* <ReducerApp/> */}

{/* Assign 9 */}
    {/* <LazyApp/> */}
    {/* <FunctionalWithCountApp/> */}
    {/* <ClassBasedWithCountApp/> */}

{/* <Day3/> */}
    {/* <TestUserLoaderData/> */}
  </>
);

reportWebVitals();
