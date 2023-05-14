import { useEffect, useState } from "react";
import {v4 as uuid4 } from "uuid";
import React from "react";
import "./StudentForm.css";
// import axios from "axios";


function StudentForm() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("RegistrationData")) || []);
    const [hobbies, setHobbies] = useState([]);
    const [gender, setGender] = useState("");
    const MIN_DOB = "2000-12-30";
    const MAX_DOB = "2029-12-30";
    const [student, setStudent] = useState({
        fName:"",
        lName:"",
        DOB:"",
        phoneNumber:"",
        color:"#2e6076",
        colorName:"",
        range:50,
        education:"",
        luckNumber:"",
        about:""
    });
    
    const hobbiesList = ["Basketball", "motorcycle", "pool billiards"];
    const educationList = ["high school", "collage", "bachelor", "master", "doctor"];

    useEffect(()=>{
        // localStorage.setItem("RegistrationData", JSON.stringify(data));
    }, [data]);

  return(
    <main>
        <h1>Register Form</h1>
        <form onSubmit={handelSubmit}>

            <div id="fullName">
                first name: 
                <input 
                    required
                    type="text" 
                    name="fName"
                    value={student.fName}
                    placeholder="First name" 
                    onChange={handleEvents}
                /><br />
                last name: 
                <input  
                    required
                    type="text"  
                    name="lName"
                    value={student.lName}
                    placeholder="Last name"
                    onChange={handleEvents}
                /><br />
            </div>
            <div id="phone">
                phone number: 
                <input 
                    required
                    type="tel" 
                    name="phoneNumber"
                    value={student.phoneNumber}
                    placeholder="123-45-678"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                    onChange={handleEvents}
                /> <br />
            </div>

            <div id="DOB">
                birth date: 
                <input 
                    required
                    type="date"
                    name="DOB"
                    min={MIN_DOB}
                    max={MAX_DOB}
                    value={student.DOB}
                    onChange={handleEvents}
                /><br />
            </div>

            <div id="color">
                favorite color:
                <input 
                    type="color" 
                    name="color"
                    value={student.color}
                    onChange={handleEvents}
                /> 
                <input 
                    type="text" 
                    name="color"
                    value={student.color}
                    disabled = {true}
                    placeholder="color number"
                    onChange={handleEvents}
                /><br />
            </div>
            
            <div id="courseScore">
                Course satisfaction score:
                <input 
                    type="range"
                    name="range"
                    value={student.range}
                    onChange={handleEvents}
                /><span>{student.range}</span><br />
            </div>

            <div id="education">
            education:
                <select value={student.education} name="education" onChange={handleEvents}>
                     {
                     educationList.map(each =>
                        <option key={each} value={each} name={each}>{each}</option>  
                    )}
                </select> <br />
            </div>

            <div id="hobbies">
            hobbies:
                {hobbiesList.map(each => 
                    <label key={each}>&nbsp; 
                       <input 
                       type="checkbox" 
                       value={each}
                       name={each}
                       onChange={handleHobbies}
                       /> <span> {each} </span> &nbsp;
                    </label>
                )}
            </div>
            
            <div id="gender">
            gender: &nbsp;
                <input
                    type="radio" 
                    name="male"
                    value="male"
                    checked={gender === "male"} 
                    onChange={handleGender}/> male &nbsp;
                <input 
                    type="radio"
                    name="female"
                    value= "female"
                    checked={gender === "female"}
                    onChange={handleGender} /> female 
            </div><br />

            <div>
            Lucky number:
                <input 
                type="number"
                name= "luckNumber"
                value={student.luckNumber}
                placeholder="luck number"
                onChange={handleEvents}
                />
            </div> <br />

            <div>
            {/* About: */}
                <textarea 
                name="about"
                value={student.about}
                cols="30" rows="2"
                placeholder="About"
                onChange={handleEvents}
                ></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
    </main>
  );

    function clearForm(){
        student.fName = "";
        student.lName = "";
        student.phoneNumber = "";
        student.DOB = "";
        student.color = "#2e6076";
        student.colorName = "#2e6076";
        student.range = 50;
        student.education="";
        student.about = "";
        student.luckNumber = "";
        setGender("");
        setHobbies([]);
    }

    function handleGender(e){
        setGender(e.target.value);
    }

    function handleEvents(e){
        let value = e.target.value;
        let name = e.target.name;
        setStudent((preValue) => {
          return {
            ...preValue,
            [name]: value
          }
        });
    }

    function handleHobbies(e){
        const {value, checked} = e.target;
        if(checked){
            const newHobbies = [...hobbies]
            setHobbies([...newHobbies, value])
        }else{
            const newHobbies = [...hobbies]
            const item = newHobbies.filter(each => each !== value)
            setHobbies(item);
        }
    }

    function handelSubmit(e){
        e.preventDefault()
        let newData = [...data];
        let newStudent = 
            {   
                _id:uuid4(),
                firstName: student.fName, 
                lastName: student.lName, 
                DOB: student.DOB,
                phoneNumber: student.phoneNumber,
                favoriteColor: student.color,
                courseSatisfaction: student.range,
                education: student.education,
                hobbies:hobbies,
                gender: gender,
                luckNumber:student.luckNumber,
                about:student.about
            }
        newData.push(newStudent);
        console.log(newStudent);
        setData(newData);
        clearForm();
    }
}

export default StudentForm;