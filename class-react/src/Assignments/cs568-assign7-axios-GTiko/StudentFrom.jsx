import { useEffect, useState } from "react";
import {v4 as uuid4 } from "uuid";
import React from "react";
import "./StudentForm.css";
import axios from "axios";

function StudentForm() {
    const [postedData, setPostedData] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    const [gender, setGender] = useState("");
    const MIN_DOB = "2000-12-30";
    const MAX_DOB = "2029-12-30";
    const [student, setStudent] = useState({
        _id:"",
        firstName:"",
        lastName:"",
        DOB:"",
        phoneNumber:"",
        favoriteColor:"#ffffff",
        colorName:"#ffffff",
        courseSatisfaction:50,
        education:"",
        luckNumber:"",
        about:""
    });
    
    let [isSubmitHidden, setIsSubmitHidden] = useState(false);
    let [isUpdateHidden, setIsUpdateHidden] =useState(true);

    const hobbiesList = ["Basketball", "motorcycle", "pool billiards"];
    const educationList = ["high school", "collage", "bachelor", "master", "doctor"];

    useEffect(() => {
        axios.get("http://localhost:8000/Student/").then(res => {
            setPostedData(res.data)
        })
      }, []);

      console.log(postedData);

  return(
    <main>
        <h1>Registration Form</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Full name</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Phone number</th>
                    <th>Favorite color</th>
                    <th>Evaluation</th>
                    <th>Education</th>
                    <th>Hobbies</th>
                    <th>Number</th>
                    <th>About</th>
                    <th>Action</th>
                </tr>
                {postedData.map(each =>
                    <tr key={each._id}>
                        <td>{each._id}</td>
                        <td>{each.firstName} {each.lastName}</td>
                        <td>{each.DOB}</td>
                        <td>{each.gender}</td>
                        <td>{each.phoneNumber}</td>
                        <td>{each.favoriteColor}</td>
                        <td>{each.courseSatisfaction}</td>
                        <td>{each.education}</td>
                        <td>{each.hobbies.map(all =>
                                <div key={all}>{all}</div>
                        )}</td>
                        <td>{each.luckNumber}</td>
                        <td>{each.about}</td>
                        <td>
                            <button 
                                className="btn btn-danger w-100"
                                onClick={()=>{deleteStd(each._id)}} 
                            >Delete</button> <br />

                            <button
                                className="btn btn-warning w-100"
                                onClick={()=>{editStd(each)}}
                            >Edit</button>
                        </td>
                    </tr>
                )}
            </thead>
        </table>
        <br />
        <form onSubmit={handelSubmit}>
            <div>
                <div id="fullName">
                    First name: 
                    <input 
                        required
                        type="text" 
                        name="firstName"
                        value={student.firstName}
                        placeholder="First name" 
                        onChange={handleEvents}
                    /><br />
                    Last name: 
                    <input  
                        required
                        type="text"  
                        name="lastName"
                        value={student.lastName}
                        placeholder="Last name"
                        onChange={handleEvents}
                    /><br />
                </div>
                <div id="phone">
                    Phone number: 
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
                    Birth date: 
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

         </div>
            
            <div>
            <div id="favoriteColor">
                Favorite color:
                <input 
                    type="color" 
                    name="favoriteColor"
                    value={student.favoriteColor}
                    onChange={handleEvents}
                />
                <input 
                    type="text" 
                    name="colorName"
                    value={student.favoriteColor}
                    disabled = {true}
                    placeholder="color number"
                    onChange={handleEvents}
                /><br />
            </div>
            <div id="luckyNumber">
            Lucky number:
                <input 
                type="number"
                name= "luckNumber"
                value={student.luckNumber}
                placeholder="luck number"
                onChange={handleEvents}
                />
            </div> <br />
            <div id="hobbies">
            Hobbies:
                {hobbiesList.map(each => 
                    <label key={each}>&nbsp; 
                       <input 
                       type="checkbox" 
                       value={each}
                       name={each}
                       onChange={handleHobbies}
                       /> <span> {each}  </span>
                    </label>
                )}
            </div>
         </div>

            
         <div>
            <div id="courseScore">
                Course satisfaction score:
                <input 
                    type="range"
                    name="courseSatisfaction"
                    value={student.courseSatisfaction}
                    onChange={handleEvents}
                /><span>{student.courseSatisfaction}</span><br />
            </div>

            <div id="education">
            Education:
                <select value={student.education} name="education" onChange={handleEvents}>
                    <option>Education</option>
                     {
                     educationList.map(each =>
                        <option key={each} value={each} name={each}>{each}</option>  
                    )}
                </select> <br />
            </div>
            <div id="about">
                <textarea 
                name="about"
                value={student.about}
                cols="30" rows="2"
                placeholder="About"
                onChange={handleEvents}
                ></textarea>
            </div>
            <button
                className="btn btn-secondary"
                hidden={isSubmitHidden}
                onSubmit={handelSubmit}
            >Submit</button>
            <UpdateButton/>
        </div>
    </form>
    </main>
  );

  function UpdateButton(){
        return(
            <button
                className="btn btn-success"
                hidden={isUpdateHidden}
                onClick={updateStd}
            >Update</button>
        )
  }

   async function deleteStd(_id){
        await axios.delete(`http://localhost:8000/Student/${_id}`);
        let unDeletedData = postedData.filter(item => item._id !== _id)
        setPostedData([...unDeletedData]);
    }

    async function updateStd(e){
        let value = e.target.value;
        let name = e.target.name;
        setStudent((preValue) => {
          return {
            ...preValue,
            [name]: value,
          }
        });
        
        let stdToUpdate = {...student, gender, hobbies}

        await axios.patch(`http://localhost:8000/Student/`, stdToUpdate);

        let index;
      let newData = [...postedData];
      for(let i=0; i< newData.length; i++){
        if(newData[i]._id === stdToUpdate._id){
          index = i;
          break;
        }
      }
      newData.splice(index,1,stdToUpdate);
    

        clearForm();
        setIsSubmitHidden(false);
        setIsUpdateHidden(true);
        setPostedData(newData);
    }

    function editStd(each){
        console.log(each.courseSatisfaction)
        setGender(each.gender);
        setHobbies(each.hobbies); //doesn't work FIXME:
        setStudent({
            _id:each._id,
            firstName:each.firstName,
            lastName:each.lastName,
            phoneNumber:each.phoneNumber,
            DOB:each.DOB,
            education:each.education,
            favoriteColor: each.favoriteColor,
            courseSatisfaction:each.courseSatisfaction,
            about:each.about,
            luckNumber:each.luckNumber,
        });
        setIsSubmitHidden(true);
        setIsUpdateHidden(false);
    }

    function clearForm(){
        setStudent({
            firstName : "",
            lastName : "",
            phoneNumber : "",
            DOB : "",
            favoriteColor : "#ffffff",
            colorName :"#ffffff",
            courseSatisfaction : 50,
            education:"",
            about : "",
            luckNumber : ""
        })
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

   async function handelSubmit(e){
        e.preventDefault();
        let newStudent =
            {
                _id:uuid4().slice(0,5),
                firstName: student.firstName, 
                lastName: student.lastName, 
                DOB: student.DOB,
                phoneNumber: student.phoneNumber,
                favoriteColor: student.favoriteColor,
                colorName: student.favoriteColor,
                courseSatisfaction: student.courseSatisfaction,
                education: student.education,
                hobbies:hobbies,
                gender: gender,
                luckNumber:student.luckNumber,
                about:student.about
            }
        console.log("newStd: ",newStudent);
        await axios.post("http://localhost:8000/Student/",newStudent);
        setPostedData([...postedData, newStudent]);
        clearForm();
    }
}

export default StudentForm;